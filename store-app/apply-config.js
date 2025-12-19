const fs = require('fs');

fs.writeFileSync(
  'dist/store-app/browser/config.json',
  JSON.stringify({
    apiBaseUrl: process.env.API_BASE_URL,
  }, null, 2)
);
