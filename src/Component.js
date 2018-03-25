const html = require('dohtml');
const extend = require('defaulty');
const {ROOT} = require('./constants');
const arrayme = require('arrayme');
const type = require('typis');
const Handlebars = require('handlebars');

class Component {

    constructor(tpl, cfg = {}) {

        this.cfg = extend.copy(cfg, {
            state: {},
            listener: {}
        });

        this.tpl = tpl;

        this._createElement();

        Object.defineProperty(this.dom, ROOT, {
            value: this
        });

    }

    _createElement() {
        const template = Handlebars.compile(this.tpl);
        const el = html.create(template(this.cfg.state));

        if (this.dom && this.dom.parentNode) {
            this.dom.parentNode.replaceChild(el, this.dom);
        }

        this.dom = el;

        for (let event in this.cfg.listener) {
            if (this.cfg.listener.hasOwnProperty(event)) {
                this.dom.addEventListener(event, this.cfg.listener[event]);
            }
        }
    }

    setState(state = {}) {
        this.cfg.state = extend.copy(state, this.cfg.state);
        this._createElement();
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