var jsyaml = function() {
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

    function parseYaml(input) {
        var lines = input.split('\n');
        var properties = [];  // 改用数组存储，保持顺序
        var stack = [];
        var currentIndent = 0;
        var order = 0;  // 用于记录属性出现的顺序
        
        function getIndentLevel(line) {
            var match = line.match(/^\s*/);
            return match ? match[0].length / 2 : 0;  // 假设每个缩进是2个空格
        }

        // 用于存储已处理的属性，避免重复
        var processedProps = new Set();

        lines.forEach(function(line) {
            if (!line.trim() || line.trim().startsWith('#')) return;
            
            var indent = getIndentLevel(line);
            line = line.trim();
            
            // 解析键值对
            var parts = line.split(':');
            var key = parts[0].trim();
            var value = parts[1] ? parts[1].trim() : '';
            
            // 根据缩进调整堆栈
            while (indent < stack.length) {
                stack.pop();
            }
            
            if (value) {
                // 这是一个叶子节点
                var fullKey = stack.concat(key).join('.');
                if (!processedProps.has(fullKey)) {
                    properties.push({
                        key: fullKey,
                        value: value,
                        indent: indent,
                        order: order++  // 记录属性的原始顺序
                    });
                    processedProps.add(fullKey);
                }
            } else {
                // 这是一个中间节点
                stack.push(key);
            }
        });

        // 按照YAML中的原始顺序排序
        properties.sort((a, b) => {
            // 按照属性在YAML中出现的顺序排序
            return a.order - b.order;
        });

        // 转换为最终的格式
        return properties.map(prop => `${prop.key}=${prop.value}`);
    }

    return {
        load: function(input) {
            return parseYaml(input);
        }
    };
}(); 