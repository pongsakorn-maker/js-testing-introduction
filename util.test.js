const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util')

test('should output name and age', () => {
    const text = generateText('Max', 29)
    expect(text).toBe('Max (29 years old)');
    const text2 = generateText('Anna', 20)
    expect(text2).toBe('Anna (20 years old)');
    const text3 = generateText('', null)
    expect(text3).toBe(' (null years old)');
    const text4 = generateText()
    expect(text4).toBe('undefined (undefined years old)');
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 29)
    expect(text).toBe('Max (29 years old)')
});

test('should click around', async () => {
    const browser = await puppeteer.launch
    ({
        headless: false,
        slowMo:80,
        args:['--window-size=1920,1080']
    }) 
    const page = await browser.newPage()
    await page.goto("file:///C:/Users/Pongsakorn/Desktop/Odds/js-testing-introduction/index.html")
    await page.click('input#name');
    await page.type('input#name','Anna');
    await page.click('input#age');
    await page.type('input#age' , '20');
    await page.click('#btnAddUser')
    const finalText = await page.$eval('.user-item', el => el.textContent)
    expect(finalText).toBe('Anna (20 years old)')
},10000)