import { APIGatewayEvent, Context, Callback, APIGatewayProxyResult } from 'aws-lambda'

export async function run(event: APIGatewayEvent, context: Context, cb: Callback): APIGatewayProxyResult {
  const { 'x-end-user-location': xEndUserLocation, 'x-end-user-time-zone': xEndUserTimeZone } = event.headers

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        region: xEndUserLocation,
        utc: xEndUserTimeZone,
      },
    }),
  }
}
