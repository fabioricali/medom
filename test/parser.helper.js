const {Component} = require('../');
const helper = require('../src/parser/helper');
const be = require('bejs');

describe('parser.helper', function () {

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
    describe('createProp', function () {
        it('should be return an object with 3 properties', function () {
            const props = {};

            helper.createProp('aField1', props, {});
            helper.createProp('aField2', props, {});
            helper.createProp('aField3', props, {});

            console.log(props);

            be.err.object(props);
            be.err.true(props.hasOwnProperty('aField1'));
            be.err.true(props.hasOwnProperty('aField2'));
            be.err.true(props.hasOwnProperty('aField3'));
        });

        it('should be return an object with 2 properties nested', function () {
            const props = {};

            helper.createProp('aField', props, {});
            helper.createProp('aField.first', props, {});
            helper.createProp('aField.second', props, {});

            console.log(props);

            be.err.object(props);
            be.err.true(props.hasOwnProperty('aField'));
            be.err.true(props['aField'].hasOwnProperty('first'));
            be.err.true(props['aField'].hasOwnProperty('second'));
        });

        it('test', function () {
            const props = {
                z: [1, 2]
            };

            function co(name, anything) {
                name.split('.').reduce((o, i, y, m) => {
                    const last = m[m.length - 1];
                    if (last === i) {
                        if (o.hasOwnProperty(i)) {
                            if (!o[i].length)
                                o[i] = [anything];
                            else
                                o[i].push(anything)
                        } else {
                            o[i] = anything;
                        }
                    } else if (!o.hasOwnProperty(i)) {
                        o[i] = [];
                    }

                    return o[i]

                }, props);
            }

            /*co('a.b.c', 'con1');
            co('a.b.c.d', 'con2');
            co('f', 'con3');*/

            co('user.firstName', 'Fabio');
            co('user.lastName', 'Ricali');
            co('user.meta.photo', 'anUrl');
            co('user.result', []);
            co('user.result', 'primo');
            co('user.result', 'secondo');
            console.log(props);
            console.log(props.z);
            console.log(props.user.firstName);
            console.log(props.user.lastName);
            console.log(props.user.meta.photo);
            console.log(props.user.result[0]);
            console.log(props.user.result[1]);
        })
    });
});