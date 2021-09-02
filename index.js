const express = require('express');
const bodyparser=require("body-parser");
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.render('temp');
})

app.post('/data',(req,res)=>{
    console.log(req.body);
})



app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})