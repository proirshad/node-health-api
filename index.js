const express = require('express');
const app = express();
const PORT = process.env.PORT || 50000;

/* ROUTES */
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/predict', (req, res) => {
  res.json({ score: 0.75 });
});

app.get('/', (req, res) => {
  res.json({
    message: "API is running",
    endpoints: {
      health: "/health",
      predict: "/predict"
    }
  });
});

/* ✅ 404 HANDLER — ADD HERE */
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

/* SERVER START (only when run directly) */
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
