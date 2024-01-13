const  express =  require('express')
const app =  express()
const port = process.env.PORT || 3000



app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})
app.get('/addTwoNumbers', (req, res) => {
    console.log(req.query)
    res.json({
        status: true,
        sum: Number(req.query.number1) + Number(req.query.number2)
    })
})