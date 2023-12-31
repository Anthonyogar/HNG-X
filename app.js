const express = require('express');
const app = express();
const port = 8080;

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name; // Correct variable name
  const track = req.query.track;

  if (!slackName || !track) {
    return res.status(400).json({ error: 'slack_name and track are required parameters' });
  }

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const now = new Date();
  const currentUtcTime = new Date(now.getTime() + 2 * 60000).toISOString();

  const githubFileUrl = 'https://github.com/Anthonyogar/HNG-X/blob/main/app.js'; // Replace with your GitHub file URL
  const githubRepoUrl = 'https://github.com/Anthonyogar/HNG-X'; // Replace with your GitHub repo URL

  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUtcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
