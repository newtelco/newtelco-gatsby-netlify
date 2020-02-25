import React from 'react'

const Sites = props => {
  console.log(props)
  if (!props.sites) {
    return null
  }

  return (
    <div>
      {props.sites.map(data => {
        return <div>{data}</div>
      })}
    </div>
  )
}

export default Sites
