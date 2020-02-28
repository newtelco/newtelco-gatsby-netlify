import React, { useState } from 'react'
import { useForm, useField, splitFormProps } from 'react-form'
import { useQuery } from 'react-query'

async function fakeCheckValidName(name, instance) {
  if (!name) {
    return 'A name is required'
  }

  return instance.debounce(async () => {
    console.log('checking name')
    await new Promise(resolve => setTimeout(resolve, 1000))
    // All names are valid, so return a false error
    return false
  }, 500)
}

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props)

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField(field, fieldOptions)

  // Build the field
  return (
    <>
      <input {...getInputProps({ ref, ...rest })} />{' '}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  )
})

function SelectField(props) {
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props)

  const {
    value = '',
    setValue,
    meta: { error, isTouched }
  } = useField(field, fieldOptions)

  const handleSelectChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <select {...rest} value={value} onChange={handleSelectChange}>
        <option disabled value="" />
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>{' '}
      {isTouched && error ? <em>{error}</em> : null}
    </>
  )
}

const Racks = props => {
  const { rackGroups, setRackgroups } = useState(0)
  const {
    Form,
    meta: { isSubmitting, canSubmit }
  } = useForm({
    // {
    // onSubmit: async (values, instance) => {
    //   // onSubmit (and everything else in React Form)
    //   // has async support out-of-the-box
    //   await sendToFakeServer(values)
    //   console.log('Huzzah!')
    // },
    debugForm: false
  })

  const selectDatacenter = name => {
    const { status, data, error, isFetching } = useQuery('projects', () => {
      if (title === 'Colocation') {
        return fetch(
          'https://newtelco.dev/.netlify/functions/netbox-rackgroups',
          {
            body: JSON.stringify({ dc: name.replace(' ', '-') })
          }
        )
      }
    })
    if (status === 'success' && data) {
      console.log('rackGroup', data)
      setRackgroups(data)
    }
  }

  return (
    <div>
      Racks
      <Form data-netlify="true">
        <div>
          <label>
            Name: <InputField field="name" validate={fakeCheckValidName} />
          </label>
        </div>
        <div>
          <label>
            Datacenter:{' '}
            <SelectField
              field="datacenter"
              options={props.racks}
              onSelect={name => selectDatacenter(name)}
              validate={value =>
                !value ? 'Datacenter Selection Required!' : false
              }
            />
          </label>
        </div>
        <div>
          <label>
            Room:{' '}
            <SelectField
              field="room"
              options={props.racks}
              onSelect={name => selectDatacenter(name)}
              validate={value => (!value ? 'Room Selection Required!' : false)}
            />
          </label>
        </div>
        <div>
          <label>
            Racks:{' '}
            <InputField
              field="racks"
              validate={value => (!value ? 'Rack Selection Required!' : false)}
            />
          </label>
        </div>

        <div>
          <button type="submit" disabled={!canSubmit}>
            Submit
          </button>
        </div>

        <div>
          <em>{isSubmitting ? 'Submitting...' : null}</em>
        </div>
      </Form>
    </div>
  )
}

export default Racks
