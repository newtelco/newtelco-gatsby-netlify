import React from 'react'
import Select from 'react-select'
import fetch from 'isomorphic-unfetch'
import * as S from './styled.js'
import { Plus, Minus } from 'react-feather'

class Racks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rackGroupLoading: false,
      datacenterLoading: false,
      form: {
        fullname: '',
        email: '',
        datacenters: props.datacenters,
        rackgroups: [],
        availableRacks: 0,
        requestedRacks: 0
      },
      errors: {
        name: '',
        email: '',
        datacenter: '',
        rackgroup: '',
        availableRacks: '',
        requestedRacks: ''
      }
    }
  }

  selectDatacenter = rawName => {
    this.setState({
      datacenterLoading: true
    })
    const name = rawName.label
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/\./g, '-')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
    fetch('https://newtelco.dev/.netlify/functions/netbox-rackgroups', {
      method: 'POST',
      body: JSON.stringify({ dc: name })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        const groups = []
        data.results.forEach(group => {
          groups.push({ value: group.slug, label: group.name })
        })
        this.setState({
          datacenterLoading: false,
          form: {
            ...this.state.form,
            rackgroups: groups
          }
        })
      })
      .catch(err => console.error(err))
  }

  selectRackGroup = rawGroup => {
    console.log('rG', rawGroup)
    const group = rawGroup.value
    this.setState({
      rackGroupLoading: true
    })
    fetch('https://newtelco.dev/.netlify/functions/netbox-racks', {
      method: 'POST',
      body: JSON.stringify({ rg: group })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({
          selectedRackgroup: group,
          rackGroupLoading: false,
          form: {
            ...this.state.form,
            availableRacks: data.count
          }
        })
      })
      .catch(err => console.error(err))
  }

  handleFullNameChange = e => {
    e.preventDefault()

    const fullname = e.target.value
    const validFullnameRegex = RegExp(/.*/i)
    validFullnameRegex.test(fullname)
      ? this.setState({
        form: { ...this.state.form, fullname: fullname },
        errors: { ...this.state.errors, fullname: '' }
      })
      : this.setState({
        errors: { ...this.state.errors, fullname: 'Fullname is not valid!' }
      })
  }
  handleEmailChange = e => {
    e.preventDefault()
    const email = e.target.value
    this.setState({
      form: { ...this.state.form, email: email }
    })
  }
  handleEmailBlur = e => {
    e.preventDefault()
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    )
    const email = e.target.value
    validEmailRegex.test(email)
      ? this.setState({
        form: { ...this.state.form, email: email },
        errors: { ...this.state.errors, email: '' }
      })
      : this.setState({
        errors: { ...this.state.errors, email: 'Email is not valid!' }
      })
  }
  handleRequestedRacksChange = e => {
    e.preventDefault()
    const requestedRacks = e.target.value

    // const validRequestedRacksRegex = RegExp(/^[0-9][0-9,\.]+$/gi)
    const validRequestedRacksRegex = RegExp(/[0-9]*/g)
    validRequestedRacksRegex.test(requestedRacks)
      ? this.setState({
        form: { ...this.state.form, requestedRacks: requestedRacks },
        errors: { ...this.state.errors, requestedRacks: '' }
      })
      : this.setState({
        errors: { ...this.state.errors, requestedRacks: 'Requested Racks' }
      })
  }

  handleIncrementRequested = e => {
    const { form } = this.state

    e.preventDefault()

    const requested = form.requestedRacks
    if (
      form.availableRacks !== 0 &&
      form.requestedRacks < form.availableRacks
    ) {
      this.setState({
        form: {
          ...this.state.form,
          requestedRacks: parseInt(requested) + 1
        }
      })
    }
  }
  handleDecrementRequested = e => {
    const { form } = this.state

    e.preventDefault()

    const requested = form.requestedRacks
    if (form.availableRacks !== 0 && form.requestedRacks > 0) {
      this.setState({
        form: {
          ...this.state.form,
          requestedRacks: parseInt(requested) - 1
        }
      })
    }
  }

  render() {
    const {
      rackgroups,
      datacenters,
      datacenterLoading,
      rackGroupLoading,
      errors,
      form
    } = this.state
    return (
      <S.RacksWrapper>
        <S.InputHeader>Racks</S.InputHeader>
        <S.RacksForm data-netlify="true" name="racks" action="" method="post" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="racks" />
          <S.InputWrapper>
            <label>
              <S.InputLabel>Full Name</S.InputLabel>
              <S.InputField
                name="name"
                type="text"
                value={form.fullname}
                onChange={this.handleFullNameChange}
              />
              {errors.fullname && (
                <S.ErrorWrapper>{errors.fullname}</S.ErrorWrapper>
              )}
            </label>
          </S.InputWrapper>
          <S.InputWrapper>
            <label>
              <S.InputLabel>Email</S.InputLabel>
              <S.InputField
                name="email"
                type="email"
                value={form.email}
                onChange={this.handleEmailChange}
                onBlur={this.handleEmailBlur}
              />
              {errors.email.length > 0 && (
                <S.ErrorWrapper>{errors.email}</S.ErrorWrapper>
              )}
            </label>
          </S.InputWrapper>
          <S.InputWrapper>
            <label>
              <S.InputLabel>Datacenter</S.InputLabel>
              <Select
                name="datacenter"
                options={form.datacenters}
                isLoading={datacenterLoading}
                onChange={name => this.selectDatacenter(name)}
                style={{ marginTop: '10px' }}
              />
            </label>
          </S.InputWrapper>
          {Array.isArray(form.rackgroups) && (
            <S.InputWrapper>
              <label>
                <S.InputLabel>Room</S.InputLabel>
                <Select
                  name="room"
                  options={form.rackgroups}
                  isLoading={rackGroupLoading}
                  loadingMessage={'Loading...'}
                  onChange={group => this.selectRackGroup(group)}
                  style={{ marginTop: '10px' }}
                />
              </label>
            </S.InputWrapper>
          )}
          <S.InputWrapper>
            <S.InputLabel
              style={{
                width: '100%',
                display: 'inline-block',
                textAlign: 'center',
                fontSize: '2rem',
                marginTop: '10px'
              }}
            >
              Racks
            </S.InputLabel>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <S.RacksCountWrapper>
                <S.InputLabel>Available</S.InputLabel>
                <S.InputField
                  disabled
                  name="racks"
                  className="available"
                  value={form.availableRacks}
                />
              </S.RacksCountWrapper>

              <S.RacksCountWrapper>
                <S.InputLabel>Requested</S.InputLabel>
                <S.RequestedInputWrapper>
                  <S.InputField
                    name="racksRequested"
                    id="racksRequested"
                    type="number"
                    min="0"
                    className="requested"
                    max={form.availableRacks}
                    value={form.requestedRacks}
                    onChange={this.handleRequestedRacksChange}
                  />
                  <S.RequestedInputBtnWrapper>
                    <S.RequestedBtn onClick={this.handleIncrementRequested}>
                      <Plus color="#fff" size={20} />
                    </S.RequestedBtn>
                    <S.RequestedBtn onClick={this.handleDecrementRequested}>
                      <Minus color="#fff" size={20} />
                    </S.RequestedBtn>
                  </S.RequestedInputBtnWrapper>
                </S.RequestedInputWrapper>
              </S.RacksCountWrapper>
            </div>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.SubmitBtn type="submit">Submit</S.SubmitBtn>
          </S.InputWrapper>
        </S.RacksForm>
      </S.RacksWrapper>
    )
  }
}

export default Racks
