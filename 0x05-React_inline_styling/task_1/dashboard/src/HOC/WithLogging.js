import React from 'react';

function WithLogging(WrappedComponent) {

  class WithLogging extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`Component ${ WrappedComponent.name } is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${ WrappedComponent.name } is going to unmount`);
    }

    render() {
      return (
        <div>
          <WrappedComponent { ...this.props } />
        </div>
      );
    }
  };

  WithLogging.displayName = `WithLogging(${ WrappedComponent.name })`;
  return WithLogging;

}

export default WithLogging;
