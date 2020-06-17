/** @jsx jsx */
import {
  ArrayField,
  ArrayInput,
  ChipField,
  Create,
  Datagrid,
  Edit,
  List,
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

export const InvocationTranslationList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="status" />
      <TextField source="locale_code" />
      <ReferenceField source="invocation_id" reference="invocations">
        <TextField source="id" />
      </ReferenceField>
      <ArrayField source="content">
        <SingleFieldList>
          <ChipField source="text" />
        </SingleFieldList>
      </ArrayField>

      <TextField source="source" />
    </Datagrid>
  </List>
)

export const InvocationTranslationForm = (props) => {
  const id = props.record?.id
  return (
    <SimpleForm {...props}>
      {id && <TextInput source="id" />}
      <ReferenceInput source="status" reference="statuses">
        <SelectInput optionText="name" defaultValue="DRAFT" />
      </ReferenceInput>
      <ReferenceInput source="locale_code" reference="locales">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        source="invocation_id"
        reference="invocations"
        sort={{
          field: 'id',
          order: 'DESC',
        }}
      >
        <SelectInput optionText="id" />
      </ReferenceInput>
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
    </SimpleForm>
  )
}

export const InvocationTranslationEdit = (props) => (
  <Edit {...props}>
    <InvocationTranslationForm />
  </Edit>
)

export const InvocationTranslationCreate = (props) => (
  <Create {...props}>
    <InvocationTranslationForm />
  </Create>
)
