const ethUtil = require('ethereumjs-util')
const ethSignUtil = require('eth-sig-util')
const express = require('express')
const index = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
let port = process.env.HTTP_PORT

index.use(bodyParser.json({ type: 'application/*+json' }))

index.post('/ecrecover',jsonParser,
 (req, res) => {
   const msgBufferHex = ethUtil.bufferToHex(Buffer.from(req.body.nonce, 'utf8'));
   const address = ethSignUtil.recoverPersonalSignature({
     data: msgBufferHex,
     sig: req.body.signature,
   });
   res.send({"publicKey": address.toLowerCase()});
 }
)

if (!port){
    port=80
}
index.listen(port, () => console.log(`Example app listening on port ${port}!`))