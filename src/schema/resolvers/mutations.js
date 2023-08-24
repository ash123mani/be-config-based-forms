import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import BaseError from '../../utils/baseError'

import { nodeType } from "../typeDefs";
import { NodeModel } from '../../models'

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addNode: {
            type: nodeType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args) {
                const nameExists = await NodeModel.exists({ name: args.name });


                if (nameExists) {
                    return new BaseError('Name already exits', 500)
                }

                if (!nameExists) {
                    const node = new NodeModel(args)
                    const newNode = await node.save()
                    return newNode
                }
            }
        }
    }
})

export default Mutations;
