const fetch = require('isomorphic-unfetch')
const { NETBOX_KEY } = process.env

const API_ENDPOINT = 'https://racks.newtelco.de/api/dcim/sites/'

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
    return
  } else if (event.httpMethod === 'GET') {
    fetch(`${API_ENDPOINT}?tag=forresale`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Token ${NETBOX_KEY}`,
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => response.json())
      .then(data => {
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
