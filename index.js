require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./schema.gql')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
}).then(() => {
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🎉Server listening at ${url} !`)
  })
},
err => {
  console.log('failed to connect to the database')
  console.log(err)
})
