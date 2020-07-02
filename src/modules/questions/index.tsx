import React from 'react'
import {
  SimpleForm,
  SimpleList,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Edit,
  BooleanInput,
  List,
  Responsive,
  Datagrid,
  ShowButton,
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  BooleanField,
  EditButton,
  ReferenceManyField,
  Button,
} from 'react-admin'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

// questions: id, question, is_active, type, course_id
// question_choices: id, question_id, is_right_choice, choice_order, choice

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      marginTop: '1em',
    },
  }),
)

const AddQuestionChoice = ({record}: {record?: any}) => {
  const classes = useStyles()
  return (
    <Button
      className={classes.button}
      variant="raised"
      component={Link}
      to={`/question_choices/create?question_id=${record.id}`}
      label="Add a question choice"
      title="Add a question choice"
    >
      <ChatBubbleIcon />
    </Button>
  )
}

const QuestionsForm = (props) => {
  const id = props.record.id
  return (
    <SimpleForm {...props}>
      {id && <TextInput source="id" disabled />}
      <TextInput source="question" />
      <BooleanInput source="is_active" defaultValue={true} />
      <TextInput source="type" />
      <ReferenceInput source="course_id" reference="courses">
        <SelectInput optionText="slug" />
      </ReferenceInput>
    </SimpleForm>
  )
}

export const CreateQuestions = (props) => {
  return (
    <Create {...props}>
      <QuestionsForm />
    </Create>
  )
}

export const EditQuestions = (props) => {
  return (
    <Edit {...props}>
      <QuestionsForm />
    </Edit>
  )
}

export const QuestionsList = (props) => {
  return (
    <List {...props}>
      <Responsive
        small={
          <SimpleList linkType="show" primaryText={(record) => record.title} />
        }
        medium={
          <Datagrid>
            <TextField source="id" />
            <TextField source="question" />
            <TextField source="is_active" />
            <TextField source="type" />
            <ShowButton />
          </Datagrid>
        }
      />
    </List>
  )
}

export const QuestionsShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Question">
        <TextField source="id" />
        <TextField source="question" />
        <TextField source="is_active" />
        <TextField source="type" />
      </Tab>
      <Tab label="Question choices" path="choices">
        <ReferenceManyField
          addLabel={false}
          reference="question_choices"
          target="question_id"
        >
          <Datagrid>
            <TextField source="id" />
            <BooleanField source="choice" />
            <BooleanField source="is_right_choice" />
            <BooleanField source="choice_order" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddQuestionChoice />
      </Tab>
    </TabbedShowLayout>
  </Show>
)
