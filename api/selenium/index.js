const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require ('fs');
const { stringify } = require('querystring');


async function helloSelenium() {

  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://en.wikipedia.org/wiki/2022_Winter_Olympics');
  const pageSource = await driver.getPageSource();
  const webfile = await driver.findElement(By.className("mw-parser-output"));
  const text = await webfile.findElements(By.css("p"))

  const stringified_file = JSON.stringify(pageSource)

  fs.writeFile('./newfile.html', stringified_file, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

  driver.takeScreenshot().then(function (data) {
    var base64Data = data.replace(/^data:image\/png;base64,/, "")
    fs.writeFile("out.png", base64Data, 'base64', function (err) {
      if (err) console.log(err);
    });
  });

  await driver.quit();
};

helloSelenium();

// let searchBox = await driver.findElement(By.name('q'));
// let searchButton = await driver.findElement(By.name('btnK'));

// await searchBox.sendKeys('Selenium');
// await searchButton.click();

// await driver.getTitle(); // => "Google"

// driver.manage().setTimeouts({ implicit: 0.5 })
// await driver.findElement(By.name('q')).getAttribute("value"); // => 'Selenium'
