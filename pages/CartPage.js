// exports.CartPage = class CartPage {

//     constructor(page) {
//         this.page = page;
//         this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
//     }

//     async checkProductInCart(productName) {
//         const ProductsInCart=await this.page.$$(this.noOfProducts)
//         for (const product of ProductsInCart) {
//             console.log(await product.textContent())
//             if (productName === await product.textContent()) {
//                 return true;
//                 break;
//             }
//         }
    
//     }
// }

exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductInCart(productName) {
        const ProductsInCart = await this.page.$$(this.noOfProducts);
        for (const product of ProductsInCart) {
            const text = await product.textContent();
            console.log(text); // Logging product name for debugging
            if (productName === text.trim()) { // Use trim() to avoid whitespace mismatches
                return true; // Return true if product is found
            }
        }
        return false; // Return false if product is not found
    }
};
