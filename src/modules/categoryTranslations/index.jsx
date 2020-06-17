/** @jsx jsx */
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'
import {jsx} from 'theme-ui'

export const CategoryTranslationList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" />
      <TextField source="status" />
      <TextField source="locale_code" />
      <EditButton />
    </Datagrid>
  </List>
)

export const CategoryTranslationForm = (props) => {
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
      <ReferenceInput source="locale_code" reference="locales">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
    </SimpleForm>
  )
}

export const CategoryTranslationEdit = (props) => (
  <Edit {...props}>
    <CategoryTranslationForm />
  </Edit>
)

export const CategoryTranslationCreate = (props) => (
  <Create {...props}>
    <CategoryTranslationForm />
  </Create>
)
