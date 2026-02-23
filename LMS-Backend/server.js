const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use('/api/interns', require('./routes/internRoutes'));

app.get('/', (req, res) => {
  res.send('IMS Backend is Running...');
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
