import React from 'react'
import {
  SimpleForm,
  SimpleList,
  TextInput,
  Create,
  Edit,
  SelectInput,
  ReferenceInput,
  List,
  Responsive,
  Datagrid,
  ShowButton,
  TextField,
  ReferenceField,
  Show,
  TabbedShowLayout,
  Tab,
} from 'react-admin'

// chapters: id, course_id, audio, duration, order, slug

const ChaptersForm = (props) => {
  const id = props.record.id
  return (
    <SimpleForm {...props}>
      {id && <TextInput source="id" disabled />}
      <ReferenceInput source="course_id" reference="courses">
        <SelectInput optionText="slug" />
      </ReferenceInput>
      <TextInput source="audio" />
      <TextInput source="duration" />
      <TextInput source="order" />
      <TextInput source="slug" />
    </SimpleForm>
  )
}

export const CreateChapters = (props) => {
  return (
    <Create {...props}>
      <ChaptersForm />
    </Create>
  )
}

export const EditChapters = (props) => {
  return (
    <Edit {...props}>
      <ChaptersForm />
    </Edit>
  )
}

export const ChaptersList = (props) => {
  return (
    <List {...props}>
      <Responsive
        small={
          <SimpleList linkType="show" primaryText={(record) => record ? record.title : ''} />
        }
        medium={
          <Datagrid>
            <TextField source="id" />
            <ReferenceField source="course_id" reference="courses">
              <TextField source="slug" />
            </ReferenceField>
            <TextField source="audio" />
            <TextField source="duration" />
            <TextField source="order" />
            <TextField source="slug" />
            <ShowButton />
          </Datagrid>
        }
      />
    </List>
  )
}

export const ChaptersShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Chapter">
        <TextField source="id" />
        <ReferenceField source="course_id" reference="courses">
          <TextField source="slug" />
        </ReferenceField>
        <TextField source="audio" />
        <TextField source="duration" />
        <TextField source="order" />
        <TextField source="slug" />
      </Tab>
    </TabbedShowLayout>
  </Show>
)
