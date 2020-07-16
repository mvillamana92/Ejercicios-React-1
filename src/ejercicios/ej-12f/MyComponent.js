import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chuckFact: '...'};
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src="https://1.bp.blogspot.com/-kx66K2UWZLA/UE2m_Ab5kOI/AAAAAAAABe8/WKVu3O4DgpI/s1600/Chuck.jpg" />
                <button>Cargar frase</button>
                <h1>Chuck fact {this.state.chuckFact}</h1>
            </div>
        );
    }
}

export default MyComponent;