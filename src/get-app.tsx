import React from 'react'
import App from './App'
import buildHasuraProvider from 'ra-data-hasura-graphql';
import {FirebaseAuthProvider} from 'react-admin-firebase';
import ApolloClient from 'apollo-boost';

const {
  REACT_APP_API,
  REACT_APP_API_SECRET,
  REACT_APP_FIREBASE_CONFIG,
} = process.env

if (!REACT_APP_API || !REACT_APP_API_SECRET) {
  throw new Error(
    'We need an API and API_SECRET env variable for the app to run',
  )
}

if (!REACT_APP_FIREBASE_CONFIG) {
  throw new Error('We need REACT_APP_FIREBASE_CONFIG set')
}

const firebaseConfig = JSON.parse(REACT_APP_FIREBASE_CONFIG)

const firebaseOptions = {
  logging: true,
  rootRef: 'root_collection/some_document',
  watch: ['posts'],
}

const authProvider = FirebaseAuthProvider(firebaseConfig, firebaseOptions)

const client = new ApolloClient({
  uri: REACT_APP_API,
  headers: {
    'x-hasura-admin-secret': REACT_APP_API_SECRET,
  }
});

export default async function getApp() {
  const provider = await buildHasuraProvider({ client })
  return () => (
    <App dataProvider={provider} authProvider={authProvider} />
  )
}
