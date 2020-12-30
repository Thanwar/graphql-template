// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves Message.

let crypto = require('crypto');
let localData = {};

const resolvers = {
    Query: {
        getMessage: () => {
            return "Hello Graph QL";
        },
        getName: () => {
            return "Thanwar";
        },
        getAllMessages: () => {
            return [{message:"test", id: "123"},{message:"hello", id: "321"}];
        },
    },
    Mutation: {
        createMessage: (_,{input})=>{
            let id = crypto.randomBytes(10).toString("hex");
            console.log('id',id)
            localData[id] = {id,...input.message}
            return {id,...input} 
        } 
      },
  };

module.exports = resolvers;
