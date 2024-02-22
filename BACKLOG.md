# Backlog

User Story 1: minutes
As a user, I want to see time duration for numbers lower than 3600

- ⚠ TODO UAT1.1 When I pass 0 then I want to see 'now'
- ⚠ TODO UAT1.2 When I pass 1 then I want to see '1 second'
- ⚠ TODO UAT1.3 When I pass 59 then I want to see '59 seconds'
- ⚠ TODO UAT1.4 When I pass 60 then I want to see '1 minute'
- ⚠ TODO UAT1.5 When I pass 61 then I want to see '1 minute and 1 second'
- ⚠ TODO UAT1.6 When I pass 62 then I want to see '1 minute and 2 seconds'
- ⚠ TODO UAT1.7 When I pass 120 then I want to see '2 minutes'
- ⚠ TODO UAT1.8 When I pass 183 then I want to see '3 minutes and 3 seconds'

Example 9:
formatDuration(3600) -> '1 hour'

Example 10:
formatDuration(7200) -> '2 hours'

Example 11:
formatDuration(3660) -> '1 hour and 1 minute'

Example 12:
formatDuration(3661) -> '1 hour, 1 minute and 1 second'

Example 13:
formatDuration(3669) -> '1 hour, 1 minute and 9 seconds'

Example 16:
formatDuration(3720) -> '1 hour and 2 minutes'

Example 17:
formatDuration(3721) -> '1 hour, 2 minutes and 1 second'

Example 18:
formatDuration(10980) -> '3 hours and 3 minutes'

Example 19:
formatDuration(14648) -> '4 hours, 4 minutes and 8 seconds'

Example 20:
formatDuration(86400) -> '1 day'
