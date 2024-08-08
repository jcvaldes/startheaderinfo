import { APIGatewayEvent, Context, Callback, APIGatewayProxyResult } from 'aws-lambda'
// Lista de países válidos
const validateCountries = [
  'argentina',
  'brasil',
  'chile',
  'colombia',
  'costarica',
  'dominicana',
  'ecuador',
  'guatemala',
  'honduras',
  'mexico',
  'nicaragua',
  'panama',
]

// Función para validar el nombre del país
const countryValidate = (country) => {
  return validateCountries.includes(country.toLowerCase())
}

export async function run(event: APIGatewayEvent, context: Context, cb: Callback): APIGatewayProxyResult {
  const { 'x-end-user-location': xEndUserLocation, 'x-end-user-time-zone': xEndUserTimeZone } = event.headers

  if (countryValidate(xEndUserLocation)) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          region: xEndUserLocation,
          utc: xEndUserTimeZone,
        },
      }),
    }
  } else {
    return { statusCode: 404, body: JSON.stringify({ msg: `El país ${xEndUserLocation} no está permitido` }) }
  }
}
