import React from 'react';

class MyLabel extends React.Component {
    render() {
        return (
            <p> <b>Has dado {this.props.numberOfClicks} clicks</b></p >
        );
    }
};

export default MyLabel;