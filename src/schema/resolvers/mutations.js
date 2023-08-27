import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from "graphql";
import BaseError from '../../utils/baseError'

import { nodeType, basicInfoInputType, fieldsType } from "../typeDefs";
import { NodeModel, FieldsModel } from '../../models'

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addNode: {
            type: nodeType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                displayName: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {

                if (!args.name || !args.displayName) {
                    return new BaseError('You have some  missing fields', 400)
                }

                const nameExists = await NodeModel.exists({ name: args.name });

                if (nameExists) {
                    return new BaseError('Node name already exits', 500)
                }
                if (!nameExists) {
                    const node = new NodeModel(args)
                    const newNode = await node.save()
                    return newNode
                }
            }
        },
        addNodeField: {
            type: fieldsType,
            args: {
                nodeId: { type: new GraphQLNonNull(GraphQLID) },
                elementType: { type: new GraphQLNonNull(GraphQLString) },
                basicInfo: { type: basicInfoInputType }
            },
            async resolve(parent, args) {
                const fields = new FieldsModel(args)
                const newFielsConfig = await fields.save()

                return newFielsConfig
            } 
        }
    }
})

export default Mutations;
