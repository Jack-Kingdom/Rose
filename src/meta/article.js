"use strict";

import models from '../persistence/models';

class Article {

    static async createArticle() {

    }

    static async deleteArticle() {

    }

    static async updateArticle() {

    }

    static async queryArticle() {

    }

    // todo rewrite _id to id
    static async queryMultiArticle(limit, order) {
        if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.');
        if (!(typeof (order) === 'string')) throw new RangeError('order type illegal');

        return await models.Article.find().sort(order).limit(limit);
    }
}

export default Article;