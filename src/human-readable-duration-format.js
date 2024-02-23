function formatDuration(seconds) {
  // if (seconds === 1) {
  //   return '1 second';
  // } else if (seconds === 59) {
  //   return '59 seconds';
  // } else {
  //   return 'now';
  // }

  if (seconds === 0) {
    return 'now';
  }

  if (seconds === 1) {
    return seconds + ' second';
  }

  if (seconds < 60) {
    return seconds + ' seconds';
  }

  if (seconds === 60) {
    return seconds / 60 + ' minute';
  }
}

module.exports = formatDuration;
