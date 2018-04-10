const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Welcome")
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
})
