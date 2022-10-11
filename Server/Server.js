require('dotenv').config();
const mongoose = require('mongoose');
const app = require('../index');
const port = process.env.PORT || 4000;




mongoose.connect(process.env.LOCAL_DB).then(()=>{
  console.log('Mongoose is connected');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});