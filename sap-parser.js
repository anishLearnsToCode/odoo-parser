const RequestPromise = require('request-promise');
const URL = ' http://www.sap.com/belgique/index.html';
const fs = require('fs');
const $ = require('cheerio');

let urlHtml;
RequestPromise(URL).then((html) => {
    urlHtml = html.toString().replace(/sap/gi, "Odoo");

    fs.writeFile(__dirname + '/test-odoo.html', urlHtml, (error) => {
        if (error) {
            throw error;
        }
        console.log('file created successfully');
    });
});
