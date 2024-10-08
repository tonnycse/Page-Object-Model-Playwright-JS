exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartbtn = '//a[@class="btn btn-success btn-lg"]'; // Corrected XPath
        this.cart = '#cartur';
    }

    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
        for (const product of productList) {
            if (productName === await product.textContent()) {
                await product.click();
                break;
            }
        }

        // Listen for the dialog before clicking the Add to Cart button
        // await this.page.on('dialog', async dialog=>{
        this.page.once('dialog', async dialog => {
            if (dialog.message().includes('added')) {
                await dialog.accept(); // Accept the dialog
            }
        });

        await this.page.locator(this.addToCartbtn).click(); // Click 'Add to Cart' button
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
};
