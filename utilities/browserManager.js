const { chromium } =
require('playwright');

let browser;

async function launchBrowser() {

    browser =
    await chromium.launch({

        headless:false

    });

    const context =
    await browser.newContext();

    return await context.newPage();
}

async function closeBrowser() {

    await browser.close();
}

module.exports = {

    launchBrowser,

    closeBrowser

};