document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('test');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.executeScript({
            code: '(function(console) {\n' +
                '\n' +
                '    console.save = function(data, filename) {\n' +
                '\n' +
                '        if (!data) {\n' +
                '            console.error(\'Console.save: No data\');\n' +
                '            return;\n' +
                '        }\n' +
                '\n' +
                '        if (!filename) filename = \'console.json\';\n' +
                '\n' +
                '        if (typeof data === \'object\') {\n' +
                '            data = JSON.stringify(data, undefined, 4);\n' +
                '        }\n' +
                '\n' +
                '        var blob = new Blob([data], { type: \'text/json\' }),\n' +
                '            e = document.createEvent(\'MouseEvents\'),\n' +
                '            a = document.createElement(\'a\');\n' +
                '\n' +
                '        a.download = filename;\n' +
                '        a.href = window.URL.createObjectURL(blob);\n' +
                '        a.dataset.downloadurl = [\'text/json\', a.download, a.href].join(\':\');\n' +
                '        e.initMouseEvent(\'click\', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);\n' +
                '        a.dispatchEvent(e);\n' +
                '    };\n' +
                '})(console);' +
                'links = Array.prototype.slice.call(document.querySelectorAll(\'div.uiProfileBlockContent div._6a div.fsl a\')).map(item => item.getAttribute(\'href\'));\n' +
                'console.save(links);'
        });

    }, false);
}, false);


