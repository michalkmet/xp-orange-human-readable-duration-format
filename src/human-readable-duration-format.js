function formatDuration(ts) {
  console.log('Timestamp: ', ts);

  const timeStrings = ['week', 'day', 'hour', 'minute', 'second'];

  let seconds = ts % 60;
  let minutes = Math.floor(ts / 60) % 60;
  let hours = Math.floor(ts / 3600) % 24;
  let day = Math.floor(ts / 86400) % 7;
  let week = Math.floor(ts / 604800) % 604800;
  console.log('seconds: ', seconds);
  console.log('minutes: ', minutes);
  console.log('hours: ', hours);
  console.log('day: ', day);
  console.log('week: ', week);

  const values = [week, day, hours, minutes, seconds];
  console.log('values : ', values);

  if (ts === 0) {
    return 'now';
  }

  let result = [];

  for (let i in values) {
    let value = values[i];
    console.log('value: ', value);
    if (value > 0) {
      result.push(`${value} ${timeStrings[i]}${oneOrMoreString(value)}`);
    }
  }

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
    str = addCommaOrAnd(str, i, res);
    str += item;
  }
  return str;
}

function addCommaOrAnd(str, i, res) {
  if (str != '' && Number(i) + 1 == res.length) {
    str += ' and ';
  } else if (i != 0) {
    str += ', ';
  }
  return str;
}

module.exports = formatDuration;
