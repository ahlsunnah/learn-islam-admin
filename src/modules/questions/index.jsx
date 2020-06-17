/** @jsx jsx */
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'
import {jsx} from 'theme-ui'

export const QuestionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="status" />
      <ReferenceField source="category_id" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="num" />
      <TextField source="text" />
      <TextField source="img" />
      <TextField source="audio" />
      <EditButton />
    </Datagrid>
  </List>
)

export const QuestionForm = (props) => {
  const id = props.record?.id
  return (
    <SimpleForm {...props}>
      {id && <TextInput source="id" disabled />}
      <ReferenceInput source="status" reference="statuses">
        <SelectInput optionText="name" defaultValue="DRAFT" />
      </ReferenceInput>
      <ReferenceInput source="category_id" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="text" />
      <TextInput source="img" />
      <NumberInput source="num" />
      <TextInput source="audio" />
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
