/** @jsx jsx */
import {
  ArrayField,
  ArrayInput,
  ChipField,
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
  SimpleFormIterator,
  SingleFieldList,
  TextField,
  TextInput,
} from 'react-admin'
import {jsx} from 'theme-ui'

export const InvocationList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="status" />
      <ReferenceField source="question_id" reference="questions">
        <TextField source="text" />
      </ReferenceField>
      <NumberField source="num" />
      <NumberField source="order" />
      <ArrayField source="content">
        <SingleFieldList>
          <ChipField source="text" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="source" />
      <TextField source="audio" />
      <EditButton />
    </Datagrid>
  </List>
)

export const InvocationForm = (props) => {
  const id = props.record?.id
  return (
    <SimpleForm {...props}>
      {id && <TextInput source="id" disabled />}
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
      <NumberInput source="order" />
      <NumberInput source="num" />
      <ArrayInput source="content">
        <SimpleFormIterator>
          <TextInput source="text" />
          <SelectInput
            source="type"
            defaultValue="text"
            choices={[
              {id: 'intro', name: 'intro'},
              {id: 'text', name: 'text'},
              {id: 'outro', name: 'outro'},
            ]}
          />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="source" />
      <TextInput source="audio" />
    </SimpleForm>
  )
}

export const InvocationEdit = (props) => (
  <Edit {...props}>
    <InvocationForm />
  </Edit>
)

export const InvocationCreate = (props) => (
  <Create {...props}>
    <InvocationForm />
  </Create>
)
