//boutique virtuelle 

class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

class Store {
    constructor() {
        this.catalog = [];
    }

    addProduct(name, price, stock) {
        const id = this.catalog.length + 1;
        const newProduct = new Product(id, name, price, stock);
        this.catalog.push(newProduct);
    }

    listProducts() {
        console.log("\n--- CATALOG ---");
        this.catalog.forEach(p => {
            console.log(`[${p.id}] ${p.name} - $${p.price} (Stock: ${p.stock})`);
        });
    }

    getProductById(id) {
        return this.catalog.find(p => p.id === id);
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    add(product, qty) {
        this.items.push({ product, quantity: qty });
        console.log(`> Added ${qty} x ${product.name} to cart.`);
    }

    show() {
        console.log("\n--- YOUR CART ---");
        if (this.items.length === 0) console.log("Empty.");
        this.items.forEach(item => {
            console.log(`${item.quantity} x ${item.product.name}`);
        });
    }
}


const myStore = new Store();
const myCart = new Cart();

myStore.addProduct("Mouse", 25, 10);
myStore.addProduct("Keyboard", 80, 5);
myStore.addProduct("Screen", 200, 2);

myStore.listProducts();

const selectedProduct = myStore.getProductById(1); 
if (selectedProduct) {
    myCart.add(selectedProduct, 2);
}

myCart.show();