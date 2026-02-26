const express = require('express');
const dotenv = require('dotenv');
const apiLimiter = require('./middleware/rateLimiter');
const testRoutes = require('./routes/testRoutes');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', apiLimiter, testRoutes);

app.get('/', (req, res) => {
  res.send('API Rate Limiting System Running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
