import { GraphQLSchema } from "graphql"
import {query} from "./query.js"
import { mutation } from "./mutation.js"
const Schema = new GraphQLSchema({
    query : query,
    mutation : mutation
})


export {
    Schema
}