const {Component, DOM} = require('../index');
const be = require('bejs');

describe('DOM', function () {

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

    describe('createElement', function () {
        it('should be a valid DOM element', function () {
            const cmp = DOM.createElement('cmp-parent');
            console.log(cmp);
            be.err.domElement(cmp);
        });

        it('should be a valid properties', function () {
            const cmp = DOM.createElement('cmp-parent', {className: 'css-class'});
            console.log(cmp);
            be.err.domElement(cmp);
            be.err.true(cmp.hasAttribute('class'));
            be.err.equal(cmp.getAttribute('class'), 'css-class');
        });

        it('should be a valid listener', function (done) {
            const cmp = DOM.createElement('button', {onClick: () => done()});
            console.log(cmp);
            be.err.domElement(cmp);
            cmp.click();
        });

        it('should be a valid innerHTML', function () {
            const cmp = DOM.createElement('button', null, 'hello');
            console.log(cmp);
            be.err.domElement(cmp);
            be.err.equal(cmp.innerHTML, 'hello');
        });
    });

    describe('renderTo', function () {
        it('should be render to body', function () {
            const cmp = DOM.createElement('cmp-body');
            DOM.renderTo(document.body, cmp);
            be.err.equal(document.body.innerHTML, '<cmp-body></cmp-body>');
        });
    });

});