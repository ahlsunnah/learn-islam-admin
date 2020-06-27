import CategoryIcon from '@material-ui/icons/Book'

import React from 'react'
import {Admin, Resource} from 'react-admin'
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
import LoginPage from './components/LoginPage'

type AppProps = {
  dataProvider: Function
  authProvider: Object
}
function App(props: AppProps) {
  return (
    <Admin
      loginPage={LoginPage}
      dataProvider={props.dataProvider}
      authProvider={props.authProvider}
    >
      <div className="lol">Hello</div>
    </Admin>
  )
}

export default App
