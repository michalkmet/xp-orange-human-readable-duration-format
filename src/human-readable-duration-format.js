function formatDuration(ts) {
  console.log('Timestamp: ', ts);

  const timeStrings = ['minute', 'second'];

  let seconds = ts % 60;
  let minutes = Math.floor(ts / 60);

  const values = [minutes, seconds];

  if (ts === 0) {
    return 'now';
  }

  let result = [];

  for (let i in values) {
    let value = values[i];
    if (value > 0) {
      result.push(`${value} ${timeStrings[i]}${oneOrMoreString(value)}`);
    }
  }

  console.log('minutes: ', minutes);
  console.log('seconds: ', seconds);
  console.log('result: ', result);

  return concatenateResult(result);
}

function oneOrMoreString(i) {
  return i > 1 ? 's' : '';
}

function concatenateResult(res) {
  let str = '';
  for (let i in res) {
    let item = res[i];
    if (str != '' && i > 0) {
      str += ' and ';
    }
    str += item;
  }
  return str;
}

module.exports = formatDuration;
