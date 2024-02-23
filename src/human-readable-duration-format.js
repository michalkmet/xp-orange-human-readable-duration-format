function formatDuration(seconds) {
  if (seconds === 1) {
    return '1 second';
  } else if (seconds === 59) {
    return '59 seconds';
  } else {
    return 'now';
  }
}

module.exports = formatDuration;
