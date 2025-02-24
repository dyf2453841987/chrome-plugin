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
    const hexTab = document.getElementById('hexTab');
    const hexSection = document.getElementById('hexSection');
    const base64Tab = document.getElementById('base64Tab');
    const base64Section = document.getElementById('base64Section');
    const crontabTab = document.getElementById('crontabTab');
    const crontabSection = document.getElementById('crontabSection');
    const sqlTab = document.getElementById('sqlTab');
    const sqlSection = document.getElementById('sqlSection');

    jsonTab.addEventListener('click', () => {
        jsonTab.classList.add('active');
        jsonToJavaTab.classList.remove('active');
        timestampTab.classList.remove('active');
        yamlTab.classList.remove('active');
        hexTab.classList.remove('active');
        base64Tab.classList.remove('active');
        crontabTab.classList.remove('active');
        sqlTab.classList.remove('active');
        jsonSection.style.display = 'block';
        jsonToJavaSection.style.display = 'none';
        timestampSection.style.display = 'none';
        yamlSection.style.display = 'none';
        hexSection.style.display = 'none';
        base64Section.style.display = 'none';
        crontabSection.style.display = 'none';
        sqlSection.style.display = 'none';
    });

    jsonToJavaTab.addEventListener('click', () => {
        jsonToJavaTab.classList.add('active');
        jsonTab.classList.remove('active');
        timestampTab.classList.remove('active');
        yamlTab.classList.remove('active');
        hexTab.classList.remove('active');
        base64Tab.classList.remove('active');
        crontabTab.classList.remove('active');
        sqlTab.classList.remove('active');
        jsonToJavaSection.style.display = 'block';
        jsonSection.style.display = 'none';
        timestampSection.style.display = 'none';
        yamlSection.style.display = 'none';
        hexSection.style.display = 'none';
        base64Section.style.display = 'none';
        crontabSection.style.display = 'none';
        sqlSection.style.display = 'none';
    });

    timestampTab.addEventListener('click', () => {
        timestampTab.classList.add('active');
        jsonTab.classList.remove('active');
        jsonToJavaTab.classList.remove('active');
        yamlTab.classList.remove('active');
        hexTab.classList.remove('active');
        base64Tab.classList.remove('active');
        crontabTab.classList.remove('active');
        sqlTab.classList.remove('active');
        timestampSection.style.display = 'block';
        jsonSection.style.display = 'none';
        jsonToJavaSection.style.display = 'none';
        yamlSection.style.display = 'none';
        hexSection.style.display = 'none';
        base64Section.style.display = 'none';
        crontabSection.style.display = 'none';
        sqlSection.style.display = 'none';

        // 显示当前时间戳
        const isMilliseconds = document.querySelector('input[name="timestampType"]:checked').value === 'milliseconds';
        const now = isMilliseconds ? Date.now() : Math.floor(Date.now() / 1000);
        document.getElementById('timestampInput').value = now;
        
        // 同时显示当前时间的格式化字符串
        const date = new Date(isMilliseconds ? now : now * 1000);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        document.getElementById('timestampOutput').value = formattedDate;
    });

    yamlTab.addEventListener('click', () => {
        yamlTab.classList.add('active');
        jsonTab.classList.remove('active');
        jsonToJavaTab.classList.remove('active');
        timestampTab.classList.remove('active');
        hexTab.classList.remove('active');
        base64Tab.classList.remove('active');
        crontabTab.classList.remove('active');
        sqlTab.classList.remove('active');
        yamlSection.style.display = 'block';
        jsonSection.style.display = 'none';
        jsonToJavaSection.style.display = 'none';
        timestampSection.style.display = 'none';
        hexSection.style.display = 'none';
        base64Section.style.display = 'none';
        crontabSection.style.display = 'none';
        sqlSection.style.display = 'none';
    });

    hexTab.addEventListener('click', () => {
        hexTab.classList.add('active');
        jsonTab.classList.remove('active');
        jsonToJavaTab.classList.remove('active');
        timestampTab.classList.remove('active');
        yamlTab.classList.remove('active');
        base64Tab.classList.remove('active');
        crontabTab.classList.remove('active');
        sqlTab.classList.remove('active');
        hexSection.style.display = 'block';
        jsonSection.style.display = 'none';
        jsonToJavaSection.style.display = 'none';
        timestampSection.style.display = 'none';
        yamlSection.style.display = 'none';
        base64Section.style.display = 'none';
        crontabSection.style.display = 'none';
        sqlSection.style.display = 'none';
    });

    base64Tab.addEventListener('click', () => {
        base64Tab.classList.add('active');
        jsonTab.classList.remove('active');
        jsonToJavaTab.classList.remove('active');
        timestampTab.classList.remove('active');
        hexTab.classList.remove('active');
        yamlTab.classList.remove('active');
        crontabTab.classList.remove('active');
        sqlTab.classList.remove('active');
        base64Section.style.display = 'block';
        jsonSection.style.display = 'none';
        jsonToJavaSection.style.display = 'none';
        timestampSection.style.display = 'none';
        hexSection.style.display = 'none';
        yamlSection.style.display = 'none';
        crontabSection.style.display = 'none';
        sqlSection.style.display = 'none';
    });

    crontabTab.addEventListener('click', () => {
        crontabTab.classList.add('active');
        jsonTab.classList.remove('active');
        jsonToJavaTab.classList.remove('active');
        timestampTab.classList.remove('active');
        hexTab.classList.remove('active');
        base64Tab.classList.remove('active');
        yamlTab.classList.remove('active');
        sqlTab.classList.remove('active');
        crontabSection.style.display = 'block';
        jsonSection.style.display = 'none';
        jsonToJavaSection.style.display = 'none';
        timestampSection.style.display = 'none';
        hexSection.style.display = 'none';
        base64Section.style.display = 'none';
        yamlSection.style.display = 'none';
        sqlSection.style.display = 'none';
    });

    sqlTab.addEventListener('click', function() {
        console.log('SQL tab clicked'); // 调试用
        
        // 移除所有tab的active类
        jsonTab.classList.remove('active');
        jsonToJavaTab.classList.remove('active');
        timestampTab.classList.remove('active');
        yamlTab.classList.remove('active');
        hexTab.classList.remove('active');
        base64Tab.classList.remove('active');
        crontabTab.classList.remove('active');
        
        // 隐藏所有section
        jsonSection.style.display = 'none';
        jsonToJavaSection.style.display = 'none';
        timestampSection.style.display = 'none';
        yamlSection.style.display = 'none';
        hexSection.style.display = 'none';
        base64Section.style.display = 'none';
        crontabSection.style.display = 'none';
        
        // 激活SQL tab和section
        sqlTab.classList.add('active');
        sqlSection.style.display = 'block';
        
        // 初始化SQL相关的事件监听器
        initializeSqlEventListeners();
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
        const isMilliseconds = document.querySelector('input[name="timestampType"]:checked').value === 'milliseconds';
        
        try {
            let timestamp = parseInt(timestampInput);
            
            // 根据选择的类型进行转换
            if (isMilliseconds) {
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

    // 获取当前时间戳按钮的事件处理
    document.getElementById('getCurrentTimestamp').addEventListener('click', function() {
        const isMilliseconds = document.querySelector('input[name="timestampType"]:checked').value === 'milliseconds';
        const now = isMilliseconds ? Date.now() : Math.floor(Date.now() / 1000);
        document.getElementById('timestampInput').value = now;
        
        // 同时更新格式化的时间显示
        const date = new Date(isMilliseconds ? now : now * 1000);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        document.getElementById('timestampOutput').value = formattedDate;
    });

    // 进制转换功能
    document.getElementById('convertNumber').addEventListener('click', function() {
        const input = document.getElementById('hexInput').value.trim();
        const selectedSystem = document.querySelector('input[name="numberSystem"]:checked').value;
        
        try {
            let decimalNumber;
            
            // 根据选择的进制类型解析输入
            switch(selectedSystem) {
                case 'dec':
                    decimalNumber = parseInt(input, 10);
                    break;
                case 'hex':
                    decimalNumber = parseInt(input.replace(/^0x/i, ''), 16);
                    break;
                case 'oct':
                    decimalNumber = parseInt(input.replace(/^0o/i, ''), 8);
                    break;
                case 'bin':
                    decimalNumber = parseInt(input.replace(/^0b/i, ''), 2);
                    break;
            }

            if (isNaN(decimalNumber)) {
                throw new Error('无效的输入');
            }

            // 显示各种进制的结果
            document.getElementById('decResult').textContent = decimalNumber;
            document.getElementById('hexResult').textContent = '0x' + decimalNumber.toString(16).toUpperCase();
            document.getElementById('octResult').textContent = '0o' + decimalNumber.toString(8);
            document.getElementById('binResult').textContent = '0b' + decimalNumber.toString(2);
        } catch (error) {
            console.error("进制转换错误:", error);
            alert("请输入有效的数值！");
        }
    });

    // 添加输入框的实时转换功能
    document.getElementById('hexInput').addEventListener('input', function() {
        const convertButton = document.getElementById('convertNumber');
        if (this.value.trim()) {
            convertButton.click();
        } else {
            document.getElementById('decResult').textContent = '-';
            document.getElementById('hexResult').textContent = '-';
            document.getElementById('octResult').textContent = '-';
            document.getElementById('binResult').textContent = '-';
        }
    });

    // 子标签切换逻辑
    document.querySelectorAll('.sub-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有子标签的 active 类
            document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
            // 隐藏所有子部分
            document.querySelectorAll('.sub-section').forEach(s => s.style.display = 'none');
            
            // 激活当前子标签
            this.classList.add('active');
            // 显示对应的子部分
            document.getElementById(this.dataset.target).style.display = 'block';
        });
    });

    // 图片转Base64功能优化
    document.getElementById('imageInput').addEventListener('change', async function(e) {
        const file = e.target.files[0];
        if (!file) return;

        // 修改文件大小限制为15MB
        const MAX_SIZE = 15 * 1024 * 1024; // 15MB
        if (file.size > MAX_SIZE) {
            alert('图片大小不能超过15MB！');
            return;
        }

        // 显示加载提示
        const loadingText = document.createElement('div');
        loadingText.textContent = '正在处理图片...';
        loadingText.style.textAlign = 'center';
        const previewArea = document.querySelector('.preview-area');
        previewArea.appendChild(loadingText);

        try {
            // 压缩图片
            const compressedImage = await compressImage(file);
            
            // 转换为Base64
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64 = e.target.result;
                document.getElementById('base64Output').value = base64;
                
                // 显示图片预览
                const preview = document.getElementById('imagePreview');
                preview.src = base64;
                preview.style.display = 'block';
                
                // 移除加载提示
                loadingText.remove();
            };
            reader.readAsDataURL(compressedImage);
        } catch (error) {
            console.error('图片处理错误:', error);
            alert('图片处理失败！');
            loadingText.remove();
        }
    });

    // 图片压缩函数
    function compressImage(file) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            
            img.onload = () => {
                // 计算压缩后的尺寸
                let width = img.width;
                let height = img.height;
                const MAX_WIDTH = 1024;
                const MAX_HEIGHT = 1024;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                // 创建canvas进行压缩
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // 转换为Blob
                canvas.toBlob((blob) => {
                    resolve(blob);
                }, file.type, 0.7); // 压缩质量为0.7

                // 释放内存
                URL.revokeObjectURL(img.src);
            };

            img.onerror = reject;
        });
    }

    // 复制Base64按钮功能
    document.getElementById('copyBase64').addEventListener('click', function() {
        const base64Output = document.getElementById('base64Output');
        base64Output.select();
        document.execCommand('copy');
        alert('Base64已复制到剪贴板！');
    });

    // Base64转图片功能优化
    document.getElementById('convertToImage').addEventListener('click', function() {
        const base64Input = document.getElementById('base64Input').value.trim();
        const preview = document.getElementById('base64ImagePreview');
        
        try {
            // 显示加载提示
            const loadingText = document.createElement('div');
            loadingText.textContent = '正在转换...';
            loadingText.style.textAlign = 'center';
            preview.parentElement.appendChild(loadingText);

            // 如果输入的base64不包含data:image前缀，添加它
            const base64Data = base64Input.startsWith('data:image') ? 
                base64Input : 
                'data:image/png;base64,' + base64Input;

            // 预加载图片
            const img = new Image();
            img.onload = function() {
                preview.src = base64Data;
                preview.style.display = 'block';
                loadingText.remove();
            };
            img.onerror = function() {
                alert('无效的Base64编码！');
                loadingText.remove();
            };
            img.src = base64Data;
        } catch (error) {
            console.error('Base64转换错误:', error);
            alert('请输入有效的Base64编码！');
        }
    });

    // Crontab 计算功能
    document.getElementById('calculateCron').addEventListener('click', function() {
        const cronExpression = document.getElementById('cronExpression').value.trim();
        calculateNextExecutions(cronExpression);
    });

    // 示例点击事件
    document.querySelectorAll('.example-item').forEach(item => {
        item.addEventListener('click', function() {
            const cronExp = this.getAttribute('data-cron');
            document.getElementById('cronExpression').value = cronExp;
            calculateNextExecutions(cronExp);
        });
    });

    // 计算未来执行时间
    function calculateNextExecutions(cronExp) {
        try {
            const execTimes = [];
            let currentDate = new Date();
            
            // 解析 cron 表达式
            const [minute, hour, day, month, weekday] = cronExp.split(' ');
            
            // 验证表达式格式
            if (!isValidCronExpression(minute, hour, day, month, weekday)) {
                throw new Error('无效的 Cron 表达式');
            }

            // 计算未来10次执行时间
            let nextDate = new Date(currentDate);
            for(let i = 0; i < 10; i++) {
                nextDate = findNext(nextDate, minute, hour, day, month, weekday);
                execTimes.push(formatDate(nextDate));
                nextDate = new Date(nextDate.getTime() + 60000); // 加一分钟以找下一次
            }
            
            // 显示结果
            document.getElementById('executionTimes').innerHTML = execTimes.join('<br>');
        } catch (error) {
            console.error('Cron 表达式解析错误:', error);
            alert('请输入有效的 Cron 表达式！');
        }
    }

    // 验证 cron 表达式
    function isValidCronExpression(minute, hour, day, month, weekday) {
        const minutePattern = /^(\*|[0-5]?[0-9])(\/[0-9]+)?$/;
        const hourPattern = /^(\*|[01]?[0-9]|2[0-3])(\/[0-9]+)?$/;
        const dayPattern = /^(\*|[1-2]?[0-9]|3[01])(\/[0-9]+)?$/;
        const monthPattern = /^(\*|[1-9]|1[0-2])(\/[0-9]+)?$/;
        const weekdayPattern = /^(\*|[0-6])(\/[0-9]+)?$/;

        return minutePattern.test(minute) &&
               hourPattern.test(hour) &&
               dayPattern.test(day) &&
               monthPattern.test(month) &&
               weekdayPattern.test(weekday);
    }

    // 解析 cron 值
    function parseCronValue(value, min, max) {
        if (value === '*') {
            return Array.from({length: max - min + 1}, (_, i) => i + min);
        }
        if (value.includes('/')) {
            const [, step] = value.split('/');
            const stepNum = parseInt(step);
            return Array.from({length: Math.floor((max - min) / stepNum) + 1}, 
                             (_, i) => min + (i * stepNum)).filter(v => v <= max);
        }
        return [parseInt(value)];
    }

    // 找到下一个执行时间
    function findNext(currentDate, minute, hour, day, month, weekday) {
        let nextDate = new Date(currentDate);
        nextDate.setSeconds(0);
        nextDate.setMilliseconds(0);

        const minutes = parseCronValue(minute, 0, 59);
        const hours = parseCronValue(hour, 0, 23);
        const days = day === '*' ? [] : parseCronValue(day, 1, 31);
        const months = month === '*' ? [] : parseCronValue(month, 1, 12);
        const weekdays = weekday === '*' ? [] : parseCronValue(weekday, 0, 6);

        while (true) {
            // 检查月份
            if (months.length > 0 && !months.includes(nextDate.getMonth() + 1)) {
                nextDate.setMonth(nextDate.getMonth() + 1);
                nextDate.setDate(1);
                nextDate.setHours(0);
                nextDate.setMinutes(0);
                continue;
            }

            // 检查日期
            if (days.length > 0) {
                if (!days.includes(nextDate.getDate())) {
                    nextDate.setDate(nextDate.getDate() + 1);
                    nextDate.setHours(0);
                    nextDate.setMinutes(0);
                    continue;
                }
            }

            // 检查星期
            if (weekdays.length > 0) {
                if (!weekdays.includes(nextDate.getDay())) {
                    nextDate.setDate(nextDate.getDate() + 1);
                    nextDate.setHours(0);
                    nextDate.setMinutes(0);
                    continue;
                }
            }

            // 检查小时
            if (!hours.includes(nextDate.getHours())) {
                if (nextDate.getHours() > Math.max(...hours)) {
                    nextDate.setDate(nextDate.getDate() + 1);
                    nextDate.setHours(Math.min(...hours));
                } else {
                    nextDate.setHours(hours.find(h => h > nextDate.getHours()) || Math.min(...hours));
                }
                nextDate.setMinutes(Math.min(...minutes));
                continue;
            }

            // 检查分钟
            if (!minutes.includes(nextDate.getMinutes())) {
                if (nextDate.getMinutes() > Math.max(...minutes)) {
                    nextDate.setHours(nextDate.getHours() + 1);
                    nextDate.setMinutes(Math.min(...minutes));
                    continue;
                }
                nextDate.setMinutes(minutes.find(m => m > nextDate.getMinutes()) || Math.min(...minutes));
                continue;
            }

            break;
        }

        return nextDate;
    }

    // 格式化日期
    function formatDate(date) {
        return date.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }

    // SQL类型切换时显示/隐藏相关字段
    document.getElementById('sqlType').addEventListener('change', function() {
        const selectOptions = document.querySelectorAll('.select-options');
        const updateOptions = document.querySelector('.update-options');
        
        selectOptions.forEach(opt => {
            opt.style.display = this.value === 'select' ? 'block' : 'none';
        });
        updateOptions.style.display = this.value === 'update' ? 'block' : 'none';
    });

    // 添加字段行
    document.querySelector('.add-field').addEventListener('click', function() {
        const fieldRow = document.createElement('div');
        fieldRow.className = 'field-row';
        fieldRow.innerHTML = `
            <input type="text" class="field-name" placeholder="字段名">
            <input type="text" class="field-alias" placeholder="别名(可选)">
            <select class="field-function">
                <option value="">无函数</option>
                <option value="COUNT">COUNT</option>
                <option value="SUM">SUM</option>
                <option value="AVG">AVG</option>
                <option value="MAX">MAX</option>
                <option value="MIN">MIN</option>
            </select>
            <button class="remove-row">-</button>
        `;
        document.querySelector('.field-inputs').appendChild(fieldRow);
    });

    // 添加JOIN条件
    document.querySelector('.add-join').addEventListener('click', function() {
        const joinRow = document.createElement('div');
        joinRow.className = 'join-row';
        joinRow.innerHTML = `
            <select class="join-type">
                <option value="JOIN">INNER JOIN</option>
                <option value="LEFT JOIN">LEFT JOIN</option>
                <option value="RIGHT JOIN">RIGHT JOIN</option>
            </select>
            <input type="text" class="join-condition" placeholder="例如: user.id = order.user_id">
            <button class="remove-row">-</button>
        `;
        document.querySelector('.join-inputs').appendChild(joinRow);
    });

    // 添加WHERE条件
    document.querySelector('.add-where').addEventListener('click', function() {
        const whereRow = document.createElement('div');
        whereRow.className = 'where-row';
        whereRow.innerHTML = `
            <input type="text" class="where-field" placeholder="字段">
            <select class="where-operator">
                <option value="=">=</option>
                <option value="!=">!=</option>
                <option value=">">></option>
                <option value="<"><</option>
                <option value=">=">>=</option>
                <option value="<="><=</option>
                <option value="LIKE">LIKE</option>
                <option value="IN">IN</option>
                <option value="NOT IN">NOT IN</option>
                <option value="IS NULL">IS NULL</option>
                <option value="IS NOT NULL">IS NOT NULL</option>
            </select>
            <input type="text" class="where-value" placeholder="值">
            <select class="where-connector">
                <option value="AND">AND</option>
                <option value="OR">OR</option>
            </select>
            <button class="remove-row">-</button>
        `;
        document.querySelector('.where-inputs').appendChild(whereRow);
    });

    // 添加ORDER BY条件
    document.querySelector('.add-order-by').addEventListener('click', function() {
        const orderByRow = document.createElement('div');
        orderByRow.className = 'order-by-row';
        orderByRow.innerHTML = `
            <input type="text" class="order-by-field" placeholder="字段名">
            <select class="order-direction">
                <option value="ASC">升序</option>
                <option value="DESC">降序</option>
            </select>
            <button class="remove-row">-</button>
        `;
        document.querySelector('.order-by-inputs').appendChild(orderByRow);
    });

    // 添加SET子句
    document.querySelector('.add-set').addEventListener('click', function() {
        const setRow = document.createElement('div');
        setRow.className = 'set-row';
        setRow.innerHTML = `
            <input type="text" class="set-field" placeholder="字段名">
            <input type="text" class="set-value" placeholder="新值">
            <button class="remove-row">-</button>
        `;
        document.querySelector('.set-inputs').appendChild(setRow);
    });

    // 删除行通用处理
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-row')) {
            e.target.parentElement.remove();
        }
    });

    // SQL注入防护
    function sanitizeInput(input) {
        // 基本的SQL注入防护
        return input.replace(/['";\\]/g, '\\$&');
    }

    // 验证SQL按钮点击事件
    document.getElementById('validateSql').addEventListener('click', function() {
        const sql = document.getElementById('sqlOutput').value;
        const errorDiv = document.getElementById('sqlError');
        
        try {
            // 基本的SQL语法验证
            validateSqlSyntax(sql);
            errorDiv.style.display = 'none';
            alert('SQL语法验证通过！');
        } catch (error) {
            errorDiv.textContent = '错误: ' + error.message;
            errorDiv.style.display = 'block';
        }
    });

    // SQL语法验证
    function validateSqlSyntax(sql) {
        // 基本的SQL语法检查
        if (!sql.trim()) {
            throw new Error('SQL语句不能为空');
        }
        
        const sqlType = sql.trim().split(' ')[0].toUpperCase();
        if (!['SELECT', 'UPDATE', 'DELETE'].includes(sqlType)) {
            throw new Error('不支持的SQL类型');
        }
        
        // 检查基本的SQL注入风险
        if (/;.+/i.test(sql)) {
            throw new Error('检测到多条SQL语句，可能存在SQL注入风险');
        }
        
        // 更多的语法检查规则...
    }

    // 添加表名行
    document.querySelector('.add-table').addEventListener('click', function() {
        const tableRow = document.createElement('div');
        tableRow.className = 'table-row';
        tableRow.innerHTML = `
            <input type="text" class="table-name" placeholder="表名">
            <input type="text" class="table-alias" placeholder="别名" style="width: 80px;">
            <button class="remove-row">-</button>
        `;
        document.querySelector('.table-inputs').appendChild(tableRow);

        // 为新添加的表名输入框添加自动补全别名功能
        const newTableInput = tableRow.querySelector('.table-name');
        newTableInput.addEventListener('input', function() {
            const aliasInput = this.parentElement.querySelector('.table-alias');
            if (!aliasInput.value) {
                const tableName = this.value.trim();
                if (tableName) {
                    aliasInput.value = tableName.charAt(0).toUpperCase();
                }
            }
        });
    });

    // 修改 generateSelectSql 函数以更好地支持表别名和条件
    function generateSelectSql(dbName, tables, fields, joins, whereConditions, groupBy, having, orderBy) {
        let sql = 'SELECT ';
        
        // 处理查询字段
        if (fields && fields.length > 0) {
            const selectedFields = fields.map(f => {
                let field = f.name;
                if (f.function) {
                    field = `${f.function}(${field})`;
                }
                if (f.alias) {
                    field += ` AS ${f.alias}`;
                }
                return field;
            }).join(', ');
            sql += selectedFields;
        } else {
            sql += '*'; // 如果没有指定字段，则查询所有字段
        }

        // 处理FROM子句，包含表名和别名
        const mainTable = tables[0];
        sql += `\nFROM ${dbName}.${mainTable.name}`;
        if (mainTable.alias) {
            sql += ` ${mainTable.alias}`; // 注意这里去掉了AS关键字，使语法更简洁
        }
        
        // 处理JOIN，使用表别名
        if (joins && joins.length > 0) {
            joins.forEach((join, index) => {
                const joinTable = tables[index + 1];
                if (!joinTable) return; // 防止数组越界
                
                sql += `\n${join.type} ${dbName}.${joinTable.name}`;
                if (joinTable.alias) {
                    sql += ` ${joinTable.alias}`; // 同样去掉AS关键字
                }
                sql += ` ON ${join.condition}`;
            });
        }
        
        // 处理WHERE条件
        if (whereConditions && whereConditions.length > 0) {
            sql += '\nWHERE ';
            sql += whereConditions.map((condition, index) => {
                let clause = '';
                if (index > 0) {
                    clause += `${condition.connector} `; // 添加连接词（AND/OR）
                }
                
                if (['IS NULL', 'IS NOT NULL'].includes(condition.operator)) {
                    clause += `${condition.field} ${condition.operator}`;
                } else if (condition.operator === 'IN' || condition.operator === 'NOT IN') {
                    // 处理IN条件
                    let values = condition.value.split(',').map(v => v.trim());
                    values = values.map(v => isNaN(v) ? `'${v}'` : v);
                    clause += `${condition.field} ${condition.operator} (${values.join(', ')})`;
                } else {
                    // 处理普通条件
                    let value = condition.value;
                    // 如果是字符串且没有引号，添加引号
                    if (typeof value === 'string' && !value.startsWith("'") && !value.endsWith("'") && isNaN(value)) {
                        value = `'${value}'`;
                    }
                    clause += `${condition.field} ${condition.operator} ${value}`;
                }
                return clause;
            }).join(' ');
        }
        
        // 处理GROUP BY
        if (groupBy && groupBy.length > 0) {
            sql += '\nGROUP BY ' + groupBy.join(', ');
            if (having) {
                sql += '\nHAVING ' + having;
            }
        }
        
        // 处理ORDER BY
        if (orderBy && orderBy.length > 0) {
            sql += '\nORDER BY ' + orderBy.map(o => `${o.field} ${o.direction}`).join(', ');
        }
        
        return sql + ';';
    }

    // 修改 initializeSqlEventListeners 函数中的生成SQL按钮部分
    function initializeSqlEventListeners() {
        console.log('Initializing SQL event listeners...'); // 调试用

        // 为所有SQL类型按钮添加点击事件
        const sqlTypeButtons = document.querySelectorAll('.sql-type-btn');
        console.log('Found SQL type buttons:', sqlTypeButtons.length); // 调试用
        sqlTypeButtons.forEach(btn => {
            btn.onclick = function() {
                document.querySelectorAll('.sql-type-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // 根据SQL类型显示/隐藏SET子句输入
                const setClause = document.querySelector('.set-clause');
                if (setClause) {
                    setClause.style.display = this.dataset.type === 'update' ? 'block' : 'none';
                }
            };
        });

        // 添加表行按钮
        const addTableBtn = document.querySelector('.add-table');
        console.log('Found add table button:', addTableBtn); // 调试用
        if (addTableBtn) {
            addTableBtn.onclick = function() {
                const tableRow = document.createElement('div');
                tableRow.className = 'table-row';
                tableRow.innerHTML = `
                    <input type="text" class="table-name" placeholder="表名">
                    <input type="text" class="table-alias" placeholder="别名" style="width: 80px;">
                    <button class="remove-row">-</button>
                `;
                document.querySelector('.table-inputs').appendChild(tableRow);
            };
        }

        // 添加查询条件按钮
        const addWhereBtn = document.querySelector('.add-where');
        console.log('Found add where button:', addWhereBtn); // 调试用
        if (addWhereBtn) {
            addWhereBtn.onclick = function() {
                const whereRow = document.createElement('div');
                whereRow.className = 'where-row';
                whereRow.innerHTML = `
                    <input type="text" class="where-field" placeholder="字段名">
                    <select class="where-operator" style="width: 100px;">
                        <option value="=">=</option>
                        <option value="!=">!=</option>
                        <option value=">">></option>
                        <option value="<"><</option>
                        <option value=">=">>=</option>
                        <option value="<="><=</option>
                        <option value="LIKE">LIKE</option>
                        <option value="IN">IN</option>
                        <option value="IS NULL">IS NULL</option>
                    </select>
                    <input type="text" class="where-value" placeholder="值">
                    <select class="where-connector" style="width: 70px;">
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                    </select>
                    <button class="remove-row">-</button>
                `;
                document.querySelector('.where-inputs').appendChild(whereRow);
            };
        }

        // 删除行按钮（使用事件委托）
        document.body.onclick = function(e) {
            if (e.target.classList.contains('remove-row')) {
                e.target.parentElement.remove();
            }
        };

        // 修改SQL输出框为可编辑
        const sqlOutput = document.getElementById('sqlOutput');
        if (sqlOutput) {
            // 移除readonly属性
            sqlOutput.removeAttribute('readonly');
        }

        // 格式化SQL按钮
        const formatSqlBtn = document.getElementById('formatSql');
        if (formatSqlBtn) {
            formatSqlBtn.onclick = function() {
                const sqlOutput = document.getElementById('sqlOutput');
                const sql = sqlOutput.value.trim();
                if (sql) {
                    try {
                        sqlOutput.value = formatSQL(sql);
                    } catch (error) {
                        alert('格式化SQL出错: ' + error.message);
                    }
                } else {
                    alert('请先输入SQL语句');
                }
            };
        }

        // 生成SQL按钮
        const generateSqlBtn = document.getElementById('generateSql');
        if (generateSqlBtn) {
            generateSqlBtn.onclick = function() {
                try {
                    const sqlType = document.querySelector('.sql-type-btn.active').dataset.type;
                    let sql = '';
                    
                    switch(sqlType) {
                        case 'select':
                            sql = generateSimpleSelectSql();
                            break;
                        case 'update':
                            sql = generateSimpleUpdateSql();
                            break;
                        case 'delete':
                            sql = generateSimpleDeleteSql();
                            break;
                        default:
                            throw new Error('未支持的SQL类型');
                    }
                    
                    document.getElementById('sqlOutput').value = sql;
                } catch (error) {
                    alert('生成SQL出错: ' + error.message);
                }
            };
        }

        // 复制SQL按钮
        const copySqlBtn = document.getElementById('copySql');
        if (copySqlBtn) {
            copySqlBtn.onclick = function() {
                const sqlOutput = document.getElementById('sqlOutput');
                if (sqlOutput.value.trim()) {
                    sqlOutput.select();
                    document.execCommand('copy');
                    alert('SQL已复制到剪贴板！');
                } else {
                    alert('没有可复制的SQL语句');
                }
            };
        }

        // 清空表单按钮
        const clearFormBtn = document.getElementById('clearForm');
        if (clearFormBtn) {
            clearFormBtn.onclick = function() {
                // 清空数据库名
                document.getElementById('dbName').value = '';
                
                // 清空表格行，保留第一行
                const tableRows = document.querySelectorAll('.table-row');
                tableRows.forEach((row, index) => {
                    if (index === 0) {
                        // 清空第一行的输入
                        row.querySelector('.table-name').value = '';
                        row.querySelector('.table-alias').value = '';
                    } else {
                        // 删除其他行
                        row.remove();
                    }
                });

                // 清空JOIN条件
                const joinCondition = document.querySelector('.join-condition');
                if (joinCondition) {
                    joinCondition.value = '';
                }

                // 清空WHERE条件，保留第一行
                const whereRows = document.querySelectorAll('.where-row');
                whereRows.forEach((row, index) => {
                    if (index === 0) {
                        // 清空第一行的输入
                        row.querySelector('.where-field').value = '';
                        row.querySelector('.where-value').value = '';
                        // 重置选择框为默认值
                        row.querySelector('.where-operator').selectedIndex = 0;
                        row.querySelector('.where-connector').selectedIndex = 0;
                    } else {
                        // 删除其他行
                        row.remove();
                    }
                });

                // 清空SQL输出
                document.getElementById('sqlOutput').value = '';

                // 重置SQL类型为SELECT
                document.querySelectorAll('.sql-type-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.type === 'select') {
                        btn.classList.add('active');
                    }
                });

                // 清空SET条件，保留第一行
                const setRows = document.querySelectorAll('.set-row');
                setRows.forEach((row, index) => {
                    if (index === 0) {
                        // 清空第一行的输入
                        row.querySelector('.set-field').value = '';
                        row.querySelector('.set-value').value = '';
                    } else {
                        // 删除其他行
                        row.remove();
                    }
                });
            };
        }
    }

    // SQL格式化函数
    function formatSQL(sql) {
        // 基本的SQL验证
        if (!sql.match(/\b(SELECT|UPDATE|DELETE|INSERT)\b/i)) {
            throw new Error('无效的SQL语句');
        }

        // 移除多余的空白字符
        sql = sql.replace(/\s+/g, ' ').trim();

        // 主要关键字
        const keywords = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 
                         'HAVING', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 
                         'LIMIT', 'OFFSET', 'UPDATE', 'DELETE', 'INSERT INTO', 'VALUES'];

        // 在关键字前添加换行
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            sql = sql.replace(regex, `\n${keyword}`);
        });

        // 处理括号
        sql = sql.replace(/\(/g, '\n(');
        sql = sql.replace(/\)/g, ')\n');

        // 分割成行
        let lines = sql.split('\n').filter(line => line.trim());

        // 缩进处理
        let indentLevel = 0;
        let formattedLines = lines.map(line => {
            line = line.trim();
            
            // 减少缩进的情况
            if (line.startsWith(')')) {
                indentLevel = Math.max(0, indentLevel - 1);
            }

            // 添加缩进
            const indent = '    '.repeat(indentLevel);
            let formattedLine = indent + line;

            // 增加缩进的情况
            if (line.includes('(') && !line.includes(')')) {
                indentLevel++;
            }

            return formattedLine;
        });

        // 特殊处理AND/OR，增加额外缩进
        formattedLines = formattedLines.map(line => {
            if (line.trim().startsWith('AND ') || line.trim().startsWith('OR ')) {
                return line.replace(/^(\s*)/, '$1    ');
            }
            return line;
        });

        // 移除行尾的逗号
        formattedLines = formattedLines.map(line => line.replace(/,\s*$/, ''));

        // 合并所有行
        let formattedSQL = formattedLines.join('\n');

        // 确保以分号结束
        if (!formattedSQL.trim().endsWith(';')) {
            formattedSQL += ';';
        }

        return formattedSQL;
    }

    // 修改生成SELECT SQL的函数，不再使用addJoinsAndWhere
    function generateSimpleSelectSql() {
        const dbName = document.getElementById('dbName').value.trim();
        const tables = collectTables();
        
        if (!dbName) throw new Error('请输入数据库名！');
        if (tables.length === 0) throw new Error('请至少输入一个表名！');

        let sql = 'SELECT *\n';
        sql += `FROM ${dbName}.${tables[0].name}`;
        if (tables[0].alias) sql += ` ${tables[0].alias}`;

        // 处理JOIN
        const joins = collectJoins();
        if (joins.length > 0) {
            joins.forEach((join, index) => {
                if (tables[index + 1]) {
                    sql += `\n${join.type} ${dbName}.${tables[index + 1].name}`;
                    if (tables[index + 1].alias) {
                        sql += ` ${tables[index + 1].alias}`;
                    }
                    sql += ` ON ${join.condition}`;
                }
            });
        }

        // 处理WHERE条件
        const where = collectWhere();
        if (where.length > 0) {
            sql += '\nWHERE ' + where.map((condition, index) => {
                const connector = index > 0 ? condition.connector + ' ' : '';
                let value = condition.value;
                if (typeof value === 'string' && !value.startsWith("'") && !value.endsWith("'") && isNaN(value)) {
                    value = `'${value}'`;
                }
                return connector + `${condition.field} ${condition.operator} ${value}`;
            }).join('');
        }

        return formatSQL(sql + ';');
    }

    // 在generateSimpleSelectSql函数后添加完整的UPDATE和DELETE函数实现
    function generateSimpleUpdateSql() {
        const dbName = document.getElementById('dbName').value.trim();
        const tables = collectTables();
        
        if (!dbName) throw new Error('请输入数据库名！');
        if (tables.length === 0) throw new Error('请至少输入一个表名！');

        let sql = `UPDATE ${dbName}.${tables[0].name}`;
        if (tables[0].alias) sql += ` ${tables[0].alias}`;

        // 处理JOIN
        const joins = collectJoins();
        if (joins.length > 0) {
            joins.forEach((join, index) => {
                if (tables[index + 1]) {
                    sql += `\n${join.type} ${dbName}.${tables[index + 1].name}`;
                    if (tables[index + 1].alias) {
                        sql += ` ${tables[index + 1].alias}`;
                    }
                    sql += ` ON ${join.condition}`;
                }
            });
        }

        // 处理SET子句
        const setClauses = collectSetClauses();
        if (setClauses.length === 0) {
            throw new Error('请至少输入一个要修改的字段！');
        }
        
        sql += '\nSET ' + setClauses.map(set => {
            let value = set.value;
            if (typeof value === 'string' && !value.startsWith("'") && !value.endsWith("'") && isNaN(value)) {
                value = `'${value}'`;
            }
            return `${set.field} = ${value}`;
        }).join(',\n    ');

        // 处理WHERE条件
        const where = collectWhere();
        if (where.length > 0) {
            sql += '\nWHERE ' + where.map((condition, index) => {
                const connector = index > 0 ? condition.connector + ' ' : '';
                let value = condition.value;
                if (typeof value === 'string' && !value.startsWith("'") && !value.endsWith("'") && isNaN(value)) {
                    value = `'${value}'`;
                }
                return connector + `${condition.field} ${condition.operator} ${value}`;
            }).join('');
        }

        return formatSQL(sql + ';');
    }

    function generateSimpleDeleteSql() {
        const dbName = document.getElementById('dbName').value.trim();
        const tables = collectTables();
        
        if (!dbName) throw new Error('请输入数据库名！');
        if (tables.length === 0) throw new Error('请至少输入一个表名！');

        // DELETE语法：DELETE t1,t2 FROM t1 JOIN t2 ON ... WHERE ...
        // 收集所有要删除的表别名
        const deleteAliases = tables.map(table => table.alias)
                                   .filter(alias => alias)
                                   .join(',');
        
        // 构建DELETE语句
        let sql = `DELETE ${deleteAliases}\nFROM ${dbName}.${tables[0].name}`;
        if (tables[0].alias) sql += ` ${tables[0].alias}`;

        // 处理JOIN
        const joins = collectJoins();
        if (joins.length > 0 && tables.length > 1) {
            joins.forEach((join, index) => {
                if (tables[index + 1]) {
                    sql += `\n${join.type} ${dbName}.${tables[index + 1].name}`;
                    if (tables[index + 1].alias) {
                        sql += ` ${tables[index + 1].alias}`;
                    }
                    sql += ` ON ${join.condition}`;
                }
            });
        }

        // 处理WHERE条件
        const where = collectWhere();
        if (where.length > 0) {
            sql += '\nWHERE ' + where.map((condition, index) => {
                const connector = index > 0 ? condition.connector + ' ' : '';
                let value = condition.value;
                if (typeof value === 'string' && !value.startsWith("'") && !value.endsWith("'") && isNaN(value)) {
                    value = `'${value}'`;
                }
                return connector + `${condition.field} ${condition.operator} ${value}`;
            }).join('');
        }

        return formatSQL(sql + ';');
    }

    // 收集表信息
    function collectTables() {
        const tableRows = document.querySelectorAll('.table-row');
        const tables = [];
        
        tableRows.forEach(row => {
            const name = row.querySelector('.table-name').value.trim();
            const alias = row.querySelector('.table-alias').value.trim();
            if (name) {
                tables.push({ name, alias });
            }
        });
        
        return tables;
    }

    // 收集JOIN条件
    function collectJoins() {
        return Array.from(document.querySelectorAll('.join-row')).map(row => ({
            type: row.querySelector('.join-type').value,
            condition: row.querySelector('.join-condition').value.trim()
        })).filter(join => join.condition);
    }

    // 收集WHERE条件
    function collectWhere() {
        return Array.from(document.querySelectorAll('.where-row')).map(row => ({
            field: row.querySelector('.where-field').value.trim(),
            operator: row.querySelector('.where-operator').value,
            value: row.querySelector('.where-value').value.trim(),
            connector: row.querySelector('.where-connector').value
        })).filter(condition => condition.field && (condition.value || ['IS NULL', 'IS NOT NULL'].includes(condition.operator)));
    }

    // 修改收集SET子句的函数
    function collectSetClauses() {
        return Array.from(document.querySelectorAll('.set-row')).map(row => ({
            field: row.querySelector('.set-field').value.trim(),
            value: row.querySelector('.set-value').value.trim()
        })).filter(set => set.field && set.value);
    }
}); 