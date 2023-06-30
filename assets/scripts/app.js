const productList = {
    products: [
        {title:'A Pillow',
        imageUrl:'https://th.bing.com/th/id/R.551b3f502f6c089c36c19e843c188dc9?rik=7%2brlsXe3dl0Bqw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-QvL28cHZ-jw%2fU6xv6wD48KI%2fAAAAAAAAiy0%2fvTqlIJXTwp8%2fs1600%2fpillows%2b5.jpg&ehk=ZGjGWU1qByooSu%2fNM%2b0iWWs%2bub3FgJk0%2bb6BexNaSOk%3d&risl=&pid=ImgRaw&r=0',
        price:19.99,
        description:'a product description'
    },
        {title:'A fidora cap',
        imageUrl:'https://th.bing.com/th/id/R.95dc5e66f6bed801dd0f00749244ae5b?rik=jPRBIdbTC1p0nQ&riu=http%3a%2f%2fwww.vineos.fr%2fvins%2fofficiel%2fvetement-sport-nike-femme-pas-cher-yxtonu.jpg&ehk=6aVUywyu%2fQ2o8ZaBCDg%2b%2fNmDJZHMbLVhpDaDnQm1Yvo%3d&risl=&pid=ImgRaw&r=0',
        price:29.99,
        description:'a product description'},
        {title:'A short ',
        imageUrl:'https://th.bing.com/th/id/R.308485418adf4d8b3d57e247a81e7ddf?rik=v%2fO6ENV01xmf9g&riu=http%3a%2f%2fwww.college-malraux-pontarlier.fr%2fnouvelle%2fnike-jordan-pour-fille---3.jpg&ehk=%2bnpkxwNx8W8r5ZQOtZ6A63YpqqrOpicVgxv%2bRUROh24%3d&risl=&pid=ImgRaw&r=0',
        price:49.99,
        description:'a product description'}
],
render(){
    const renderHook = document.getElementById('app');
    const productList = document.createElement('ul');

    for(const prod of this.products){
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
         productList.append(prodEl);

         renderHook.append(productList);
    }
}
};
productList.render()


