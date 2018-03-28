const html = require('dohtml');
const extend = require('defaulty');
const {ROOT} = require('./constants');
const arrayme = require('arrayme');
const Flak = require('flak');

const EVENTS = [
    'show',
    'hide',
    'beforeContentChange',
    'contentChange'
];

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

        Object.defineProperty(this, 'emitter', {
            value: new Flak()
        });

        this._visible = true;
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
     * @param {Component | Component[]} cmp component to append
     * @returns {Component}
     * @fires Component#contentChange
     */
    append(cmp) {

        cmp = arrayme(cmp);

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

    static isComponentEvent(eventName) {
        return EVENTS.includes(eventName);
    }

    /**
     * Triggered when component content is changed
     * @event Component#beforeContentChange
     * @param {HTMLElement} candidate content
     * @param {HTMLElement} old content
     * @param {Component}
     */

    /**
     * Triggered when component content is changed
     * @event Component#contentChange
     * @param {HTMLElement} current content
     * @param {HTMLElement} old content
     * @param {Component}
     */

    /**
     * Triggered when component is show
     * @event Component#show
     * @param {Component}
     */

    /**
     * Triggered when component is hidden
     * @event Component#hide
     * @param {Component}
     */

}

module.exports = Component;