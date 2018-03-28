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

    describe('create', function () {
        it('should not be null', function () {
            const cmp = new Component('<div id="test"></div>');
            console.log(cmp);
            be.err.not.null(cmp);
        });
    });

    describe('create, template string', function () {
        it('should not be null', function () {
            let data = {
                name: 'hello'
            };

            const cmp = new Component('<div>{{data.name}}</div>', {
                state: data
            });
            console.log(cmp.dom.innerHTML);
            be.err.not.null(cmp);
        });
    });

    describe('renderTo', function () {
        it('should not be null', function () {
            const cmp = new Component('<cmp-parent></cmp-parent>');
            const cmpChild = new Component('<cmp-child></cmp-child>');

            cmpChild.setTitle = function () {
                this.dom.innerHTML = 'ciao';
            };

            cmpChild.getTitle = function () {
                return this.dom.innerHTML;
            };

            cmp.append(cmpChild);
            cmpChild.setTitle();

            console.log(cmp);
            be.err.not.null(cmp);
            console.log(cmp.dom.querySelector('cmp-child').innerHTML);
            be.err.equal(cmp.dom.querySelector('cmp-child').innerHTML, 'ciao');
            be.err.equal(cmpChild.getTitle(), 'ciao');

            const cmpChildByQuery = cmp.dom.querySelector('cmp-child');

            console.log(cmpChildByQuery.__MEDOM__)
        });
    });

    describe('hide', function () {
        it('should be hidden', function () {
            const cmp = new Component('<div id="test"></div>');
            console.log(cmp);
            be.err.true(cmp.isVisible());
            cmp.hide();
            be.err.false(cmp.isVisible());
        });
    });

    describe('show', function () {
        it('should be visible', function () {
            const cmp = new Component('<div id="test"></div>');
            console.log(cmp);
            cmp.hide();
            be.err.false(cmp.isVisible());
            cmp.show();
            be.err.true(cmp.isVisible());
        });
    });

    describe('setContent', function () {
        it('should be changed', function () {
            const cmp = new Component('<div id="test"></div>');
            cmp.setContent('hello');
            be.err.equal('hello', cmp.getContent());
        });
    });

    describe('isComponent', function () {
        it('should be true', function () {
            const cmp = new Component('<cmp-parent></cmp-parent>');
            be.err.true(Component.isComponent(cmp));
        });
        it('should be false', function () {
            const cmp = document.createElement('cmp-parent');
            be.err.false(Component.isComponent(cmp));
        });
    });
});