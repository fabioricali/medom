module.exports = {
    ROOT: '__MEDOM__',
    SIGN: '__MEDOM_SIGN__',
    EVENTS: [
        'show',
        'hide',
        'beforeContentChange',
        'contentChange',
        'state',
        'beforeState'
    ],
    PARSER: {
        REGEX: {
            ATTR: /{{([\w.]+)}}/,
            TEXT: /(?!<.){{([\w.]+)}}(?!.>)/g
        },
        TAG: {
            TEXT: 'medom-text-node'
        }
    },
    ATTR: {
        WIDGET: 'data-medom-widget'
    }
};