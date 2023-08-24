import { GraphQLSchema } from 'graphql';
import RootQuery from './resolvers/queries';
import Mutations from './resolvers/mutations'

export default new GraphQLSchema({
	query: RootQuery,
	mutation: Mutations
})


