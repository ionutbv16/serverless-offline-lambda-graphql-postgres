'use strict';

const db = require('./db_connect');
import serverless from "serverless-http";
import graphiql from "graphql-playground-middleware-express";
import { ApolloServer, gql } from "apollo-server-express";
import express from 'express';
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => "world"
  }
};
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: "/graphql"
});
server.applyMiddleware({ app });
app.get("/playground", graphiql({ endpoint: "/graphql" }));
const handler = serverless(app);



const getAllTodos = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
   
    // Run your query
    let results;
     try { 
      results=  await db.query('SELECT * FROM users');
    // Return the results
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
         
    }
    catch(err) {
       
    }

    // Run clean up function
    await db.end()
  
    
 

/*
  db.query('SELECT * FROM users')
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      console.log(e);
      callback(null, {
        statusCode: e.statusCode || 500,
        body: 'Error: Could not find Todos: ' + e
      })
    })
*/

};


const getTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getById('todo', event.pathParameters.id)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not find Todo: " + e
      })
    })
};

const createTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.insert('todo', data)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: "Todo Created!" + res
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not create Todo " + e
      })
    }) 
};

const updateTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.updateById('todo', event.pathParameters.id, data)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: "Todo Updated!" + res
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not update Todo" + e
      })
    }) 
};

const deleteTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.deleteById('todo', event.pathParameters.id)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: "Todo Deleted!"
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not delete Todo" + e
      })
    }) 
};

export { handler, getAllTodos, getTodo, createTodo ,updateTodo,deleteTodo};
