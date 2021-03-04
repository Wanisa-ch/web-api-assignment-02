const express = require('express')
const app = express()

app.use(express.json())
let book =[]

app.post('/books', (req, res) => {
    //input
    let newtitle = req.body.title
    let newprice =req.body.price
    let newunit =req.body.unit
    let newisbn =req.body.isbn
    let newimageUrl =req.body.imageUrl
    
    //Key: value
    let newBooks ={
        title: newtitle,
        price: newprice,
        unit: newunit,
        isbn: newisbn,
        imageUrl: newimageUrl

    }
    let bookID = 0

    //process
    book.push(newBooks)
    //n-1
    bookID = book.length -1

    //output 
    res.status(201).json(bookID)
})
const port = 3000
app.listen(port, () => console.log(`Server started at ${port}`)) 
