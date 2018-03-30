module.exports = {
    ROOT: '__MEDOM__',
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
            ATTR: /{{(.*?)}}/,
            TEXT: /{{(.*?)}}/g
        },
        TAG: {
            TEXT: 'medom-text-node'
        }
    }
};