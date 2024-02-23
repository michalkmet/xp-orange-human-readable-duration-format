function formatDuration(seconds) {
  if (seconds === 1) {
    return '1 second';
  } else {
    return 'now';
  }
}

module.exports = formatDuration;
