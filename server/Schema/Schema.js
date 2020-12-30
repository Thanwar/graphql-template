// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against


// # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.



const { ApolloServer, gql } = require('apollo-server');


// your data.
// This "createMessageType" type defines the queryable fields for every book in our data source.
// The "Query" type is special: it lists all of the available queries that
// clients can execute, along with the return type for each. In this
// case, the "getMessage" query returns a message (defined above).

const typeDefs = gql`
  
  type messageType {
    message: String
    id: ID
  }

  type Query {
    getMessage: String
    getName: String
    getAllMessages: [messageType]
  }

  input messageInput {
    message: String
  }

  type Mutation {
    createMessage(input: messageInput): messageType
  }
`;

module.exports = typeDefs;