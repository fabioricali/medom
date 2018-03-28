const {ROOT} = require('./constants');
const type = require('typis');

/**
 * @class
 */
class DOM {

    static _rootExists(element) {
        return ROOT in element;
    }

    static _getRoot(element) {
        return element[ROOT];
    }

    /**
     * Get Medome component by Element
     * @param element
     * @returns {*}
     */
    static get(element) {
        let items = [];
        let aType = type.get(element);

        if (aType === 'Array' || aType === 'NodeList') {
            items = !Array.isArray(element) ? Array.from(element) : element;
            let result = [];

            items.forEach(item => {
                if (DOM._rootExists(item))
                    result.push(DOM._getRoot(item));
            });

            return result;
        } else if (element instanceof Element) {
            return DOM._getRoot(element);
        }

    }

    /**
     * Get Medom component by query
     * @param query
     * @param [ctx=document]
     * @returns {*}
     */
    static getByQuery(query, ctx = document) {
        return DOM.get(ctx.querySelector(query));
    }

    /**
     * Get Medom components by query
     * @param query
     * @param [ctx=document]
     * @returns {*}
     */
    static getByQueryAll(query, ctx = document) {
        return DOM.get(ctx.querySelectorAll(query));
    }
}

module.exports = DOM;