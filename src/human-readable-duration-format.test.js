const formatDuration = require('./human-readable-duration-format');

describe('User Story 1: minutes', () => {
  it("UAT1.1 When I pass 0 then I want to see 'now'", () => {
    expect(formatDuration(0)).toBe('now');
  });

  it("UAT1.2 When I pass 1 then I want to see '1 second'", () => {
    expect(formatDuration(1)).toBe('1 second');
  });

  it("UAT1.3 When I pass 59 then I want to see '59 seconds'", () => {
    expect(formatDuration(59)).toBe('59 seconds');
  });

  it("UAT1.4 When I pass 60 then I want to see '1 minute'", () => {
    expect(formatDuration(60)).toBe('1 minute');
  });

  it("UAT1.5 When I pass 61 then I want to see '1 minute and 1 second'", () => {
    expect(formatDuration(61)).toBe('1 minute and 1 second');
  });

  it("UAT1.6 When I pass 62 then I want to see '1 minute and 2 seconds'", () => {
    expect(formatDuration(62)).toBe('1 minute and 2 seconds');
  });

  it("UAT1.7 When I pass 120 then I want to see '2 minutes'", () => {
    expect(formatDuration(120)).toBe('2 minutes');
  });

  it("UAT1.8 When I pass 183 then I want to see '3 minutes and 3 seconds'", () => {
    expect(formatDuration(183)).toBe('3 minutes and 3 seconds');
  });
});

describe('User Story 2: hours', () => {
  it("UAT2.1 When I pass 3600 then I want to see '1 hour'", () => {
    expect(formatDuration(3600)).toBe('1 hour');
  });
  it("UAT2.2 When I pass 7200 then I want to see '2 hours'", () => {
    expect(formatDuration(7200)).toBe('2 hours');
  });
  it("UAT2.3 When I pass 3660 then I want to see '1 hour and 1 minute'", () => {
    expect(formatDuration(3660)).toBe('1 hour and 1 minute');
  });
  it("UAT2.4 When I pass 3661 then I want to see '1 hour, 1 minute and 1 second'", () => {
    expect(formatDuration(3661)).toBe('1 hour, 1 minute and 1 second');
  });
  it("UAT2.5 When I pass 3669 then I want to see '1 hour, 1 minute and 9 seconds'", () => {
    expect(formatDuration(3669)).toBe('1 hour, 1 minute and 9 seconds');
  });
  it("UAT2.6 When I pass 3720 then I want to see '1 hour and 2 minutes'", () => {
    expect(formatDuration(3720)).toBe('1 hour and 2 minutes');
  });
  it("UAT2.7 When I pass 3721 then I want to see '1 hour, 2 minutes and 1 second'", () => {
    expect(formatDuration(3721)).toBe('1 hour, 2 minutes and 1 second');
  });
  it("UAT2.8 When I pass 10980 then I want to see '3 hours and 3 minutes'", () => {
    expect(formatDuration(10980)).toBe('3 hours and 3 minutes');
  });
  it("UAT2.9 When I pass 14648 then I want to see '4 hours, 4 minutes and 8 seconds'", () => {
    expect(formatDuration(14648)).toBe('4 hours, 4 minutes and 8 seconds');
  });
});

describe('User Story 3: days', () => {
  it("UAT3.1 When I pass 86400 then I want to see '1 day'", () => {
    expect(formatDuration(86400)).toBe('1 day');
  });
  it("UAT3.2 When I pass 90000 then I want to see '1 day and 1 hour'", () => {
    expect(formatDuration(90000)).toBe('1 day and 1 hour');
  });
  it("UAT3.3 When I pass 90060 then I want to see '1 day, 1 hour and 1 minute'", () => {
    expect(formatDuration(90060)).toBe('1 day, 1 hour and 1 minute');
  });
  it("UAT3.4 When I pass 90061 then I want to see '1 day, 1 hour, 1 minute and 1 second'", () => {
    expect(formatDuration(90061)).toBe('1 day, 1 hour, 1 minute and 1 second');
  });
  it("UAT3.5 When I pass 172800 then I want to see '2 days'", () => {
    expect(formatDuration(172800)).toBe('2 days');
  });
  it("UAT3.6 When I pass 180000 then I want to see '2 days and 2 hours'", () => {
    expect(formatDuration(180000)).toBe('2 days and 2 hours');
  });
  it("UAT3.7 When I pass 180120 then I want to see '2 days, 2 hours and 2 minutes'", () => {
    expect(formatDuration(180120)).toBe('2 days, 2 hours and 2 minutes');
  });
  it("UAT3.8 When I pass 180123 then I want to see '2 days, 2 hours, 2 minutes and 3 seconds'", () => {
    expect(formatDuration(180123)).toBe('2 days, 2 hours, 2 minutes and 3 seconds');
  });
});

describe('User Story 4: weeks', () => {
  it("UAT4.1 When I pass 604800 then I want to see '1 week'", () => {
    expect(formatDuration(604800)).toBe('1 week');
  });
  it("UAT4.2 When I pass 694861 then I want to see '1 week, 1 day, 1 hour, 1 minute and 1 second'", () => {
    expect(formatDuration(694861)).toBe('1 week, 1 day, 1 hour, 1 minute and 1 second');
  });
  it("UAT4.3 When I pass 1476245 then I want to see '2 weeks, 3 days, 2 hours, 4 minutes and 5 seconds'", () => {
    expect(formatDuration(1476245)).toBe('2 weeks, 3 days, 2 hours, 4 minutes and 5 seconds');
  });
});

describe('User Story 5: month', () => {
  it("UAT5.1 When I pass 2419200 then I want to see '1 month'", () => {
    expect(formatDuration(2419200)).toBe('1 month');
  });
});
