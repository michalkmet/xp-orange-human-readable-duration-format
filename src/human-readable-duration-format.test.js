const formatDuration = require('./human-readable-duration-format');

describe('As a user, I want to see time duration for numbers lower than 3600', () => {
  it("UAT1.1 When I pass 0 then I want to see 'now'", () => {
    expect(formatDuration()).toBe('now');
  });

  it("UAT1.2 When I pass 1 then I want to see '1 second'", () => {
    expect(formatDuration(1)).toBe('1 second');
  });
});
