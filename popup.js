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

    sqlTab.addEventListener('click', () => {
        // 移除其他tab的active类
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // 隐藏其他section
        document.querySelectorAll('div[id$="Section"]').forEach(s => s.style.display = 'none');
        
        // 激活SQL tab和section
        sqlTab.classList.add('active');
        sqlSection.style.display = 'block';
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
        const selectColumns = document.querySelector('.select-columns');
        const updateValues = document.querySelector('.update-values');
        
        switch(this.value) {
            case 'select':
                selectColumns.style.display = 'block';
                updateValues.style.display = 'none';
                break;
            case 'update':
                selectColumns.style.display = 'none';
                updateValues.style.display = 'block';
                break;
            case 'delete':
                selectColumns.style.display = 'none';
                updateValues.style.display = 'none';
                break;
        }
    });

    // 生成SQL按钮点击事件
    document.getElementById('generateSql').addEventListener('click', function() {
        const dbName = document.getElementById('dbName').value.trim();
        const sqlType = document.getElementById('sqlType').value;
        const tableNames = document.getElementById('tableNames').value.trim();
        const joinConditions = document.getElementById('joinConditions').value.trim();
        const whereConditions = document.getElementById('whereConditions').value.trim();
        const selectColumns = document.getElementById('selectColumns').value.trim();
        const updateValues = document.getElementById('updateValues').value.trim();
        
        if (!dbName || !tableNames) {
            alert('请至少输入数据库名和表名！');
            return;
        }
        
        let sql = '';
        const tables = tableNames.split(',').map(t => t.trim());
        
        try {
            switch(sqlType) {
                case 'select':
                    sql = generateSelectSql(dbName, tables, selectColumns, joinConditions, whereConditions);
                    break;
                case 'update':
                    sql = generateUpdateSql(dbName, tables, updateValues, joinConditions, whereConditions);
                    break;
                case 'delete':
                    sql = generateDeleteSql(dbName, tables, joinConditions, whereConditions);
                    break;
            }
            
            document.getElementById('sqlOutput').value = sql;
        } catch (error) {
            alert('生成SQL时出错: ' + error.message);
        }
    });

    // 复制SQL按钮点击事件
    document.getElementById('copySql').addEventListener('click', function() {
        const sqlOutput = document.getElementById('sqlOutput');
        sqlOutput.select();
        document.execCommand('copy');
        alert('SQL已复制到剪贴板！');
    });

    // 生成SELECT SQL
    function generateSelectSql(dbName, tables, columns, joinConditions, whereConditions) {
        const selectCols = columns && columns !== '*' ? columns : '*';
        let sql = `SELECT ${selectCols}\nFROM ${dbName}.${tables[0]}`;
        
        // 添加JOIN条件
        if (tables.length > 1 && joinConditions) {
            const joins = joinConditions.split('\n').filter(j => j.trim());
            joins.forEach(join => {
                sql += `\nJOIN ${dbName}.${tables[joins.indexOf(join) + 1]} ON ${join.trim()}`;
            });
        }
        
        // 添加WHERE条件
        if (whereConditions) {
            const conditions = whereConditions.split('\n').filter(c => c.trim());
            if (conditions.length > 0) {
                sql += `\nWHERE ${conditions.join('\n  AND ')}`;
            }
        }
        
        return sql + ';';
    }

    // 生成UPDATE SQL
    function generateUpdateSql(dbName, tables, updateValues, joinConditions, whereConditions) {
        if (!updateValues) {
            throw new Error('更新语句需要指定更新值！');
        }
        
        let sql = `UPDATE ${dbName}.${tables[0]}`;
        
        // 添加JOIN条件
        if (tables.length > 1 && joinConditions) {
            const joins = joinConditions.split('\n').filter(j => j.trim());
            joins.forEach(join => {
                sql += `\nJOIN ${dbName}.${tables[joins.indexOf(join) + 1]} ON ${join.trim()}`;
            });
        }
        
        // 添加SET子句
        const setValues = updateValues.split('\n').filter(v => v.trim());
        sql += `\nSET ${setValues.join(',\n    ')}`;
        
        // 添加WHERE条件
        if (whereConditions) {
            const conditions = whereConditions.split('\n').filter(c => c.trim());
            if (conditions.length > 0) {
                sql += `\nWHERE ${conditions.join('\n  AND ')}`;
            }
        }
        
        return sql + ';';
    }

    // 生成DELETE SQL
    function generateDeleteSql(dbName, tables, joinConditions, whereConditions) {
        let sql = `DELETE ${tables[0]}\nFROM ${dbName}.${tables[0]}`;
        
        // 添加JOIN条件
        if (tables.length > 1 && joinConditions) {
            const joins = joinConditions.split('\n').filter(j => j.trim());
            joins.forEach(join => {
                sql += `\nJOIN ${dbName}.${tables[joins.indexOf(join) + 1]} ON ${join.trim()}`;
            });
        }
        
        // 添加WHERE条件
        if (whereConditions) {
            const conditions = whereConditions.split('\n').filter(c => c.trim());
            if (conditions.length > 0) {
                sql += `\nWHERE ${conditions.join('\n  AND ')}`;
            }
        }
        
        return sql + ';';
    }
}); 