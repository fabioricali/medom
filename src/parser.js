/**
 * Parse component
 * @param cmp
 * @returns {{}}
 */
function parser(cmp) {

    const regexAttr = /{:(.*?)}/;
    const regexText = /{:(.*?)}/g;

    function scanDOM(n) {
        do {
            if (n.nodeType === 1)
                Array.from(n.attributes).forEach(attribute => {
                    const key = attribute.value.match(regexAttr);
                    if (key) {
                        const name = key[1];
                        let component;

                        if (n.nodeName === 'MEDOM-TEXT-NODE') {
                            component = document.createTextNode('');
                            textNodes.push({
                                old: n,
                                new: component
                            });
                        } else {
                            component = attribute;
                        }

                        if (props.hasOwnProperty(name)) {
                            props[name].push(component);
                        } else {
                            props[name] = [component];
                        }
                    }
                });

            if (n.hasChildNodes()) {
                scanDOM(n.firstChild)
            }

        } while (n = n.nextSibling)
    }

    cmp.dom.innerHTML = cmp.dom.innerHTML.replace(regexText, function replacer(match) {
        return '<medom-text-node value=' + match + '></medom-text-node>';
    });

    const props = {};
    const textNodes = [];

    scanDOM(cmp.dom);

    textNodes.forEach(item => {
        item.old.parentNode.replaceChild(item.new, item.old)
    });

    return props;
}

module.exports = parser;