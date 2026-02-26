const express=require('express');
const dotenv=require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();
const app=express(); 
app.use(express.json());
app.use('/api', uploadRoutes);

app.use('/api/upload', require('./routes/uploadRoutes'));

app.get('/', (req, res) => {
  res.send('File Upload API is Running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});