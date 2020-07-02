import React from 'react'
import {
  SimpleForm,
  SimpleList,
  TextInput,
  Create,
  BooleanInput,
  List,
  Responsive,
  Datagrid,
  ShowButton,
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
} from 'react-admin'

// tracks: id, order, slug, soon
// track_translations: id, track_id, description, description, locale_code

const TracksForm = (props) => {
  const id = props.record.id
  return (
    <SimpleForm {...props}>
      {id && <TextInput source="id" disabled />}
      <TextInput source="order" />
      <TextInput source="slug" />
      <BooleanInput source="soon" />
    </SimpleForm>
  )
}

export const CreateTracks = (props) => {
  return (
    <Create {...props}>
      <TracksForm />
    </Create>
  )
}

export const TracksList = (props) => {
  return (
    <List {...props}>
      <Responsive
        small={
          <SimpleList linkType="show" primaryText={(record) => record.title} />
        }
        medium={
          <Datagrid>
            <TextField source="id" />
            <TextField source="order" />
            <TextField source="slug" />
            <TextField source="soon" />
            <ShowButton />
          </Datagrid>
        }
      />
    </List>
  )
}

export const TracksShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Track">
        <TextField source="id" />
        <TextField source="order" />
        <TextField source="slug" />
        <TextField source="soon" />
      </Tab>
      <Tab label="Courses" path="courses">
        <ReferenceManyField
          addLabel={false}
          reference="courses"
          target="track_id"
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="level" />
            <TextField source="order" />
            <TextField source="slug" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
)
