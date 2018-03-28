const html = require('dohtml');
const extend = require('defaulty');
const {ROOT, EVENTS} = require('./constants');
const Flak = require('flak');
const DOM = require('./DOM');
const equal = require('fast-deep-equal');
const copy = require('deep-copy');

const DATA_WIDGET = 'data-medom-widget';

/**
 * @class
 */
class Component {

    /**
     * Create instance
     * @param {string} tpl html string
     * @param {object} [cfg] configuration
     * @param {string} [cfg.widget] widget name
     * @param {string} [cfg.state] set initial state
     */
    constructor(tpl, cfg = {}) {

        this.cfg = extend.copy(cfg, {
            widget: '',
            state: {}
        });

        Object.defineProperty(this, 'dom', {
            value: html.create(tpl)
        });

        Object.defineProperty(this, 'state', {
            value: null,
            writable: true
        });

        Object.defineProperty(this.dom, ROOT, {
            value: this
        });

        Object.defineProperty(this, 'emitter', {
            value: new Flak()
        });

        if (this.cfg.widget) {
            this.dom.setAttribute(DATA_WIDGET, this.cfg.widget);
        }

        this._visible = true;

        this.setState(this.cfg.state);
    }

    /**
     * Get component by widget name
     * @param {string} widget name
     * @returns {Component|undefined}
     */
    getWidget(widget) {
        return DOM.getByQuery(`[${DATA_WIDGET}="${widget}"]`, this.dom);
    }

    /**
     * Get component by query
     * @param {string} query selector
     * @returns {Component|undefined}
     */
    get(query) {
        return DOM.getByQuery(query, this.dom);
    }

    /**
     * Get all components by query
     * @param {string} query selector
     * @returns {array}
     */
    getAll(query) {
        return DOM.getByQueryAll(query, this.dom);
    }

    /**
     * Check if component is visibile
     * @returns {boolean}
     */
    isVisible() {
        return this._visible;
    }

    /**
     * Hide component
     * @param {object} [opt]
     * @param {string} [opt.type=display]
     * @returns {Component}
     * @fires Component#hide
     */
    hide(opt = {}) {
        if (!this.isVisible()) return this;

        opt = extend(opt, {
            type: 'display'
        });

        this.dom.style[opt.type] = opt.type === 'display' ? 'none' : 'hidden';

        this._visible = false;

        this.emitter.fire('hide', this);

        return this;
    }

    /**
     * Show component
     * @param {object} [opt]
     * @param {string} [opt.type=display]
     * @param {string} [opt.showType=block]
     * @returns {Component}
     * @fires Component#show
     */
    show(opt = {}) {

        if (this.isVisible()) return this;

        opt = extend(opt, {
            type: 'display',
            showType: 'block'
        });

        this.dom.style[opt.type] = opt.showType;

        this._visible = true;

        this.emitter.fire('show', this);

        return this;
    }

    /**
     * Set state
     * @param {*} state
     * @returns {Component}
     * @fires Component#state
     * @fires Component#beforeState
     */
    setState(state) {
        if (!equal(state, this.state)) {
            const prevState = copy(this.state);
            const newState = copy(state);

            if (this.emitter.fireTheFirst('beforeState', newState, prevState, this) === false) return this;

            this.state = newState;
            this.emitter.fire('state', this.state, prevState, this);
        }
        return this;
    }

    /**
     * Get current state
     * @returns {*}
     */
    getState() {
        return this.state;
    }

    /**
     * Update content
     * @param content
     * @returns {Component}
     * @fires Component#beforeContentChange
     * @fires Component#contentChange
     */
    setContent(content) {
        if (content) {
            const old = this.dom.innerHTML;

            if (this.emitter.fireTheFirst('beforeContentChange', content, old, this) === false) return this;

            this.dom.innerHTML = content;
            if (content !== old)
                this.emitter.fire('contentChange', content, old, this);
        }
        return this;
    }

    /**
     * Get content
     * @returns {HTMLElement}
     */
    getContent() {
        return this.dom.innerHTML;
    }

    /**
     * Append other Medom components
     * @param {...Component} cmp component to append
     * @returns {Component}
     * @fires Component#contentChange
     */
    append(...cmp) {

        let items = [];

        cmp.forEach(item => {
            if (Component.isComponent(item))
                items.push(item.dom);
        });

        const old = this.getContent();

        html.render(this.dom, items);

        const content = this.getContent();

        if (content !== old)
            this.emitter.fire('contentChange', content, old, this);

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
     * Adds listener to instance
     * @param eventName {string} event name
     * @param callback {Function} callback
     * @returns {Component}
     */
    on(eventName, callback) {
        if (Component.isComponentEvent(eventName))
            this.emitter.on.call(this.emitter, eventName, callback);
        else {
            this.dom.addEventListener(eventName, callback);
        }
        return this;
    }

    /**
     * Suspends firing of the named event(s), works only with native component event.
     * @param eventName {...string} multiple event names to suspend
     * @returns {Component}
     */
    suspendEvent(...eventName) {
        this.emitter.suspendEvent.call(this.emitter, eventName);
        return this;
    }

    /**
     * Resumes firing of the named event(s), works only with native component event.
     * @param eventName {...string} multiple event names to resume.
     * @returns {Component}
     */
    resumeEvent(...eventName) {
        this.emitter.resumeEvent.call(this.emitter, eventName);
        return this;
    }

    /**
     * Suspends all events, works only with native component event.
     * @returns {Component}
     */
    suspendEvents() {
        this.emitter.suspendEvents.call(this.emitter);
        return this;
    }

    /**
     * Resume all events, works only with native component event.
     * @returns {Component}
     */
    resumeEvents() {
        this.emitter.resumeEvents.call(this.emitter);
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

    /**
     * @ignore
     */
    static isComponentEvent(eventName) {
        return EVENTS.includes(eventName);
    }

    /**
     * Triggered when component content is changed
     * @event Component#beforeContentChange
     * @param {HTMLElement} candidate content
     * @param {HTMLElement} old content
     * @param {Component} me
     */

    /**
     * Triggered when component content is changed
     * @event Component#contentChange
     * @param {HTMLElement} current content
     * @param {HTMLElement} old content
     * @param {Component} me
     */

    /**
     * Triggered when component is show
     * @event Component#show
     * @param {Component} me
     */

    /**
     * Triggered when component is hidden
     * @event Component#hide
     * @param {Component} me
     */

    /**
     * Triggered before change state
     * @event Component#beforeState
     * @param {*} newState
     * @param {*} prevState
     * @param {Component} me
     */

    /**
     * Triggered when component change state
     * @event Component#state
     * @param {*} state
     * @param {*} prevState
     * @param {Component} me
     */

}

module.exports = Component;