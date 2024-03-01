import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { applyMiddleware } from 'graphql-middleware';
import { expressPlayground } from 'graphql-playground-middleware';
import { Schema} from "./graphql-middleware/schema.js"
const app = express();
const port = 4500;
const schemaWithMiddleWare = applyMiddleware(Schema)
app.use('/graphql',(req,res)=>{
    try{
    graphqlHTTP({
        schema : schemaWithMiddleWare,
        rootValue : global,
        graphiql : true
    })(req,res)
}catch(e){
    console.log(e)
}
})
app.get('/playground',expressPlayground({
    endpoint : '/graphql'
}))
app.listen(4500,(err)=>{
    if(err) throw err;
    console.log("server running in port no : 4500")
})