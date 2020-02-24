const fetch = require('node-fetch')
const { NETBOX_KEY } = process.env

const API_ENDPOINT = 'https://racks.newtelco.de/api/dcim/sites/'

exports.handler = (event, context, callback) => {
  fetch(API_ENDPOINT, {
    headers: {
      Accept: 'application/json',
      Authorization: `Token ${NETBOX_KEY}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data),
      })
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
