const { application } = require('express');
const   express= require('express');

const app = express();

app.get('/',(req,res) =>{
    res.end("TODO BIEN FUNCIONANDO CON EXPRESS ...")

})

app.listen(3001);
console.log("server on port 3000")
