const {Component} = require('../');
const parser = require('../src/parser');
const be = require('bejs');

describe('parser', function () {

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

    describe('get props', function () {
        it('should be an object', function () {

            const tpl = ()=> {
                return `
                <div class={{className}} title="a title">
                    ciao {{anything}} {{hello}} {{hello}}{{ciao}}
                    <div>
                        <div>
                            <img src={{image}}/>
                            <span>
                                <custom-cc>other{{other}} text</custom-cc>
                                <custom-cc>{{ item.nested }}</custom-cc>
                            </span>
                        </div>
                    </div> 
                    other node
                </div>
                `
            };

            const el = document.createElement('div');
            el.innerHTML = tpl();

            const cmp = {
                dom: el
            };

            const props = parser(cmp);
            console.log(props);
            be.err.object(props);
        });
    });
});