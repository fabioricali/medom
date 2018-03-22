const dom = require('dohtml');
const {ROOT} = require('./constants');
const type = require('typis');
const arrayme = require('arrayme');

class DOM {

    static _rootExists(element){
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
        switch (type.get(element)) {
            case 'nodelist':
                items = Array.from(element);
                break;

            case 'htmlelement':
                items = arrayme(element);
                break;

            case 'array':
                break;
        }

        let result = [];

        items.forEach(item => {
            if (DOM._rootExists(item))
                result.push(DOM._getRoot(item));
        });

        return result;
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