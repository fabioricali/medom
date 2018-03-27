const {Component, DOM} = require('../');
const be = require('bejs');

describe('Component', function () {

    this.timeout(5000);

    before(function () {
        this.jsdom = require('jsdom-global')()
    });

    after(function () {
        this.jsdom()
    });

    beforeEach(function () {
        document.body.innerHTML = '';
    });

    describe('get', function () {
        it('should be true', function () {
            const cmp = new Component('<cmp-parent></cmp-parent>');
            const cmpChild = new Component('<cmp-child></cmp-child>');

            cmp.append(cmpChild);

            const cmpChildByQuery = cmp.dom.querySelector('cmp-child');
            const result = DOM.get(cmpChildByQuery);
            console.log(result);
            be.err.object(result);
        });

        it('should be undefined', function () {
            const cmp = document.createElement('cmp-parent');
            be.err.undefined(DOM.get(cmp));
        });

    });

    describe('getByQueryAll', function () {

        it('should be true, nodeList', function () {
            const cmp = new Component('<cmp-parent></cmp-parent>');
            const cmpChild1 = new Component('<cmp-element></cmp-element>');
            const cmpChild2 = new Component('<cmp-element></cmp-element>');

            cmp.append(cmpChild1);
            cmp.append(cmpChild2);

            cmp.renderTo(document.body);

            let result = DOM.getByQueryAll('cmp-element');

            console.log(result);
            //be.err.undefined();
        });
    });

    describe('getByQuery', function () {

        it('should be true', function () {
            const cmp = new Component('<cmp-parent></cmp-parent>');
            const cmpChild1 = new Component('<div></div>');
            const cmpChild2 = new Component('<div></div>');

            cmp.append(cmpChild1);
            cmp.append(cmpChild2);

            let result = DOM.getByQueryAll('div');

            console.log(result);
            //be.err.undefined();
        });
    });
});