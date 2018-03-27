const html = require('dohtml');
const extend = require('defaulty');
const {ROOT} = require('./constants');
const arrayme = require('arrayme');

/**
 * @class
 */
class Component {

    /**
     * Create instance
     * @param {string} tpl html string
     */
    constructor(tpl) {
        Object.defineProperty(this, 'dom', {
            value: html.create(tpl)
        });

        Object.defineProperty(this.dom, ROOT, {
            value: this
        });
    }

    /**
     * Append other Medom components
     * @param {Component | Component[]} cmp component to append
     * @returns {Component}
     */
    append(cmp) {

        cmp = arrayme(cmp);

        let items = [];

        cmp.forEach(item => {
            if (Component.isComponent(item))
                items.push(item.dom);
        });

        html.render(this.dom, items);
        return this;
    }

    /**
     * Render component to target
     * @param target
     * @param {object} [opt]
     * @param {boolean} [opt.append=true]
     * @returns {Component}
     */
    renderTo(target, opt) {
        opt = extend.copy(opt, {
            append: true
        });

        if (!opt.append)
            target.innerHTML = '';

        html.render(target, this.dom);
        return this;
    }

    /**
     * Check if is a Medom component
     * @param {*} cmp
     * @returns {boolean}
     */
    static isComponent(cmp) {
        return cmp instanceof Component;
    }

}

module.exports = Component;