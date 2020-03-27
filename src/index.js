import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/main.less";

class App extends React.Component {
    render () {
        return <h1>Hello World from React boilerplate</h1>;
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
