/**
 * Created by Jack on 4/22/2017.
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

// todo: add permition check
const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'root MutationType',
    fields: Object.assign({},require('./article'),require('./category'),require('./tag'),require('./auth'))
});
export default MutationType;