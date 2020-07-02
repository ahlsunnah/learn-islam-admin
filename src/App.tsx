import React from 'react'
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin'
import LoginPage from './components/LoginPage'
import {
  CreateQuestions,
  QuestionsList,
  QuestionsShow,
} from './modules/questions'
import {
  TracksShow,
  TracksList,
  CreateTracks
} from './modules/tracks'
import {
  CreateQuestionChoice,
  QuestionChoicesShow,
} from './modules/questionChoices'

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
      <Resource name="users" list={ListGuesser} edit={EditGuesser} />
      <Resource
        name="question_choices"
        list={ListGuesser}
        edit={EditGuesser}
        show={QuestionChoicesShow}
        create={CreateQuestionChoice}
      />
      <Resource name="books" list={ListGuesser} edit={EditGuesser} />
      <Resource name="courses" list={ListGuesser} edit={EditGuesser} />
      <Resource
        name="questions"
        list={QuestionsList}
        edit={EditGuesser}
        create={CreateQuestions}
        show={QuestionsShow}
      />
      <Resource
        name="tracks"
        list={TracksList}
        edit={EditGuesser}
        create={CreateTracks}
        show={TracksShow}
      />
    </Admin>
  )
}

export default App
