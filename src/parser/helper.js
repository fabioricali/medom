const {PARSER} = require('../constants');

function sanitize(field) {
    return field.replace(/[ "=]/g, '');
}

function transformTag(el, regex) {
    el.innerHTML = el.innerHTML.replace(regex, function replacer(match) {
        // Remove spaces
        match = sanitize(match);
        return `<${PARSER.TAG.TEXT} value=${match}></${PARSER.TAG.TEXT}>`;
    });
}

function replaceComponent(textNodes) {
    textNodes.forEach(item => {
        item.old.parentNode.replaceChild(item.new, item.old)
    });
}

function createProp(name, props, component) {
    if (name.includes('.')) {
        name.split('.').reduce((o, i) => {
            console.log(o, i);
            return o[i]
        }, props);
    }
    if (props.hasOwnProperty(name)) {
        props[name].push(component);
    } else {
        props[name] = [component];
    }
}

module.exports = {
    createProp,
    sanitize,
    transformTag,
    replaceComponent
};