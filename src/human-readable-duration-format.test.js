const formatDuration = require('./human-readable-duration-format');

describe('As a user, I want to see time duration for numbers lower than 3600', () => {
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

describe('As a user, I want to see time duration for numbers higher than 3600', () => {
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
});
