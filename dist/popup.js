document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('test');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.executeScript({
            code: '(function (consosle) {\n' +
                '    console.saveToZapier = async function(name, linksArr) {\n' +
                '        const zapierHookUrl = \'https://hooks.zapier.com/hooks/catch/80145/75wa0i/\';\n' +
                '\n' +
                '        let data = {eventName: name, links: linksArr};\n' +
                '\n' +
                '        let response = await fetch(zapierHookUrl, {\n' +
                '            method: "POST",\n' +
                '            body: JSON.stringify(data),\n' +
                '        });\n' +
                '\n' +
                '        let responseData = await response.json();\n' +
                '        console.log(responseData);\n' +
                '        \n' +
                '        return responseData;\n' +
                '\n' +
                '    } \n' +
                '\n' +
                '})(console);' +
                'links = Array.prototype.slice.call(document.querySelectorAll(\'div.ellipsis a\')).map(item => item.getAttribute(\'href\'));\n' +
                'console.saveToZapier(links);'
        });

    }, false);
}, false);


