/** @jsx jsx */
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'
import {jsx} from 'theme-ui'

export const QuestionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="level" />
      <TextField source="question" />
      <TextField source="is_active" />
      <EditButton />
    </Datagrid>
  </List>
)

export const QuestionForm = (props) => {
  const id = props.record?.id
  return (
    <SimpleForm {...props}>
      {id && <TextInput source="id" disabled />}
      <TextInput source="type" />
      <TextInput source="level" />
      <TextInput source="question" />
      <TextInput source="is_active" />
    </SimpleForm>
  )
}

export const QuestionEdit = (props) => (
  <Edit {...props}>
    <QuestionForm />
  </Edit>
)

export const QuestionCreate = (props) => (
  <Create {...props}>
    <QuestionForm />
  </Create>
)
