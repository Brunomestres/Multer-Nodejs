const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const storage = require('./config/Multer');

const upload = multer({ storage });


app.use(bodyParser.urlencoded({ extended:true }));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload',upload.single('arquivo'),(req,res,next)=>{
    const file = req.file;
    if(!file)
    {
        const err = new Error('Por favor selecione um arquivo');
        err.httpStatusCode = 400;
        return next(err);
    }

    res.end('Upload Com sucesso');
});

app.listen(3000, ()=>{
    console.log('Servidor rodando');
});