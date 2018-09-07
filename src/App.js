import React from 'react'
import { Provider } from 'react-redux'

import Store from './redux/store'
import Main from './components/main/Main'

const App = () =>  (
  <Provider store={Store}>
    <Main />
  </Provider>
)

export default App