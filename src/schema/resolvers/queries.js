import { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql';
import { pingType, nodeType, Fields } from '../typeDefs'

import { NodeModel, FieldsModel } from '../../models'


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
        },
        nodeFields: {
            type: new GraphQLList(Fields),
            args: { nodeId: { type: new GraphQLNonNull(GraphQLID) }},
            async resolve(parent, args) {
                const query = { nodeId: args.nodeId }
                const fields = await FieldsModel.find(query)
                return fields;
            }
        }
    }
  })

  export default RootQuery