const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const app = express()

app.use(express.json())
let book =[]

app.use(express.json())

const url = 'mongodb+srv://superadmin:nnkea7n3@cluster0.vpash.mongodb.net/book_information?retryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
let db, moviesCollection

async function connect(){
    await client.connect()
    db = client.db('book_information')
    moviesCollection = db.collection('books')
}
connect()

app.get('/books/:id', (req, res) => { 
    //input

    //process

    //output 
    res.status(200).json(book)
})

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
    const result = await moviesCollection.insertOne(newBooks)
    //n-1
    bookID = result.insertedId

    //output 
    res.status(201).json(bookID)
})
const port = 3000
app.listen(port, () => console.log(`Server started at ${port}`)) 
