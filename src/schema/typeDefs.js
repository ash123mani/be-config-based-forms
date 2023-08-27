import { GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLID } from 'graphql';

export const pingType = new GraphQLObjectType({
    name: 'Ping',
    fields: () => ({
        message: { type: GraphQLString }
    })
  });


export const nodeType = new GraphQLObjectType({
    name: 'Node',
    fields: () => ({
        apiIdentifier: { type: GraphQLString },
        name: { type:GraphQLString },
        _id: { type: GraphQLID }
    })
})

export const basicInfoInputType = new GraphQLInputObjectType({
    name: 'BasicInfoInput',
    description: 'Input payload for creating user',
    fields: () => ({
        name: { type: GraphQLString },
        apiIdentifier: { type: GraphQLString }
    })
})

export const basicInfoPayload = new GraphQLObjectType({
    name: 'BasicInfoPayload',
    description: 'Input payload for creating user',
    fields: () => ({
        name: { type: GraphQLString },
        apiIdentifier: { type: GraphQLString }
    })
})

export const fieldsType = new GraphQLObjectType({
    name: 'FieldsType',
    fields: () => ({
        nodeId: { type: GraphQLID },
        elementType: { type: GraphQLString },
        basicInfo: { type: basicInfoPayload }
    })
})