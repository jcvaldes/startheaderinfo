export async function run(event, context, cb) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      region: "chile",
      utc: -3,
    }),
  };
}
