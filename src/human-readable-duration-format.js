function formatDuration(ts) {
  const timeStrings = ['year', 'day', 'hour', 'minute', 'second'];

  let seconds = ts % 60;
  let minutes = Math.floor(ts / 60) % 60;
  let hours = Math.floor(ts / 3600) % 24;
  let day = Math.floor(ts / 86400) % 365;
  let year = Math.floor(ts / 31536000);

  const values = [year, day, hours, minutes, seconds];

  if (ts === 0) {
    return 'now';
  }

  return concatenateResult(addValuesToResult(values, timeStrings));
}

function addValuesToResult(values, timeStrings) {
  let result = [];
  for (let i in values) {
    let value = values[i];
    if (value > 0) {
      result.push(`${value} ${timeStrings[i]}${oneOrMoreString(value)}`);
    }
  }
  return result;
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
