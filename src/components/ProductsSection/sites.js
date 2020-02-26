import React from 'react'

const Sites = props => {
  return (
    <div>
      {props.sites &&
        props.sites.map(data => {
          return <div>{data}</div>
        })}
    </div>
  )
}

export default Sites
