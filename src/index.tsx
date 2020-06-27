import React from 'react'
import './index.css'
import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom'
import buildHasuraProvider from 'ra-data-hasura-graphql'
import {FirebaseAuthProvider} from 'react-admin-firebase'
import useApolloClien from './hooks/apollo'
import App from './App'

const {
  REACT_APP_HASURA_ENDPOINT,
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_databaseURL,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_apiId,
  REACT_APP_measurementId,
} = process.env

if (!REACT_APP_HASURA_ENDPOINT) {
  throw new Error('Missing Hasura endpoint env var')
}

const firebaseConfig = {
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_apiId,
  measurementId: REACT_APP_measurementId,
}

const firebaseOptions = {
  logging: true,
  rootRef: 'root_collection/some_document',
  watch: ['posts'],
}

const authProvider = FirebaseAuthProvider(firebaseConfig, firebaseOptions)

const AppContainer = () => {
  const client = useApolloClien()
  const dataProvider = buildHasuraProvider({client})

  return <App authProvider={authProvider} dataProvider={dataProvider} />
}

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root'),
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
