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
            const cmp = new Component('<div class={:className}>ciao {:anything} {:hello} {:hello}{:ciao}<div><div><img/><span><custom-cc>altro{:altro} testo</custom-cc></span></div></div> altro nodo</div>');
            //console.log(cmp.dom.attributes[0]);

            const regexAttr = /{:(.*?)}/;
            const regexText = /{:(.*?)}/g;

            cmp.dom.innerHTML = cmp.dom.innerHTML.replace(regexText, function replacer(match){
                return '<medom-text-node value='+match+'/>';
            } );

            const props = {};

            function walkDOM(n) {
                do {
                    if (n.nodeType === 1) {
                        console.log(n.nodeName);
                        Array.from(n.attributes).forEach(attribute => {
                            const key = attribute.value.match(regexAttr);
                            if (key) {
                                const name = key[1];
                                if (props.hasOwnProperty(name)) {
                                    props[name].push(attribute);
                                } else {
                                    props[name] = [attribute];
                                }
                            }
                        });

                    } else if (n.nodeType === 3) {
                        /*n.__MEDOM__TEXT__NODE = true;
                        let match;
                        const tempAttr = [];
                        while (match = regexText.exec(n.nodeValue)) {
                            const name = match[1];
                            const attribute = document.createTextNode('');
                            if (props.hasOwnProperty(name)) {
                                props[name].push(attribute);
                            } else {
                                props[name] = [attribute];
                            }
                        }*/

                        //n.nodeValue = '<medom-text-node></medom-text-node>';

                    }

                    if (n.hasChildNodes() && !n.firstChild.__MEDOM__TEXT__NODE) {
                        walkDOM(n.firstChild)
                    }

                } while (n = n.nextSibling)
            }

            walkDOM(cmp.dom);

            console.log(props);
            console.log(cmp.getContent());

            /*console.log(cmp.getContent());
            const text = document.createTextNode('hello');
            cmp.append(text);
            cmp.dom.replaceChild(document.createTextNode('hhhhhhhhhhh'), text);
            console.log(cmp.getContent());
            text.nodeValue = 'cambia?';
            console.log(cmp.getContent());

            cmp.dom.attributes[0].value = 'ciao';*/
            // get properties
            /*Array.prototype.slice.call(cmp.dom.attributes).forEach(function(item) {
                console.log(item.name + ': '+ item.value);
            });*/
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