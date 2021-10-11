// Encapsulate all your step definition in a module exports like below
// noinspection SyntaxError

module.exports = function () {

    // Match a step definition against a line in Gherkin/the feature file
    // this.Given or this.When or this.Then + a regular expression
    // /^ = Start of regular expression
    // $/ = End of regular expression
    // "([^"]*)" = match anything inside quotation marks and also
    // pick it up the text inside the quotation as a parameter for test function
    this.When(/^When im on Willys i click on the "MENY" "pushbutton"([^"]*)"$/, async function () {
        // Navigate to a URL (
        // www.wi)
        await helpers.loadPage('"www.willys.se');


        let changeAndConfirmButtons = await driver.findElements(by.css('.jyfHyd'));
        let confirmButton = changeAndConfirmButtons[1];
        // Click the Accept button

        while (!(await confirmButton.isDisplayed())) {
            await driver.sleep(100);


            // Get the menu button
            let Openmenubutton = await driver.findElement(by.css(ax - sidenav - toggle));
            await driver.sleep(100);

            //kött, chark,fågel
            await Openmenubutton.sendKeys(searchQuery, selenium.Key.ENTE);

            // Get the fågel menu
            let document = searchQuery(document.querySelector("#__next > div > div.Layout_content-wrapper__27SsU > nav > div > ul > li.AccordionNavNodestyles__StyledAccordionNavNode-sc-19q8af6-0.bLVJgL > ul > li:nth-child(1) > ul"))
            while (!(await document.isDisplayed())) {

            }

            //add  Majs kyckling hel sverige
            // noinspection NonAsciiCharacters9
            let bird = await driver.findElement(By.css(`Add three majskyckling`));

            // now wait for the button to be interactable (visible) before clicking
            // check if visible/displayed, wait 1/10 of a second then check again
            while (!(await bird.isDisplayed()))
                await driver.sleep(100);

            // See previous description of how to write a step definition function
            let plusButton = async function () {
                let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));

                await plusButton.click(3);
                await waitAWhile();

                let minus = await driver.findElement(By.css('.div.Product_product__2dqef:nth-child(1) > div:nth-child(2) > div:nth-child(4) > button:nth-child(1) > span:nth-child(1'));

                await minus.click(3);
                await waitAWhile(1000);

            };




