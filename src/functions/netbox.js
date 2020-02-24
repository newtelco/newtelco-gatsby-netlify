const fetch = require('node-fetch')
const { NETBOX_KEY } = process.env

const API_ENDPOINT = 'https://racks.newtelco.de/api/dcim/sites/'

exports.handler = async (event, context) => {
  const resp = fetch(API_ENDPOINT, {
    headers: {
      Accept: 'application/json',
      Authorization: `Token ${NETBOX_KEY}`,
    },
  })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data,
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))

  console.log(resp)

  return resp
}
