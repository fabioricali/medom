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

            //helper.createProp('aField', props, {});
            helper.createProp('aField.first', props, {});
            helper.createProp('aField.second', props, {});

            console.log(props);

            be.err.object(props);
            be.err.true(props.hasOwnProperty('aField'));
            be.err.true(props['aField'].hasOwnProperty('first'));
            be.err.true(props['aField'].hasOwnProperty('second'));
        });

    });
});