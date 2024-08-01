export async function execute(event, context, cb) {
  return {
    statusCode: 200,
    response: {
      region: "argentina",
      utc: -3,
    },
  };
}
