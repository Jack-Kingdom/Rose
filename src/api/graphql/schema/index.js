/**
 * Created by Jack on 4/12/2017.
 */

import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLEnumType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';

import QueryType from './query_type/index'
import MutationType from './mutiation_type/index'

let schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});

export default schema;