

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

import CategoryQueryType from './category';
import TagQueryType from './tag';
import Meta from '../../../../meta';


const ArticleQueryType = new GraphQLObjectType({
  name: 'Article',
  description: 'Article type',
  fields: () => {
    const obj = Object.assign({}, require('../types/id'), require('../types/article'));
    obj.category = {
      type: CategoryQueryType,
      resolve: async (root, args) => await Meta.Category.retrieve(root.id),
    };
    obj.tags = {
      type: new GraphQLList(TagQueryType),
      resolve: async (root, args) => root.tags.map(async id => await Meta.Tag.retrieve(id)),
    };
    return obj;
  },
});

export default ArticleQueryType;
