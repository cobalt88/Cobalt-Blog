const AWS_URL = process.env.AWS_LAMBDA_ENDPOINT

export default async function GraphQL(req, res) {
  // console.log(req.body)
  const query = req.body
  try {
    const data = await fetch(AWS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    })

    const jsonData = await data.json()
    // console.log(jsonData)

    res.status(200).json(jsonData)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error getting data' })
  }
}
