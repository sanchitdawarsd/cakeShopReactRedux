import {Provider} from 'react-redux'
import React from 'react'
import HooksCakeContainer from './components/CakeContainer'
import store from './redux/store'
import HooksIcecreamContainer from './components/IcecreamContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer/>
      <HooksIcecreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
