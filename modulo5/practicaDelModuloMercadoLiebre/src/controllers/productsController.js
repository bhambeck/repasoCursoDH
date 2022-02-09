const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

products.forEach(element => {
	element.priceDisplay = toThousand(element.price);
	return
});

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products:products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let idProducto= req.params.id;
		let producto = products.find(element=>
			element.id==idProducto)
		let productoDesc = producto.price-(producto.price*producto.discount/100)
		res.render ('detail', {producto:producto, productoDescDisplay:toThousand(productoDesc)})
		
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		let idProducto= req.params.id;
		let productEdit = products.find(element=>
			element.id==idProducto)
		
		res.render('product-edit-form', {productEdit:productEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		let idProducto= req.params.id;
		products.forEach (element=>{
			if(element.id == idProducto){
				element.name =req.body.name
				element.price =req.body.price
				element.discount =req.body.discount
				element.description =req.body.description
				element.category =req.body.category
			}	
		})
		//lo paso al JSON
		let productsJson = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productsJson) 

		res.redirect('/products/detail/'+idProducto)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;