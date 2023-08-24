import { GraphQLObjectType } from 'graphql';
import { pingType } from '../typeDefs'


  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ping: {
            type: pingType,
            resolve() {
                return {
                    message: "PONG"
                }
            }
        }
    }
  })

  export default RootQuery