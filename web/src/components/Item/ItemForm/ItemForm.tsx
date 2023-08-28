import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditItemById, UpdateItemInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormItem = NonNullable<EditItemById['item']>

interface ItemFormProps {
  item?: EditItemById['item']
  onSave: (data: UpdateItemInput, id?: FormItem['id']) => void
  error: RWGqlError
  loading: boolean
}

const ItemForm = (props: ItemFormProps) => {
  const onSubmit = (data: FormItem) => {
    props.onSave(data, props?.item?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormItem> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.item?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="urgent"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Urgent
        </Label>

        <CheckboxField
          name="urgent"
          defaultChecked={props.item?.urgent}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="urgent" className="rw-field-error" />

        <Label
          name="checked"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checked
        </Label>

        <CheckboxField
          name="checked"
          defaultChecked={props.item?.checked}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="checked" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.item?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="noteId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Note id
        </Label>

        <NumberField
          name="noteId"
          defaultValue={props.item?.noteId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="noteId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ItemForm
