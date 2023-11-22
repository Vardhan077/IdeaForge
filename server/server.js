const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}))

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const p = path.join(__dirname,'mydata.db')
let db = null;

const initialize = async() =>{
    try{
        db = await open({
            filename:p,
            driver:sqlite3.Database
        })
        app.listen(3001)
    }catch(e){
        console.log("failed to connect");
        process.exit(1)
    }
}

initialize();

//post data

app.post('/post',async (req,res) =>{

    const{id,name,para,description} = req.body

    const sqlInsert  = `INSERT INTO idea values (?,?,?,?)`
    await db.run(sqlInsert,[id,name,para,description])
    
})

//getting data

app.get('/getdata',async (req,res)=>{
    const getQuery = `SELECT * FROM idea`
    const arr = await db.all(getQuery)
    res.send(arr)
})

//get by id
app.get('/getitem/:id',async (req,res)=>{
    let {id} = req.params
    console.log(typeof(id))
    const getQuery = `SELECT * FROM idea WHERE id=?`
    const arr = await db.get(getQuery,parseInt(id))
    res.send(arr)
})
