const request = require('request')
const forecast = (x,y, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c1cf02c37536fe8f97c194af8e8f9c38&query='+ encodeURIComponent(x)+','+ encodeURIComponent(y)+'&units=f'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature)
        }
    })
}

module.exports = forecast