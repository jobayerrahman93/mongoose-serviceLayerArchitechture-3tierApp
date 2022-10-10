const dotenv = require('dotenv');
const app = require('./index')
const port = process.env.PORT || 4000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})