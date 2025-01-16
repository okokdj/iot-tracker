export async function POST(request) {
  let data = null
  try {
    data = await request.json()
    // Process the webhook payload
    console.log(data)
    // save it in the db
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }
  return Response.json({ data })
}


