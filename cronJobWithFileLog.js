const cron = require('node-cron');
const fs = require('fs');

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  const logMessage = `Log entry at ${new Date().toISOString()}\n`;

  // Append the log message to a file (create the file if it doesn't exist)
  fs.appendFile('cronLogs.txt', logMessage, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Log entry added!');
    }
  });
});
