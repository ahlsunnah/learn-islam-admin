import CategoryIcon from '@material-ui/icons/Book'
import hasuraDataProvider from 'ra-data-hasura'
import React from 'react'
import {fetchUtils, Admin, Resource} from 'react-admin'
import {CategoryCreate, CategoryEdit, CategoryList} from './modules/categories'
import {
  CategoryTranslationCreate,
  CategoryTranslationEdit,
  CategoryTranslationList,
} from './modules/categoryTranslations'
import {
  InvocationCreate,
  InvocationEdit,
  InvocationList,
} from './modules/invocations'
import {
  InvocationTranslationCreate,
  InvocationTranslationEdit,
  InvocationTranslationList,
} from './modules/invocationTranslations'
import {LocaleCreate, LocaleEdit, LocaleList} from './modules/locales'
import {QuestionCreate, QuestionEdit, QuestionList} from './modules/questions'
import {
  QuestionTranslationCreate,
  QuestionTranslationEdit,
  QuestionTranslationList,
} from './modules/questionTranslations'
import {FirebaseAuthProvider} from 'react-admin-firebase'
import LoginPage from './components/LoginPage'

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

const hasuraConfig = {
  primaryKey: {
    locales: 'code',
    statuses: 'name',
  },
}

// Create a client for Hasura with the right headers
const httpClient = (url, options = {}) => {
  return authProvider.getJWTToken().then(function (JWT) {
    if (!options.headers) {
      options.headers = new Headers({Accept: 'application/json'})
    }
    options.headers.set('Authorization', `Bearer ${JWT}`)
    return fetchUtils.fetchJson(url, options)
  })
}
const App = () => {
  return (
    <Admin
      loginPage={LoginPage}
      dataProvider={hasuraDataProvider(REACT_APP_API, httpClient, hasuraConfig)}
      authProvider={authProvider}
    >
      <Resource
        name="categories"
        icon={CategoryIcon}
        list={CategoryList}
        edit={CategoryEdit}
        create={CategoryCreate}
      />
      <Resource
        name="category_translations"
        list={CategoryTranslationList}
        edit={CategoryTranslationEdit}
        create={CategoryTranslationCreate}
      />
      <Resource
        name="questions"
        list={QuestionList}
        edit={QuestionEdit}
        create={QuestionCreate}
      />
      <Resource
        name="question_translations"
        list={QuestionTranslationList}
        edit={QuestionTranslationEdit}
        create={QuestionTranslationCreate}
      />
      <Resource
        name="invocations"
        list={InvocationList}
        edit={InvocationEdit}
        create={InvocationCreate}
      />
      <Resource
        name="invocation_translations"
        list={InvocationTranslationList}
        edit={InvocationTranslationEdit}
        create={InvocationTranslationCreate}
      />
      <Resource
        name="locales"
        list={LocaleList}
        edit={LocaleEdit}
        create={LocaleCreate}
      />
      <Resource name="statuses" />
    </Admin>
  )
}

export default App
