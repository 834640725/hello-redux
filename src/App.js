import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from './actions';

class App extends Component {
  render() {
    const { increment } = this.props;
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{ this.props.counter }</h1>
        <p className="text-center">
          <button onClick={ () => increment('rails365') } className="btn btn-primary mr-2">Increase</button>
          <button className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (name) => { dispatch(increment(name)) }
  }
};

App.propTypes = {
  counter: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
