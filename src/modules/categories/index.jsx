/** @jsx jsx */
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  NumberField,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'
import {ColorInput} from 'react-admin-color-input'
import {jsx} from 'theme-ui'

export const CategoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="num" />
      <TextField source="name" />
      <TextField source="slug" />
      <TextField source="status" />
      <EditButton />
    </Datagrid>
  </List>
)

export const CategoryForm = (props) => {
  const id = props.record?.id
  return (
    <SimpleForm {...props}>
      {id && <TextInput source="id" disabled />}
      <ReferenceInput source="status" reference="statuses">
        <SelectInput optionText="name" defaultValue="DRAFT" />
      </ReferenceInput>
      <NumberInput source="num" required />
      <TextInput source="name" required />
      <TextInput source="slug" />

      <ColorInput source="color" />
      <TextInput source="img" />
    </SimpleForm>
  )
}
export const CategoryEdit = (props) => (
  <Edit {...props}>
    <CategoryForm />
  </Edit>
)

export const CategoryCreate = (props) => (
  <Create {...props}>
    <CategoryForm />
  </Create>
)
