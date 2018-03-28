const {Component} = require('../');
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

    describe('hide', function () {
        it('should be hidden', function (done) {
            const cmp = new Component('<div id="test"></div>');
            cmp.on('hide', function (me) {
                console.log(this, me);
                done();
            });
            cmp.hide();
        });
    });

    describe('show', function () {
        it('should be visible', function (done) {
            const cmp = new Component('<div id="test"></div>');
            cmp.on('show', function () {
                done();
            });
            cmp.hide();
            cmp.show();
        });
    });

    describe('contentChange', function () {
        it('should be changed', function (done) {
            const cmp = new Component('<div id="test">ciao</div>');
            cmp.on('contentChange', function (current, old, me) {
                if (current !== old && old === 'ciao')
                    done();
            });
            cmp.setContent('hello');
        });
    });

    describe('click, native html', function () {
        it('should be clicked', function (done) {
            const cmp = new Component('<div id="test">ciao</div>');
            cmp.on('click', function () {
                done();
            });
            cmp.dom.click();
        });
    });

});