import Main from './views/Main';
import Form from './components/Form';
import Edit from './components/Edit';
import Error from './components/Error';
import {Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <div onWheel = {() => console.log("hello")}
    // className="App">
    <div className="App">
      <Router>
        <Main path="/"/>
        <Form path="/new"/>
        <Error path="/error"/>
        <Edit path="/authors/:id"/>
      </Router>
    </div>
  );
}

export default App;
