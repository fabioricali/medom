class Component {
    constructor(props) {
        this.type = 'MEDOM';
        this.props = props;
    }

    setState(state) {
        this.state = Object.assign({}, this.state, state);
        console.log(this);
    }
}

module.exports = Component;