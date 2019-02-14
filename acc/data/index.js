let data = require('./mock')

module.exports = function getList(app){
    app.get('/list',(req,res)=>{
        res.send(data)
    })
    
}
