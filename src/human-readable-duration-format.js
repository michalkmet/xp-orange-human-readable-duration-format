function formatDuration(ts) {
  // if (seconds === 1) {
  //   return '1 second';
  // } else if (seconds === 59) {
  //   return '59 seconds';
  // } else {
  //   return 'now';
  // }

  let seconds = ts % 60;
  let minutes = Math.floor(ts / 60);

  if (ts === 0) {
    return 'now';
  }

  let result = [];

  if (minutes === 1) {
    result.push(minutes + ' minute');
  }

  if (seconds === 1) {
    result.push(seconds + ' second');
  } else if (seconds < 60 && seconds > 1) {
    result.push(seconds + ' seconds');
  }

  console.log(minutes);
  console.log(seconds);
  console.log(result);

  let resultString = result[0];
  if (result.length > 1) {
    resultString += ' and ' + result[1];
  }
  return resultString;
}

module.exports = formatDuration;
