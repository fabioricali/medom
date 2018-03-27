const {ROOT} = require('./constants');
const type = require('typis');

class DOM {

    static _rootExists(element) {
        return ROOT in element;
    }

    static _getRoot(element) {
        return element[ROOT];
    }

    /**
     * Get component by Element
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
     * Get component by query
     * @param query
     * @returns {*}
     */
    static getByQuery(query) {
        return DOM.get(document.querySelector(query));
    }

    /**
     * Get components by query
     * @param query
     * @returns {*}
     */
    static getByQueryAll(query) {
        return DOM.get(document.querySelectorAll(query));
    }
}

module.exports = DOM;