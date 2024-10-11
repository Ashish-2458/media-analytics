const express = require('express');
const axios = require('axios');
const router = express.Router();

// Example route for fetching Twitter data
router.get('/twitter', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.twitter.com/2/tweets?query=your-query`,
      { headers: { Authorization: `Bearer ${process.env.TWITTER_API_KEY}` } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
