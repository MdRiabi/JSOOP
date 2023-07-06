class Product {
//title = 'DEFAULT';
//imageUrl;
//price;

//description;

constructor(title, imageUrl, price, description)
 {

    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;

}
}



class ProductItem{

    constructor(product){
        this.product = product;
    }

    render(){
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
            <img src=${prod.imageUrl} alt=${prod.title}>
            <div class= "product-item__content">

            <h2>${prod.title}</h2>
            <h3>${prod.price}</h3>
            <p>\$ ${prod.description}</p>
            <button>Add To Cart</button>
            </div>
         </div>`;

         return prodEl;
    }

}




class ProductList{

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
constructor(){}

render(){
    const renderHook = document.getElementById('app');
    const productList = document.createElement('ul');

    for(const prod of this.products){
        
        const prodectItem = new ProductItem(prod);
        const prodEl  = prodectItem.render();

         productList.append(prodEl);

         
    }
    renderHook.append(productList);
}


}



const productList = new ProductList();
productList.render()

//5. Working with Constructor Methods