const express = require('express');
const app = express();
const PORT = process.env.PORT || 50000;

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString(), uptime: process.uptime() });
});

app.get('/predict', (req, res) => {
    res.json({ score: 0.75 });
})

app.get('/', (req, res) => {
  res.json({
    message: "API is running",
    endpoints: {
      health: "/health",
      predict: "/predict"
    }
});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
