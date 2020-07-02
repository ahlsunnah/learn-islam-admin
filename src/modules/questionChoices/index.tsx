import React, {useState, useCallback} from 'react'
import {
  BooleanInput,
  BooleanField,
  ReferenceField,
  Create,
  TextInput,
  SimpleForm,
  required,
  useNotify,
  Show,
  FormWithRedirect,
  useCreate,
  Button,
  SaveButton,
  useGetOne,
  SimpleShowLayout,
  TextField,
  ReferenceInput,
  SelectInput,
} from 'react-admin'
import {useFormState, useForm} from 'react-final-form'
import {useLocation} from 'react-router'
import {makeStyles} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Drawer from '@material-ui/core/Drawer'
import IconContentAdd from '@material-ui/icons/Add'
import IconCancel from '@material-ui/icons/Cancel'
import IconImageEye from '@material-ui/icons/RemoveRedEye'
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

export const CreateQuestionChoice = (props) => {
  // Read the post_id from the location
  const location = useLocation()
  const question_id =
    location.state && location.state.record
      ? location.state.record.question_id
      : undefined
  const redirect = question_id
    ? `/questions/${question_id}/show/question_choices`
    : false

  return (
    <Create {...props}>
      <SimpleForm defaultValue={{question_id}} redirect={redirect}>
        <QuestionReferenceInput
          source="question_id"
          reference="questions"
          allowEmpty
          validate={required()}
          perPage={10000}
        />
        <BooleanInput defaultValue={true} source="is_right_choice" />
        <TextInput source="choice_order" />
        <TextInput source="choice" />
      </SimpleForm>
    </Create>
  )
}

function QuestionQuickCreateButton({onChange}) {
  const [showDialog, setShowDialog] = useState(false)
  const [create, {loading}] = useCreate('questions')
  const notify = useNotify()
  const form = useForm()

  const handleClick = () => {
    setShowDialog(true)
  }

  const handleCloseClick = () => {
    setShowDialog(false)
  }

  const handleSubmit = async (values) => {
    create(
      {payload: {data: values}},
      {
        onSuccess: ({data}) => {
          setShowDialog(false)
          // Update the comment form to target the newly created post
          // Updating the ReferenceInput value will force it to reload the available posts
          form.change('question_id', data.id)
          onChange()
        },
        onFailure: ({error}) => {
          notify(error.message, 'error')
        },
      },
    )
  }

  return (
    <>
      <Button onClick={handleClick} label="ra.action.create">
        <IconContentAdd />
      </Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="Create question"
      >
        <DialogTitle>Create question</DialogTitle>

        <FormWithRedirect
          resource="questions"
          save={handleSubmit}
          render={({handleSubmitWithRedirect, pristine, saving}) => (
            <>
              <DialogContent>
                <TextInput source="question" />
                <BooleanInput source="is_active" />
                <TextInput source="type" />
                <ReferenceInput source="chapter_id" reference="chapters">
                  <SelectInput optionText="slug" />
                </ReferenceInput>
              </DialogContent>
              <DialogActions>
                <Button
                  label="ra.action.cancel"
                  onClick={handleCloseClick}
                  disabled={loading}
                >
                  <IconCancel />
                </Button>
                <SaveButton
                  handleSubmitWithRedirect={handleSubmitWithRedirect}
                  pristine={pristine}
                  saving={saving}
                  disabled={loading}
                />
              </DialogActions>
            </>
          )}
        />
      </Dialog>
    </>
  )
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  field: {
    // These styles will ensure our drawer don't fully cover our
    // application when teaser or title are very long
    '& span': {
      display: 'inline-block',
      maxWidth: '20em',
    },
  },
})

const QuestionQuickPreviewButton = ({id}) => {
  const [showPanel, setShowPanel] = useState(false)
  const classes = useStyles()
  const {data} = useGetOne('questions', id)

  const handleClick = () => {
    setShowPanel(true)
  }

  const handleCloseClick = () => {
    setShowPanel(false)
  }

  return (
    <>
      <Button onClick={handleClick} label="ra.action.show">
        <IconImageEye />
      </Button>
      <Drawer anchor="right" open={showPanel} onClose={handleCloseClick}>
        <div>
          <Button label="Close" onClick={handleCloseClick}>
            <IconKeyboardArrowRight />
          </Button>
        </div>
        <SimpleShowLayout
          record={data}
          basePath="/questions"
          resource="questions"
        >
          <TextField source="id" />
          <TextField source="question" className={classes.field} />
          <TextField source="is_active" className={classes.field} />
        </SimpleShowLayout>
      </Drawer>
    </>
  )
}

const spySubscription = {values: true}

const QuestionReferenceInput = (props) => {
  const classes = useStyles()
  const [version, setVersion] = useState(0)
  const {values} = useFormState({subscription: spySubscription})
  const handleChange = useCallback(() => setVersion(version + 1), [version])

  return (
    <div className={classes.root}>
      <ReferenceInput key={version} {...props}>
        <SelectInput optionText="question" />
      </ReferenceInput>

      <QuestionQuickCreateButton onChange={handleChange} />
      {!!values.question_id && (
        <QuestionQuickPreviewButton id={values.question_id} />
      )}
    </div>
  )
}

export const QuestionChoicesShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="post_id" reference="posts">
        <TextField source="title" />
      </ReferenceField>
      <BooleanField source="is_right_choice" />
      <TextField source="choice_order" />
      <TextField source="choice" />
    </SimpleShowLayout>
  </Show>
)
