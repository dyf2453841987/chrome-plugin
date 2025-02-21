document.addEventListener('DOMContentLoaded', function() {
    // Tab切换逻辑
    const jsonTab = document.getElementById('jsonTab');
    const yamlTab = document.getElementById('yamlTab');
    const jsonSection = document.getElementById('jsonSection');
    const yamlSection = document.getElementById('yamlSection');

    jsonTab.addEventListener('click', () => {
        jsonTab.classList.add('active');
        yamlTab.classList.remove('active');
        jsonSection.style.display = 'block';
        yamlSection.style.display = 'none';
    });

    yamlTab.addEventListener('click', () => {
        yamlTab.classList.add('active');
        jsonTab.classList.remove('active');
        yamlSection.style.display = 'block';
        jsonSection.style.display = 'none';
    });

    // 普通JSON格式化功能
    document.getElementById('formatJson').addEventListener('click', function() {
        const input = document.getElementById('jsonInput');
        try {
            // 清理JSON文本（移除注释）
            const cleanJson = input.value.split('\n').map(line => {
                return line.split('//')[0].trim();
            }).join('\n');

            // 解析和格式化JSON
            const obj = JSON.parse(cleanJson);
            input.value = JSON.stringify(obj, null, 4);
        } catch (e) {
            alert('无效的JSON格式！' + e.message);
        }
    });

    // 带注释的JSON格式化功能
    document.getElementById('formatJsonWithComments').addEventListener('click', function() {
        const input = document.getElementById('jsonInput');
        try {
            // 收集所有注释
            const comments = [];
            const lines = input.value.split('\n');
            
            lines.forEach(line => {
                const commentMatches = line.match(/\/\/(.*?)(?=\/\/|$)/g);
                if (commentMatches) {
                    commentMatches.forEach(match => {
                        const comment = match.replace('//', '').trim();
                        if (comment) {
                            comments.push(comment);
                        }
                    });
                }
            });

            // 清理JSON文本（移除注释）
            const cleanJson = lines.map(line => {
                return line.split('//')[0].trim();
            }).join('\n');

            // 解析和格式化JSON
            const obj = JSON.parse(cleanJson);
            let formattedLines = JSON.stringify(obj, null, 4).split('\n');

            // 创建注释映射
            const commentMap = new Map();
            let commentIndex = 0;

            // 递归处理对象和数组
            function processObject(obj, prefix = '') {
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        const value = obj[key];
                        const fullPath = prefix ? `${prefix}.${key}` : key;
                        
                        if (Array.isArray(value)) {
                            if (commentIndex < comments.length) {
                                commentMap.set(fullPath, comments[commentIndex++]);
                            }
                            value.forEach((item, index) => {
                                if (typeof item === 'object') {
                                    processObject(item, `${fullPath}[${index}]`);
                                }
                            });
                        } else if (typeof value === 'object' && value !== null) {
                            if (commentIndex < comments.length) {
                                commentMap.set(fullPath, comments[commentIndex++]);
                            }
                            processObject(value, fullPath);
                        } else {
                            if (commentIndex < comments.length) {
                                commentMap.set(fullPath, comments[commentIndex++]);
                            }
                        }
                    }
                }
            }

            processObject(obj);

            // 重新插入注释
            const result = formattedLines.map(line => {
                const propertyMatch = line.match(/"([^"]+)":/);
                if (propertyMatch) {
                    const property = propertyMatch[1];
                    const comment = commentMap.get(property);
                    if (comment) {
                        const padding = ' '.repeat(Math.max(1, 40 - line.length));
                        return `${line}${padding}// ${comment}`;
                    }
                }
                return line;
            });

            input.value = result.join('\n');
        } catch (e) {
            alert('无效的JSON格式！' + e.message);
        }
    });

    // YAML转Properties功能
    document.getElementById('convertToProperties').addEventListener('click', function() {
        const input = document.getElementById('yamlInput');
        try {
            const properties = jsyaml.load(input.value);
            input.value = properties.join('\n');
        } catch (e) {
            alert('无效的YAML格式！' + e.message);
        }
    });

    // Properties转YAML功能
    document.getElementById('convertToYaml').addEventListener('click', function() {
        const input = document.getElementById('yamlInput');
        try {
            // 解析Properties
            const lines = input.value.split('\n');
            const result = {};

            lines.forEach(line => {
                line = line.trim();
                if (line && !line.startsWith('#')) {
                    const [key, ...valueParts] = line.split('=');
                    const value = valueParts.join('=').trim();
                    
                    // 处理嵌套属性
                    const parts = key.trim().split('.');
                    let current = result;
                    
                    for (let i = 0; i < parts.length - 1; i++) {
                        const part = parts[i];
                        if (!current[part]) {
                            current[part] = {};
                        }
                        current = current[part];
                    }
                    
                    // 设置最终值
                    const lastPart = parts[parts.length - 1];
                    current[lastPart] = value;
                }
            });

            // 转换为YAML格式
            let yaml = '';
            function convertToYaml(obj, indent = 0) {
                const spaces = ' '.repeat(indent);
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        const value = obj[key];
                        if (typeof value === 'object' && value !== null) {
                            yaml += `${spaces}${key}:\n`;
                            convertToYaml(value, indent + 2);
                        } else {
                            yaml += `${spaces}${key}: ${value}\n`;
                        }
                    }
                }
            }

            convertToYaml(result);
            input.value = yaml;
        } catch (e) {
            alert('无效的Properties格式！' + e.message);
        }
    });
}); 