const {

Before,
After,
AfterStep,
Status,
setDefaultTimeout

}
=
require('@cucumber/cucumber');

const browserManager =
require('../utilities/browserManager');

setDefaultTimeout(60000);

Before(
async function(){

this.page =
await browserManager.launchBrowser();

});

AfterStep(
async function(){

const screenshot =

await this.page.screenshot({

fullPage:true

});

await this.attach(

screenshot,

'image/png'

);

});
After(
async function (scenario) {

if(
scenario.result.status ===
Status.FAILED
){

await this.page.screenshot({

path:
`screenshots/FAILED_${
Date.now()
}.png`,

fullPage:true

});

}

await browserManager.closeBrowser();

});