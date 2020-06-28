import React from 'react'
import {Admin, Resource, ListGuesser} from 'react-admin'
import LoginPage from './components/LoginPage'

type AppProps = {
  dataProvider: Function | null
  authProvider: Object
}

function App(props: AppProps) {
  return (
    <Admin
      loginPage={LoginPage}
      dataProvider={props.dataProvider}
      authProvider={props.authProvider}
    >
      <Resource name="chapters" list={ListGuesser} />
      <Resource name="users" list={ListGuesser} />
      <Resource name="books" list={ListGuesser} />
      <Resource name="courses" list={ListGuesser} />
      <Resource name="courses" list={ListGuesser} />
      <Resource name="questions" list={ListGuesser} />
    </Admin>
  )
}

export default App
