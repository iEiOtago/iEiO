import request from 'superagent'

module.exports = () => {
  console.log("GOT HERE");
  request
  .post('https://script.google.com/macros/s/AKfycbwuxBA9kJlHrzI8I97yCHv0O7z7BXyfkcxp3LGWtQa4a5xEhsH6/exec')
  .send({data: "lemon"})
  .set('Accept', 'application/json')
  .end((err, res) => {
    console.log(res)
  })
}
