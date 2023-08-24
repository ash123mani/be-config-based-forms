import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const pingType = new GraphQLObjectType({
    name: 'Ping',
    fields: () => ({
        message: { type: GraphQLString }
    })
  });


export const nodeType = new GraphQLObjectType({
    name: 'Node',
    fields: () => ({
        displayName: { type: GraphQLString },
        name: { type:GraphQLString },
        _id: { type: GraphQLID }
    })
})