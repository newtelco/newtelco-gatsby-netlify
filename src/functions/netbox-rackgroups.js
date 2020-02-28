const fetch = require('isomorphic-unfetch')
const querystring = require('querystring')
const { NETBOX_KEY } = process.env

const API_ENDPOINT = 'https://racks.newtelco.de/api/dcim/rack-groups/'

exports.handler = (event, context, callback) => {
  console.log(context)
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
  } else if (event.httpMethod === 'POST') {
    const params = querystring.parse(event.body)
    const params2 = querystring.parse(JSON.parse(event.body))
    console.log('p', params)
    console.log('p2', params2)
    const datacenter = params.dc
    const datacenter2 = params2.dc
    console.log('d', datacenter)
    console.log('d2', datacenter2)

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
