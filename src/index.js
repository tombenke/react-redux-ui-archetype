import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { getStore } from 'monitoring-ui-store'

//import {HashRouter, Route, Switch} from 'react-router-dom';

/*
// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'
import 'ajv'
*/

// Containers
import Main from './components/main'

const store = getStore()

ReactDOM.render(
    <Provider store={ store }>
        <Main />
    </Provider>,
    document.getElementById('root')
)
