import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { simpleAction } from '../actions/simpleAction';

const Main = (props) => {
    return (
        <>
            <h1>Hello World from React boilerplate</h1>
            <button onClick={props.simpleAction}>Test redux action</button>
            <pre>{JSON.stringify(props)}</pre>
        </>
    );
};
/*class Main extends React.Component {
    constructor (props) {
        super(props);
        this.simpleAction = this.simpleAction.bind(this);
    }
    simpleAction (event) {
        this.props.simpleAction();
    }
    render () {
        return (
            <React.Fragement>
                <h1>Hello World from React boilerplate</h1>
                <button onClick={this.simpleAction}>Test redux action</button>
                <pre>{JSON.stringify(this.props)}</pre>
            </React.Fragement>
        );
    }
}
*/
const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    simpleAction: () => dispatch(simpleAction())
});

Main.propTypes = {
    simpleAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
