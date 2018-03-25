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
            const cmp = new Component('<div>{{name}}</div>', {
                state: {
                    name: 'Fabio'
                }
            });

            console.log(cmp.dom.innerHTML);
            be.err.equal(cmp.dom.innerHTML, 'Fabio');
        });

        it('should be update', function () {

            const cmp = new Component('<div>{{name}}</div>', {
                state: {
                    name: 'Fabio'
                }
            });

            console.log(cmp.dom.innerHTML);
            be.err.equal(cmp.dom.innerHTML, 'Fabio');

            cmp.setState({
                name: 'Mike'
            });

            be.err.equal(cmp.dom.innerHTML, 'Mike');
        });

        it('should be update and listener redefined', function (done) {

            const cmp = new Component(`<div>{{name}} - {{now}}</div>`, {
                state: {
                    name: 'Fabio',
                    now: new Date().toLocaleDateString()
                },
                listener: {
                    click: function() {
                        console.log(this);
                        done()
                    }
                }
            });

            cmp.setState({
                name: 'Mike'
            });

            be.err.equal(cmp.dom.innerHTML, 'Mike - ' + new Date().toLocaleDateString());

            cmp.dom.click();
        });

        it('should be update and children redefined', function (done) {

            const cmp = new Component(`<div>{{name}} - {{now}}</div>`, {
                state: {
                    name: 'Fabio',
                    now: new Date().toLocaleDateString()
                },
                listener: {
                    click: function() {
                        console.log(this);
                        done()
                    }
                }
            });

            cmp.setState({
                name: 'Mike'
            });

            be.err.equal(cmp.dom.innerHTML, 'Mike - ' + new Date().toLocaleDateString());

            cmp.dom.click();
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

            cmp.add(cmpChild);
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