import React from 'react'
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin'
import LoginPage from './components/LoginPage'
import {
  CreateQuestions,
  QuestionsList,
  QuestionsShow,
  EditQuestions,
} from './modules/questions'
import {
  TracksShow,
  TracksList,
  EditTracks,
  CreateTracks,
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
      <Resource name="books" list={ListGuesser} edit={EditGuesser} />
      <Resource name="courses" list={ListGuesser} edit={EditGuesser} />
      <Resource
        name="tracks"
        list={TracksList}
        edit={EditTracks}
        create={CreateTracks}
        show={TracksShow}
      />
      <Resource
        name="questions"
        list={QuestionsList}
        edit={EditQuestions}
        create={CreateQuestions}
        show={QuestionsShow}
      />
      <Resource
        name="question_choices"
        list={ListGuesser}
        edit={EditGuesser}
        show={QuestionChoicesShow}
        create={CreateQuestionChoice}
      />
      <Resource name="question_types" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  )
}

export default App
