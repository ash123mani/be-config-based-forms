import { GraphQLObjectType, GraphQLList } from 'graphql';
import { pingType, nodeType } from '../typeDefs'

import { NodeModel } from '../../models'


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
        },
        nodes: {
            type: new GraphQLList(nodeType),
            async resolve() {
                const nodes = await NodeModel.find()
                return nodes
            }
        }
    }
  })

  export default RootQuery