const html = require('dohtml');
const extend = require('defaulty');
const {ROOT} = require('./constants');
const arrayme = require('arrayme');
const type = require('typis');

class Component {

    constructor(tpl, opt = {}) {
        Object.defineProperty(this, 'dom', {
            value: html.create(tpl)
        });

        Object.defineProperty(this.dom, ROOT, {
            value: this
        });
    }

    /**
     * Add in component
     * @param {Component | Component[]} cmp to add
     * @returns {Component}
     */
    add(cmp) {

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
     * @param opt
     * @param target
     * @param opt
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
     * Check if is a component
     * @param cmp
     * @returns {boolean}
     */
    static isComponent(cmp) {
        return cmp instanceof Component;
    }

}

module.exports = Component;