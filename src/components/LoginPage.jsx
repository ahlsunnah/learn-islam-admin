/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Login} from 'react-admin'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
// import {useEffect} from 'react'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInSuccessUrl: '#/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  // callbacks: {
  //   // Avoid redirects after sign-in.
  //   signInSuccessWithAuthResult: (result) => {
  //     // Do not redirect
  //     return false
  //   },
  // },
}

const CustomLoginPage = (props) => {
  // useEffect(() => {
  //   return firebase.auth().onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const token = await user.getIdToken()
  //       const idTokenResult = await user.getIdTokenResult()
  //       const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims']

  //       if (hasuraClaim) {
  //         localStorage.setItem('jwtToken', token)
  //         console.log('token saved')
  //         window.location.href = window.location.origin
  //       } else {
  //         console.log('no claims')
  //         alert(
  //           'Thank you for registering an account, please contact the administrator to give your permission to access the app',
  //         )
  //       }
  //     } else {
  //       console.log('no user')
  //     }
  //   })
  // }, [])
  return (
    <Login {...props}>
      <h1
        sx={{
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        Login in Adhkar app admin
      </h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Login>
  )
}

export default CustomLoginPage
