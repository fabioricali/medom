const {TYPE} = require('./constants');

const DOM = {
    /**
     * Create HTML Element
     * @param {string} tag
     * @param {object} [props=null]
     * @param {string} [children]
     * @returns {HTMLElement}
     */
    createElement(tag, props, children) {
        const el = document.createElement(tag);

        this.createProps(el, props);
        this.createChildren(el, children);

        return el;
    },

    /**
     * Create attributes/listeners for HTML Element
     * @param {HTMLElement} el
     * @param {object} props
     */
    createProps(el, props) {
        if (!props && typeof props !== 'object') return;

        const _props = Object.assign({}, props);

        for (let i in _props) {
            if (_props.hasOwnProperty(i)) {
                if (i === 'className') {
                    el.setAttribute('class', _props[i]);
                } else if (this.isListenerProp(i)) {
                    el.addEventListener(i.substring(2).toLowerCase(), _props[i]);
                } else {
                    el.setAttribute(i, _props[i]);
                }
            }
        }
    },

    /**
     * Create content for HTML Element
     * @param {HTMLElement} el
     * @param {string} children
     */
    createChildren(el, children) {
        if (!children) return;
        el.innerHTML = children;
    },

    /**
     * Detect if prop is a listener
     * @param {string} prop
     * @returns {boolean}
     */
    isListenerProp(prop) {
        return /^on.*$/.test(prop);
    },

    /**
     * Render Element to target
     * @param {HTMLElement} target
     * @param {HTMLElement | Component} el
     */
    renderTo(target, el) {
        target.appendChild(
            el.type === TYPE
                ? el.render()
                : el
        );
    }
};

module.exports = DOM;