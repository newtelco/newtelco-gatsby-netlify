import React, { useState } from 'react'
import { useForm, useField, splitFormProps } from 'react-form'
import { useQuery } from 'react-query'
import fetch from 'isomorphic-unfetch'

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
    props.onChange(e.target.value)
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

const getRackGroups = datacenter => {
  const { status, data, error, isFetching } = useQuery(
    ['datacenter', datacenter],
    (key, DC) => {
      return fetch(
        'https://newtelco.dev/.netlify/functions/netbox-rackgroups',
        {
          body: JSON.stringify({ dc: DC })
        }
      )
    }
  )
}

const Racks = props => {
  const [racks, setRacks] = useState({})
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

  if (status === 'success') {
    const newRacks = racks
    newRacks.availableRackgroups = data.results
    setRacks(newRacks)
  }

  const selectDatacenter = name => {
    console.log('sD', name)
    const newRacks = racks
    name = name.toLowerCase().replace(' ', '-')
    fetch('https://newtelco.dev/.netlify/functions/netbox-rackgroups', {
      method: 'POST',
      body: JSON.stringify({ dc: name })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        newRacks.datacenter = name
        newRacks.groups = data.results
        setRacks(newRacks)
      })

    // setRacks(newRacks)
    // getRackGroups(newRacks.datacenter)
  }

  const selectRackGroup = group => {
    console.log('sD', group)
    const newRacks = racks
    newRacks.rackgroup = name.toLowerCase().replace(' ', '-')
    setRacks(newRacks)
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
              onChange={name => selectDatacenter(name)}
              validate={value =>
                !value ? 'Datacenter Selection Required!' : false
              }
            />
          </label>
        </div>
        {Array.isArray(racks.groups) && (
          <div>
            <label>
              Room:{' '}
              <SelectField
                field="room"
                options={racks.groups}
                onChange={group => selectRackGroup(group)}
                validate={value =>
                  !value ? 'Room Selection Required!' : false
                }
              />
            </label>
          </div>
        )}
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
