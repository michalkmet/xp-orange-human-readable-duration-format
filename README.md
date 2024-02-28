# Human readable duration format

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

- For seconds = 62, your function should return
  "1 minute and 2 seconds"
- For seconds = 3662, your function should return
  "1 hour, 1 minute and 2 seconds"
  For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

# Examples:

Example 1:
formatDuration(0) -> 'now'

Example 2:
formatDuration(1) -> '1 second'

Example 3:
formatDuration(59) -> '59 seconds'

Example 4:
formatDuration(60) -> '1 minute'

Example 5:
formatDuration(61) -> '1 minute and 1 second'

Example 6:
formatDuration(62) -> '1 minute and 2 seconds'

Example 7:
formatDuration(120) -> '2 minutes'

Example 8:
formatDuration(183) -> '3 minutes and 3 seconds'

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

Example 21:
formatDuration(90000) -> '1 day and 1 hour'

Example 22:
formatDuration(90060) -> '1 day, 1 hour and 1 minute'

Example 23:
formatDuration(90061) -> '1 day, 1 hour, 1 minute and 1 second'

Example 24:
formatDuration(172800) -> '2 days'

Example 25:
formatDuration(180000) -> '2 days and 2 hours'

Example 26:
formatDuration(180120) -> '2 days, 2 hours and 2 minutes'

Example 27:
formatDuration(180123) -> '2 days, 2 hours, 2 minutes and 3 seconds'

Example 20:
formatDuration(604800) -> '7 days'

Example 21:
formatDuration(694861) -> '8 days, 1 hour, 1 minute and 1 second'

Example 22:
formatDuration(1476245) -> '17 days, 2 hours, 4 minutes and 5 seconds'

Example 23:
formatDuration(2419200) -> '28 days'

Example 24:
formatDuration(3114061) -> '36 days, 1 hour, 1 minute and 1 second'

Example 25:
formatDuration(8733845) -> '101 days, 2 hours, 4 minutes and 5 seconds'

Example 26:
formatDuration(31536000) -> '1 year'

Example 26:
formatDuration(34650061) -> '1 year, 36 days, 1 hour, 1 minute and 1 second'

Example 27:
formatDuration(66794645) -> '2 years, 43 days, 2 hours, 4 minutes and 5 seconds'
