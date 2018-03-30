const helper = require('./helper');
const {PARSER} = require('../constants');

/**
 * Parse component
 * @param cmp
 * @returns {{}}
 */
function parser(cmp) {

    const props = {};
    const textNodes = [];
    const regexAttr = PARSER.REGEX.ATTR;
    const regexText = PARSER.REGEX.TEXT;

    const el = cmp.hasOwnProperty('dom')
        ? cmp.dom
        : cmp || document.createElement('div');

    function scanner(n) {
        do {
            if (n.nodeType === 1)
                Array.from(n.attributes).forEach(attribute => {
                    const key = attribute.value.match(regexAttr);
                    if (key) {
                        const name = key[1];
                        let component;

                        if (n.nodeName.toLowerCase() === PARSER.TAG.TEXT) {
                            component = document.createTextNode('');
                            textNodes.push({
                                old: n,
                                new: component
                            });
                        } else {
                            component = attribute;
                        }

                        helper.createProp(name, props, component);
                        
                    }
                });

            if (n.hasChildNodes()) {
                scanner(n.firstChild)
            }

        } while (n = n.nextSibling)
    }

    helper.transformTag(el, regexText);
    scanner(el);
    helper.replaceComponent(textNodes);

    return props;
}

module.exports = parser;
module.exports.helper = helper;