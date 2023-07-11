import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import morgan from 'morgan'
dotenv.config()
import db from './config/db.js'
db();


const port = process.env.PORT || 8000

const node_env = process.env.NODE_ENV

const app = express()

app.use(express.json())

app.use(morgan('dev'))


app.get('/api/products',(req,res)=>{

    res.json(products)
})


app.get('/api/products/:id',(req,res)=>{

    const id = Number(req.params.id)

    console.log(id)

    const product = products.find(p=>p._id === id)


    res.json(product)
})


app.listen(port,()=>console.log(`server runnning on  ${port}  ${node_env} ` ))