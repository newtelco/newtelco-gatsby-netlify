const fetch = require('isomorphic-unfetch')
const { NETBOX_KEY } = process.env

const API_ENDPOINT = 'https://racks.newtelco.de/api/dcim/rack-groups/'

exports.handler = (event, context, callback) => {
  if (event.httpMethod === 'OPTIONS') {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify({ message: 'You can use CORS' })
    }
    callback(null, response)
  } else if (event.httpMethod === 'POST') {
    const params = JSON.parse(event.body)
    const datacenter = params.dc

    fetch(`${API_ENDPOINT}?site=${datacenter}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${NETBOX_KEY}`,
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => response.json())
      .then(data => {
        Array.isArray(data) && data.push(context)
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(data),
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
      })
      .catch(error => ({ statusCode: 422, body: String(error) }))
  }
}
