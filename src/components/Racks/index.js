import React from 'react'
import Select from 'react-select'
import fetch from 'isomorphic-unfetch'
import * as S from './styled.js'

class Racks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rackGroupLoading: false,
      datacenterLoading: false,
      datacenters: props.datacenters,
      rackgroups: [],
      availableracks: 0
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
          rackgroups: groups,
          datacenterLoading: false
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
          availableRacks: data.count,
          rackGroupLoading: false
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    const {
      rackgroups,
      availableRacks,
      datacenters,
      datacenterLoading,
      rackGroupLoading
    } = this.state
    return (
      <S.RacksWrapper>
        <S.InputHeader>Racks</S.InputHeader>
        <form data-netlify="true">
          <S.InputWrapper>
            <label>
              Full Name:
              <S.InputField field="name" />
            </label>
          </S.InputWrapper>
          <S.InputWrapper>
            <label>
              Email:
              <S.InputField field="email" />
            </label>
          </S.InputWrapper>
          <S.InputWrapper>
            <label>
              Datacenter:{' '}
              <Select
                field="datacenter"
                options={datacenters}
                isLoading={datacenterLoading}
                onChange={name => this.selectDatacenter(name)}
              />
            </label>
          </S.InputWrapper>
          {Array.isArray(rackgroups) && (
            <S.InputWrapper>
              <label>
                Room:{' '}
                <Select
                  field="room"
                  options={rackgroups}
                  isLoading={rackGroupLoading}
                  loadingMessage={'Loading...'}
                  onChange={group => this.selectRackGroup(group)}
                />
              </label>
            </S.InputWrapper>
          )}
          <S.InputWrapper>
            <label>
              Racks Available:{' '}
              <S.InputField disabled field="racks" value={availableRacks} />
            </label>
          </S.InputWrapper>

          <S.InputWrapper>
            <label>
              Racks Requested: <S.InputField field="racksRequested" />
            </label>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.SubmitBtn type="submit">Submit</S.SubmitBtn>
          </S.InputWrapper>
        </form>
      </S.RacksWrapper>
    )
  }
}

export default Racks
