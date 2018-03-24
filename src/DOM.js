const DOM = {
    /**
     * Create HTML Element
     * @param {string} tag
     * @param {object} [props=null]
     * @param {string} [children]
     * @returns {HTMLAnchorElement | HTMLAppletElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLBaseFontElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDirectoryElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFontElement | HTMLFormElement | HTMLFrameElement | HTMLFrameSetElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLModElement | HTMLUnknownElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLPreElement | HTMLMapElement | HTMLMarqueeElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLUnknownElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLParamElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLQuoteElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableDataCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTableSectionElement | HTMLTableHeaderCellElement | HTMLTableSectionElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | MSHTMLWebViewElement | HTMLPreElement}
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
     * @param {HTMLElement | NodeList} el
     */
    renderTo(target, el) {
        target.appendChild(el);
    }
};

module.exports = DOM;