/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Login, LoginForm} from 'react-admin'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
// import {useEffect} from 'react'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInSuccessUrl: '#/',
  // We will display Google and Facebook as auth providers.
}

const CustomLoginPage = (props) => {
  return (
    <Login {...props}>
      <h1
        sx={{
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        Login in Learn Islam app admin
      </h1>
      <LoginForm {...props} />
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Login>
  )
}

export default CustomLoginPage
