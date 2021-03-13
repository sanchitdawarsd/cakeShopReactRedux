import {Provider} from 'react-redux'
import React from 'react'
import HooksCakeContainer from './components/CakeContainer'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
