const express = require('express')
const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // to render ejs file 
// app.engine('html', require('ejs').renderFile); // If html file render garna parema 




port = 3000

app.get('/',(req,res)=>{
    res.render('test')
})



app.listen(port,()=>{
    console.log("Server running at port : ", port)
})