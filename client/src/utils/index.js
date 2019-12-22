import moment from 'moment';

/**
 *  Truncates the string.
 * @private
 * @param {string} string - The string to truncate.
 * @param {number} length - The length of truncated string.
 * @returns {string} Returns truncated `string`.
 */

export const truncate = (string, length) => {
  if (typeof length !== 'number' || typeof string !== 'string') return string;
  if (string.length <= length) return string;
  if (length <= 3) return `${string.slice(0, length)}...`;
  return `${string.slice(0, length - 3)}...`;
};

/**
 *  Convert Unix time to formatted date.
 * @private
 * @param {number} unixTimestamp - The time in unix format
 * @returns {string} Returns formatted date.
 */

export const unixToDate = (unixTimestamp, format) => moment
  .unix(unixTimestamp)
  .format(format)
  .toString();

/**
 *  Get days left from current day.
 * @private
 * @param {number} unixTimestamp - The time in unix format.
 * @returns {number} Returns days left from today.
 */

export const unixToDaysLeft = (unixTimestamp) => {
  const eventDate = moment.unix(unixTimestamp);
  const todayDate = moment().endOf('day');
  return eventDate.diff(todayDate, 'day');
};

/**
 *  Get formatted days conditions (left, ahead, yesterday, today, tomorrow).
 * @private
 * @param {number} daysLeft - The number of days left.
 * @returns {string} Returns formatted days left.
 */

export const daysLeft = (unixTimestamp) => {
  const eventDate = moment.unix(unixTimestamp);
  const todayDayStart = moment().startOf('day');
  const todayDayEnd = moment().endOf('day').subtract(1, 'second');
  const yesterdayStart = moment().startOf('day').subtract(1, 'day');
  const yesterdayEnd = moment().endOf('day').subtract(1, 'day').subtract(1, 'second');
  const tomorrowStart = moment().startOf('day').add(1, 'day');
  const tomorrowEnd = moment().endOf('day').add(1, 'day').subtract(1, 'second');

  if (eventDate.diff(todayDayStart, 'second') >= 0
    && eventDate.diff(todayDayEnd, 'second') < 0) return 'Today';
  if (eventDate.diff(yesterdayStart, 'second') >= 0
    && eventDate.diff(yesterdayEnd, 'second') < 0) return 'Yesterday';
  if (eventDate.diff(tomorrowStart, 'second') >= 0
    && eventDate.diff(tomorrowEnd, 'second') < 0) return 'Tomorrow';

  const days = unixToDaysLeft(unixTimestamp);

  return (days > 0) ? `${days + 1} days ahead` : `${days * -1} days ago`;
};
