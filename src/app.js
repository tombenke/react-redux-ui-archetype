import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { getStore } from 'monitoring-ui-store'
import Main from './components/main'

const store = getStore()

ReactDOM.render(
    <Provider store={ store }>
        <Main />
    </Provider>,
    document.getElementById('app')
)
