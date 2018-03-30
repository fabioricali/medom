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

    describe('append', function () {
        it('should not be null', function () {
            const cmp = new Component('<cmp-parent></cmp-parent>');
            const cmpChild1 = new Component('<cmp-child></cmp-child>');
            const cmpChild2 = new Component('<cmp-child></cmp-child>');

            cmp.append(cmpChild1, cmpChild2);

            be.err.object(cmp.get('cmp-child'));

            console.log(cmp.getContent())
        });
    });

    describe('get', function () {
        it('should not be null', function () {
            const cmp = new Component('<cmp-parent></cmp-parent>');
            const cmpChild1 = new Component('<cmp-child></cmp-child>', {widget: 'MyComponent'});
            const cmpChild2 = new Component('<cmp-child></cmp-child>');

            cmp.append(cmpChild1, cmpChild2);

            console.log(cmp.getContent());

            be.err.object(cmp.getWidget('MyComponent'));
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

    describe('setState', function () {
        it('should be new state', function (done) {
            const cmp = new Component('<div></div>');
            cmp.on('state', function (state, prevState) {
                console.log(state, prevState);
                be.err.object(prevState);
                be.err.empty(prevState);
                be.err(done).equal('hello', state);
            });
            cmp.setState('hello');
        });
    });

    describe('getState', function () {
        it('should be new state', function (done) {
            const cmp = new Component('<div></div>');
            cmp.on('state', function (state, prevState, me) {
                console.log(state, prevState);
                be.err.object(prevState);
                be.err.empty(prevState);
                be.err(done).equal('hello', me.getState());
            });
            cmp.setState('hello');
        });
    });

    describe('setProps', function () {
        it('should be new state', function () {

            const tpl = ()=> {
                return `
                <div class={{className}}>
                    Hello {{firstName}} {{lastName}}
                    <div>
                        <div>
                            <span>
                                <custom-cc>{{item.nested}}</custom-cc>
                            </span>
                        </div>
                    </div> 
                    other node
                </div>
                `
            };

            const cmp = new Component(tpl());
            console.log(cmp.dom.outerHTML);
            console.log(cmp.propsMap);
            cmp.setProps({
                firstName: 'Fabio',
                lastName: 'Ricali',
                item: {
                    nested: 'hello nested field'
                }
            });
            console.log(cmp.dom.outerHTML);
            console.log(cmp.propsMap);
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