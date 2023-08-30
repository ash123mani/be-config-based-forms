import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList
} from 'graphql';

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
    name: { type: GraphQLString },
    _id: { type: GraphQLID }
  })
});

export const basicInfoInputType = new GraphQLInputObjectType({
  name: 'BasicInfoInput',
  description: 'Input payload for creating user',
  fields: () => ({
    name: { type: GraphQLString },
    apiIdentifier: { type: GraphQLString },
    dataFields: { type: new GraphQLList(GraphQLString) }
  })
});

export const basicInfoPayload = new GraphQLObjectType({
  name: 'BasicInfoPayload',
  description: 'Input payload for creating user',
  fields: () => ({
    name: { type: GraphQLString },
    apiIdentifier: { type: GraphQLString },
    dataFields: { type: new GraphQLList(GraphQLString) }
  })
});

export const ValidationsInput = new GraphQLInputObjectType({
  name: 'ValidationsInput',
  fields: () => ({
    required: { type: GraphQLBoolean },
    errorMsg: { type: GraphQLString },
    pattern: { type: PatternsInput }
  })
});

export const PatternsInput = new GraphQLInputObjectType({
  name: 'PatternsInput',
  fields: () => ({
    value: { type: GraphQLBoolean },
    errorMsg: { type: GraphQLString },
    pattern: { type: GraphQLString },
    flags: { type: GraphQLString }
  })
});

export const PatternsPayload = new GraphQLObjectType({
  name: 'PatternsPayload',
  fields: () => ({
    value: { type: GraphQLBoolean },
    errorMsg: { type: GraphQLString },
    pattern: { type: GraphQLString },
    flags: { type: GraphQLString }
  })
});

export const ValidationsPayload = new GraphQLObjectType({
  name: 'ValidationsPayload',
  fields: () => ({
    required: { type: GraphQLBoolean },
    errorMsg: { type: GraphQLString },
    pattern: { type: PatternsPayload }
  })
});

export const Fields = new GraphQLObjectType({
  name: 'FieldsType',
  fields: () => ({
    _id: { type: GraphQLID },
    nodeId: { type: GraphQLID },
    elementType: { type: GraphQLString },
    basicInfo: { type: basicInfoPayload },
    validations: { type: ValidationsPayload }
  })
});
