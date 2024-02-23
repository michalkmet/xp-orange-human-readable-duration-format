function formatDuration(ts) {
  console.log('Timestamp: ', ts);

  let seconds = ts % 60;
  let minutes = Math.floor(ts / 60);

  if (ts === 0) {
    return 'now';
  }

  let result = [];

  // if (minutes === 1) {
  //   result.push(minutes + ' minute');
  // }

  // if (minutes > 1) {
  //   result.push(minutes + ' minutes');
  // }

  minutes === 1 ? result.push(minutes + ' minute') : result.push(minutes + ' minutes');

  if (seconds === 1) {
    result.push(seconds + ' second');
  } else if (seconds < 60 && seconds > 1) {
    result.push(seconds + ' seconds');
  }

  console.log('minutes: ', minutes);
  console.log('seconds: ', seconds);
  console.log('result: ', result);

  let resultString = result[0];
  if (result.length > 1) {
    resultString += ' and ' + result[1];
  }
  return resultString;
}

module.exports = formatDuration;
