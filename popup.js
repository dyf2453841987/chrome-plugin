document.addEventListener('DOMContentLoaded', function() {
    // Tab切换逻辑
    const jsonTab = document.getElementById('jsonTab');
    const jsonToJavaTab = document.getElementById('jsonToJavaTab');
    const timestampTab = document.getElementById('timestampTab');
    const yamlTab = document.getElementById('yamlTab');
    const jsonSection = document.getElementById('jsonSection');
    const jsonToJavaSection = document.getElementById('jsonToJavaSection');
    const timestampSection = document.getElementById('timestampSection');
    const yamlSection = document.getElementById('yamlSection');

    jsonTab.addEventListener('click', () => {
        jsonTab.classList.add('active');
        jsonToJavaTab.classList.remove('active');
        timestampTab.classList.remove('active');
        yamlTab.classList.remove('active');
        jsonSection.style.display = 'block';
        jsonToJavaSection.style.display = 'none';
        timestampSection.style.display = 'none';
        yamlSection.style.display = 'none';
    });

    jsonToJavaTab.addEventListener('click', () => {
        jsonToJavaTab.classList.add('active');
        jsonTab.classList.remove('active');
        timestampTab.classList.remove('active');
        yamlTab.classList.remove('active');
        jsonToJavaSection.style.display = 'block';
        jsonSection.style.display = 'none';
        timestampSection.style.display = 'none';
        yamlSection.style.display = 'none';
    });

    timestampTab.addEventListener('click', () => {
        timestampTab.classList.add('active');
        jsonTab.classList.remove('active');
        jsonToJavaTab.classList.remove('active');
        yamlTab.classList.remove('active');
        timestampSection.style.display = 'block';
        jsonSection.style.display = 'none';
        jsonToJavaSection.style.display = 'none';
        yamlSection.style.display = 'none';
    });

    yamlTab.addEventListener('click', () => {
        yamlTab.classList.add('active');
        jsonTab.classList.remove('active');
        jsonToJavaTab.classList.remove('active');
        timestampTab.classList.remove('active');
        yamlSection.style.display = 'block';
        jsonSection.style.display = 'none';
        jsonToJavaSection.style.display = 'none';
        timestampSection.style.display = 'none';
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

    // JSON 转 Java 实体类功能
    document.getElementById('convertToJavaClass').addEventListener('click', function() {
        const jsonInput = document.getElementById('jsonToJavaInput').value;
        try {
            const jsonObject = JSON.parse(jsonInput);
            console.log("Parsed JSON Object:", jsonObject); // 调试信息
            const javaClass = convertJsonToJavaClass(jsonObject, 'JsonRootBean');
            document.getElementById('jsonToJavaInput').value = javaClass;
        } catch (error) {
            console.error("转换为 Java 实体类时出错:", error);
            alert("转换失败，请确保输入的 JSON 格式正确。");
        }
    });

    function convertJsonToJavaClass(jsonObject, className) {
        let javaClass = `public class ${className} {\n`;
        for (const [key, value] of Object.entries(jsonObject)) {
            const type = getJavaType(value);
            javaClass += `    private ${type} ${key};\n`;
        }
        javaClass += `}\n`; // 不生成 Getters 和 Setters
        return javaClass;
    }

    function getJavaType(value) {
        if (Array.isArray(value)) {
            // 处理数组类型
            if (value.length > 0 && typeof value[0] === 'object') {
                return 'List<BeaconList>'; // 假设数组中的对象类型为 BeaconList
            }
            return 'List<Object>'; // 可以根据需要更改
        } else if (typeof value === 'number') {
            return Number.isInteger(value) ? 'int' : 'double';
        } else if (typeof value === 'boolean') {
            return 'boolean';
        } else if (typeof value === 'string') {
            return 'String';
        } else {
            return 'String'; // 默认返回 String
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // 时间戳转换功能
    document.getElementById('convertTimestamp').addEventListener('click', function() {
        const timestampInput = document.getElementById('timestampInput').value.trim();
        try {
            let timestamp = parseInt(timestampInput);
            
            // 如果时间戳是毫秒级的（13位），转换为秒级（10位）
            if (timestamp.toString().length === 13) {
                timestamp = Math.floor(timestamp / 1000);
            }
            
            const date = new Date(timestamp * 1000);
            
            // 格式化日期时间
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            
            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            document.getElementById('timestampOutput').value = formattedDate;
        } catch (error) {
            console.error("时间戳转换错误:", error);
            alert("请输入有效的时间戳！");
        }
    });
}); 