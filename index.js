const ep=require('express')
const app=ep()
const port=process.env.PORT || 3000
const path=require('path')
const hbs=require('hbs')
app.set('view engine','hbs')
const pt=path.join(__dirname,'./templates/views')
const pub=path.join(__dirname,'./public')
app.set('views',pt)

app.use(ep.static(pub))
app.get('/',(req,res)=>{
    res.render('dark_light')
})
app.get('/tri.hbs',(req,res)=>{
    res.render('tri',{usname:req.query.usname.toUpperCase()})
})

app.listen(port,()=>{
    console.log(`listening on..... ${port}`)
})
