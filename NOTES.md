# Notes

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:

- ✅ DONE Initial refactor
- ✅ DONE Examples
- 🚧 IN PROGRESS User stories + uats

Pomodoro 2:
Navigator Michal Driver Anna

User Story 1: minutes
As a user, I want to see time duration for numbers lower than 3600

- ✅ DONE UAT1.1 When I pass 0 then I want to see 'now'
- ✅ DONE UAT1.2 When I pass 1 then I want to see '1 second'
- ✅ DONE UAT1.3 When I pass 59 then I want to see '59 seconds'
- ✅ DONE UAT1.4 When I pass 60 then I want to see '1 minute'

Pomodoro 3:
Aljosa navigator Martin Driver

- ✅ DONE UAT1.5 When I pass 61 then I want to see '1 minute and 1 second'

Pomodoro 4:
Aljosa Driver Miso Navigator

- ✅ DONE UAT1.6 When I pass 62 then I want to see '1 minute and 2 seconds'
- ✅ DONE UAT1.7 When I pass 120 then I want to see '2 minutes'
- ✅ DONE UAT1.8 When I pass 183 then I want to see '3 minutes and 3 seconds'

Pomodoro 5:
Aljosa Navigator Martin Driver

- ✅ DONE Refactor

Pomodoro 6:
Michal

- ✅ DONE new user stories
- ✅ DONE UAT2.1 When I pass 3600 then I want to see '1 hour'
- ✅ DONE UAT2.2 When I pass 7200 then I want to see '2 hours'

Pomodoro 7:

- 🚧 IN PROGRESS
- ✅ DONE UAT2.3 When I pass 3660 then I want to see '1 hour and 1 minute'
- ✅ DONE UAT2.4 When I pass 3661 then I want to see '1 hour, 1 minute and 1 second'
- ✅ DONE UAT2.5 When I pass 3669 then I want to see '1 hour, 1 minute and 9 seconds'
- ✅ DONE UAT2.6 When I pass 3720 then I want to see '1 hour and 2 minutes'
- ✅ DONE UAT2.7 When I pass 3721 then I want to see '1 hour, 2 minutes and 1 second'
- ✅ DONE UAT2.8 When I pass 10980 then I want to see '3 hours and 3 minutes'
- ✅ DONE UAT2.9 When I pass 14648 then I want to see '4 hours, 4 minutes and 8 seconds'
- ✅ DONE new examples

Pomodoro 8:

- 🚧 IN PROGRESS User Story 3: days
  As a user, I want to see time duration for numbers higher than 86400

- ✅ DONE UAT3.1 When I pass 86400 then I want to see '1 day'
- ✅ DONE UAT3.2 When I pass 90000 then I want to see '1 day and 1 hour'
- ✅ DONE UAT3.3 When I pass 90060 then I want to see '1 day, 1 hour and 1 minute'
- ✅ DONE UAT3.4 When I pass 90061 then I want to see '1 day, 1 hour, 1 minute and 1 second'
- ✅ DONE UAT3.5 When I pass 172800 then I want to see '2 days'
- ✅ DONE UAT3.6 When I pass 180000 then I want to see '2 days and 2 hours'
- ✅ DONE UAT3.7 When I pass 180120 then I want to see '2 days, 2 hours and 2 minutes'
- ✅ DONE UAT3.8 When I pass 180123 then I want to see '2 days, 2 hours, 2 minutes and 3 seconds'
- ✅ DONE examples + uats

- 🚧 IN PROGRESS User Story 4: weeks
  As a user, I want to see time duration for numbers higher than 604800

- 🚧 IN PROGRESS UAT4.1 When I pass 604800 then I want to see '1 week'

Pomodoro 9:

- ✅ DONE UAT4.1 When I pass 604800 then I want to see '1 week'
- ✅ DONE UAT4.2 When I pass 694861 then I want to see '1 week, 1 day, 1 hour, 1 minute and 1 second'
- ✅ DONE UAT4.3 When I pass 1476245 then I want to see '2 weeks, 3 days, 2 hours, 4 minutes and 5 seconds'
- ✅ DONE examples + uats
-

- 🚧 IN PROGRESS User Story 5: month
  As a user, I want to see time duration for numbers higher than 2419200

- ✅ DONE UAT5.1 When I pass 2419200 then I want to see '1 month'
- ✅ DONE UAT5.2 When I pass 3114061 then I want to see '1 month, 1 week, 1 day, 1 hour, 1 minute and 1 second'
- ✅ DONE UAT5.3 When I pass 8733845 then I want to see '3 months, 2 weeks, 3 days, 2 hours, 4 minutes and 5 seconds'
- ✅ DONE examples + uats
-
- 🚧 IN PROGRESS User Story 6: years
  As a user, I want to see time duration for numbers higher than 29030400

- ✅ DONE UAT6.1 When I pass 29030400 then I want to see '1 year'
- ✅ DONE UAT6.2 When I pass 32144461 then I want to see '1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute and 1 second'
- ✅ DONE UAT6.3 When I pass 66794645 then I want to see '2 years, 3 months, 2 weeks, 3 days, 2 hours, 4 minutes and 5 seconds'

- ✅ DONE Refactor

Pomodoro 10:

- ✅ DONE remove months and weeks
- ✅ DONE update tests
- ✅ DONE UAT4.1 When I pass 604800 then I want to see '7 days'
- ✅ DONE UAT4.2 When I pass 694861 then I want to see '8 days, 1 hour, 1 minute and 1 second'
- ✅ DONE UAT4.3 When I pass 1476245 then I want to see '17 days, 2 hours, 4 minutes and 5 seconds'
- ✅ DONE UAT5.1 When I pass 2419200 then I want to see '28 days'
- ✅ DONE UAT5.2 When I pass 3114061 then I want to see '36 days, 1 hour, 1 minute and 1 second'
- ✅ DONE UAT5.3 When I pass 8733845 then I want to see '101 days, 2 hours, 4 minutes and 5 seconds'

Pomodoro 11:

- ✅ DONE UAT6.1 When I pass 31536000 then I want to see '1 year'
- ⚠ TODO UAT6.2 When I pass 32144461 then I want to see '1 year, 36 days, 1 hour, 1 minute and 1 second'
- ⚠ TODO UAT6.3 When I pass 15731080 then I want to see '182 days, 1 hour, 44 minutes and 40 seconds'
