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
  dataProvider: Function,
  authProvider: Object
}
function App(props: AppProps) {
  return (
    <Admin
      loginPage={LoginPage}
      dataProvider={props.dataProvider}
      authProvider={props.authProvider}
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
