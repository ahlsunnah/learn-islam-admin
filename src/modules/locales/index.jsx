/** @jsx jsx */
import {
  Create,
  Datagrid,
  Edit,
  List,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'
import {jsx} from 'theme-ui'

export const LocaleList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="code" />
      <TextField source="name" />
      <TextField source="status" />
    </Datagrid>
  </List>
)
export const LocaleForm = (props) => {
  return (
    <SimpleForm {...props}>
      <ReferenceInput source="status" reference="statuses">
        <SelectInput optionText="name" defaultValue="DRAFT" />
      </ReferenceInput>
      <TextInput source="code" />
      <TextInput source="name" />
    </SimpleForm>
  )
}

export const LocaleEdit = (props) => (
  <Edit {...props}>
    <LocaleForm />
  </Edit>
)

export const LocaleCreate = (props) => (
  <Create {...props}>
    <LocaleForm />
  </Create>
)
