const {Component, DOM} = require('../');
const dohtml = require('dohtml');
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

            be.err.object(DOM.get(cmpChildByQuery));
        });

        it('should be undefined', function () {
            const cmp = document.createElement('cmp-parent');
            be.err.undefined(DOM.get(cmp));
        });

        it('should be true, nodeList', function () {
            const html = dohtml.create(`
            <cmp-element></cmp-element>
            <cmp-element></cmp-element>
            <cmp-element></cmp-element>
            `);
            be.err.undefined(DOM.get(html));
        });
    });

    describe('getByQueryAll', function () {

        it('should be true, nodeList', function () {
            const html = dohtml.create(`
            <cmp-element></cmp-element>
            <cmp-element></cmp-element>
            <cmp-element></cmp-element>
            `);
            let result = DOM.getByQueryAll('cmp-element');

            console.log(result);
            //be.err.undefined();
        });
    });
});