/* La valeur types dans tsconfig.json permet de ne pas avoir à faire d'imports dans les fichiers de test.*/
import { sum } from "./index";

describe('Sum function', () => {
    test('Returns correct value', () => {
        expect(sum(2, 3)).toEqual(5);
    })
})


describe('Google', () => {
    beforeAll(async () => {
        // const browser = await webkit.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();
        await page.goto('https://github.com');
    })
    it('should display google text on page', async () => {
        // const browser = await webkit.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();
        const title = await page.title();
        await expect(title).toMatch('GitHub');
    })
})