const {Component, DOM} = require('../index');
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
        it('should be a valid Component', function () {

            class MyComponent extends Component {

                constructor(props) {
                    super(props);

                    this.state = {
                        name: 'Fabio'
                    }
                }

                render() {
                    return DOM.createElement('div', null, `Hello ${this.state.name}`)
                }

            }

            DOM.renderTo(document.body, new MyComponent());

            be.err.equal(document.body.innerHTML, '<div>Hello Fabio</div>');
        });

    });

    describe('props', function () {
        it('should be a valid Component with props', function () {

            class MyComponent extends Component {

                constructor(props) {
                    super(props);

                    this.state = {
                        name: 'Fabio'
                    }
                }

                render() {
                    return DOM.createElement('div', {
                        style: `color: red`
                    }, `Hello ${this.state.name}`)
                }

            }

            DOM.renderTo(document.body, new MyComponent());
            const html = document.body.innerHTML;
            console.log(html);
            be.err.equal(html, '<div style="color: red">Hello Fabio</div>');
        });
    });

    describe('state', function () {
        it('should be update state', function () {

            class MyComponent extends Component {

                constructor(props) {
                    super(props);

                    this.state = {
                        name: 'Fabio'
                    }
                }

                render() {
                    return DOM.createElement('div', {
                        style: `color: red`
                    }, `Hello ${this.state.name}`)
                }

            }

            const myCmp = new MyComponent();

            DOM.renderTo(document.body, myCmp);
            let html = document.body.innerHTML;
            console.log(html);
            be.err.equal(html, '<div style="color: red">Hello Fabio</div>');

            myCmp.setState({
                name: 'Mike'
            });

            html = document.body.innerHTML;
            console.log(html);
        });
    });

});