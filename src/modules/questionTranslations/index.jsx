/** @jsx jsx */
import {
  Create,
  Datagrid,
  Edit,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'
import {jsx} from 'theme-ui'

export const QuestionTranslationList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="status" />
      <ReferenceField source="question_id" reference="questions">
        <TextField source="text" />
      </ReferenceField>
      <TextField source="locale_code" />
      <TextField source="text" />
    </Datagrid>
  </List>
)

export const QuestionTranslationForm = (props) => {
  const id = props.record?.id
  return (
    <SimpleForm {...props}>
      {id && <TextInput source="id" />}
      <ReferenceInput source="status" reference="statuses">
        <SelectInput optionText="name" defaultValue="DRAFT" />
      </ReferenceInput>
      <ReferenceInput
        source="question_id"
        reference="questions"
        sort={{
          field: 'id',
          order: 'DESC',
        }}
      >
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="locale_code" reference="locales">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="text" />
    </SimpleForm>
  )
}

export const QuestionTranslationEdit = (props) => (
  <Edit {...props}>
    <QuestionTranslationForm />
  </Edit>
)

export const QuestionTranslationCreate = (props) => (
  <Create {...props}>
    <QuestionTranslationForm />
  </Create>
)
