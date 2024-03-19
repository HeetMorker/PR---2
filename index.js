const express = require('express');
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const user = [
    { name: "Ananat", email: "anant@gmail.com",deliverytype:"Cash On Delivery" , password: "123", message: "Product is good" },
    { name: "nilay", email: "nilay@gmail.com",deliverytype:"Cash On Delivery", password: "567", message: "This product is Amazing" },
    { name: "sam", email: "sam@gmail.com",deliverytype:"Pay now", password: "111", message: "I'M HOT AF" },
]

app.get('/', (req, res) => {
    res.render('layouts/home')
    console.log("sucess")       
})

app.get('/showproduct', (req, res) => {
    res.render('layouts/showproduct', { user: user })
})
app.get('/addproduct', (req, res) => {
    res.render('layouts/addproducts')
})
app.post('/addproduct', (req, res) => {
    user.push(req.body);
    res.redirect('/showproduct');
})
app.get('/deleteuser/:id', (req, res) => {
    var id = req.params.id
    user.splice(id, 1)
    res.redirect('/showproduct')
})
app.get('/editproduct/:id', (req, res) => {
    var id = req.params.id
    var update = user[id]
    res.render('layouts/editproduct', { user: update })
})
app.post('/editproduct/:id', (req, res) => {
    var id = req.params.id
    user[id] = req.body
    res.redirect('/showproduct')
})
app.listen(9000, () => {
    console.log('Server listening');
})