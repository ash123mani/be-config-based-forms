import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from "graphql";
import BaseError from '../../utils/baseError'

import { nodeType, basicInfoInputType, Fields, ValidationsInput } from "../typeDefs";
import { NodeModel, FieldsModel } from '../../models'

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addNode: {
            type: nodeType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                apiIdentifier: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {

                if (!args.name || !args.apiIdentifier) {
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
            type: Fields,
            args: {
                nodeId: { type: new GraphQLNonNull(GraphQLID) },
                elementType: { type: new GraphQLNonNull(GraphQLString) },
                basicInfo: { type: basicInfoInputType },
            },
            async resolve(parent, args) {
                const fields = new FieldsModel(args)
                const newFielsConfig = await fields.save()

                return newFielsConfig
            } 
        },
        updateNodeField: {
            type: Fields,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID)  },
                basicInfo: { type: basicInfoInputType },
                validations: { type: ValidationsInput }
            },
            async resolve(parent, args) {
                const update = await FieldsModel.findByIdAndUpdate(args._id, args, { new: true, useFindAndModify: false })
                console.log('update', update)

                return update
            }  
        }
    }
})

export default Mutations;
