/*
  1) Create out data (DONE)
  2) Create an endpoint | get the data and then send it to us

  Method: GET | POST | PATCH/PUT | DELETE
  REQUEST: ip address, any information, cookies, what device
  RESPONSE: cookies, data, 401 ( your not allowed to access ) 404 (dont exists)
*/
export default function handler( req, res) {
  // the request will send the body in as a string so it needs to be parsed to JSON
  const body = JSON.parse(req.body);
  console.log(body);

  res.status(200).json(
    {
      "status": "okay"
    })
}
