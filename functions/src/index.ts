// https://firebase.google.com/docs/functions/typescript
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp(functions.config().firebase)

// On sign up.
exports.processSignUp = functions.auth.user().onCreate((user) => {
  const customClaims = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'user',
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-user-id': user.uid,
    },
  }

  return (
    admin
      .auth()
      .setCustomUserClaims(user.uid, customClaims)
      .then(() => {
        console.log('Successfully set the claims for user', user.uid)
      })
      // .then(() => {
      //   // Update real-time database to notify client to force refresh.
      //   const metadataRef = admin.database().ref('metadata/' + user.uid)
      //   // Set the refresh time to the current UTC timestamp.
      //   // This will be captured on the client to force a token refresh.
      //   return metadataRef.set({refreshTime: new Date().getTime()})
      // })
      .catch((error) => {
        console.log(error)
      })
  )
})
