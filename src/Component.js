const dom = require('dohtml');
const extend = require('defaulty');
const {ROOT} = require('./constants');

class Component {

    constructor(tpl, opt = {}) {
        this.dom = dom.create(tpl);
        this.dom[ROOT] = this;
    }

    /**
     * Append in component
     * @param {Component | Component[]} cmp to append
     * @returns {Component}
     */
    append(cmp) {

        if (Component.isComponent(cmp)) {
            cmp = cmp.dom;
        }

        dom.render(this.dom, cmp);
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

        dom.render(target, this.dom);
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