var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


// React does not adhere to "separation of technologies"
// Concerns are at the module level, not the tech level

// a compnent needs a UI, can also have:
//  state
//  lifecycle events 
//  UI

// browser will not understand ES6 (class), nor JSX
// so Babel and Webpack will compile and bundle

class App extends React.Component {
    render(){
        return(
            //JSX here, will be compiled by Babel:
            <div>
                Hello World!
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('app'))
