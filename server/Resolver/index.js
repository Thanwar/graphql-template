// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves Message.

const resolvers = {
    Query: {
        getMessage: () => {
            return "Hello Graph QL";
        },
        getName: () => {
            return "Thanwar";
        },
    },
    Mutation: {
       // createMessage: 
      },
  };

module.exports = resolvers;
