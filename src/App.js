import { useState } from 'react';
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import './App.css';
import ColorList from './ColorList';
import Color from './Color';
import ColorForm from './ColorForm';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

function App() {
  const [colors, setColors] = useState([
    {name: 'red', color: 'red'},
    {name: 'blue', color: 'blue'},
    {name: 'green', color: 'green'}
  ]);

  const addColor = (colorData) => {
    setColors([...colors, colorData]);
  }

  //QUESTION: how to pass in single color?
  //filter color component that renders dumb color component
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colors}/>
          </Route>
          <Route exact path="/colors/new">
            <ColorForm addColor={addColor}/>
          </Route>
          <Route exact path="/colors/:color">
            <Color colors={colors}/>
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
