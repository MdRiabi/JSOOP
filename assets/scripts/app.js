class Product {
    //title = 'DEFAULT';
    //imageUrl;
    //price;

    //description;

    constructor(title, imageUrl, price, description) {

        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;

    }
}






class ShoppingCart {

    items = [];

    addProduct(product) {

        this.items.push(product);
        this.totalOutput.innerHTML = `<h2> Total: \$ ${1} </h2>`;


    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>\$ ${2}</h2>
        <button>Order Now:!</button>
        
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}





class ProductItem {

    constructor(product) {
        this.product = product;
    }

    addToCart() {
        console.log('adding product to cart');
        console.log(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
            <img src=${this.product.imageUrl} alt=${this.product.title}>
            <div class= "product-item__content">

            <h2>${this.product.title}</h2>
            <h3>${this.product.price}</h3>
            <p>\$ ${this.product.description}</p>
            <button>Add To Cart</button>
            </div>
         </div>`;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));

        return prodEl;
    }

}




class ProductList {

    products = [
        new Product(
            'A Pillow',
            'https://th.bing.com/th/id/R.551b3f502f6c089c36c19e843c188dc9?rik=7%2brlsXe3dl0Bqw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-QvL28cHZ-jw%2fU6xv6wD48KI%2fAAAAAAAAiy0%2fvTqlIJXTwp8%2fs1600%2fpillows%2b5.jpg&ehk=ZGjGWU1qByooSu%2fNM%2b0iWWs%2bub3FgJk0%2bb6BexNaSOk%3d&risl=&pid=ImgRaw&r=0',
            19.99,
            'a product description'

        ),
        new Product(
            'A Pillow',
            'https://th.bing.com/th/id/R.95dc5e66f6bed801dd0f00749244ae5b?rik=jPRBIdbTC1p0nQ&riu=http%3a%2f%2fwww.vineos.fr%2fvins%2fofficiel%2fvetement-sport-nike-femme-pas-cher-yxtonu.jpg&ehk=6aVUywyu%2fQ2o8ZaBCDg%2b%2fNmDJZHMbLVhpDaDnQm1Yvo%3d&risl=&pid=ImgRaw&r=0',
            19.99,
            'a product description'

        )
    ];
    constructor() { }

    render() {
        const productList = document.createElement('ul');

        for (const prod of this.products) {

            const prodectItem = new ProductItem(prod);
            const prodEl = prodectItem.render();

            productList.append(prodEl);
        }
        return productList;
    }



}




class Shop {

    render() {

        const renderHook = document.getElementById('app');

        const cart = new ShoppingCart();
        const cartEl = cart.render();


        const productList = new ProductList();
        const productListEl = productList.render()

        renderHook.append(cartEl);
        renderHook.append(productListEl);


    }


}




class App {

    static cart;
    static init() {

        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;

    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }

}
App.init();





//5. Working with Constructor Methods