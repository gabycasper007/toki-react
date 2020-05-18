export const DEFAULT_DATE_FORMAT = 'dd/mm/yyyy';

export const formatDate = (date = new Date(), format = DEFAULT_DATE_FORMAT) => {
  date = ['number', 'string'].includes(typeof date) ? new Date(date) : date;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const theDate = date.getDate();

  const replacement = {
    yyyy: year,
    'yyyy,': `${year},`,
    mm: formatNumToStrWithZero(month),
    m: month,
    dd: formatNumToStrWithZero(theDate),
    d: theDate
  };

  const formatted = format
    .split(' ')
    .map((f) =>
      !f.includes('/')
        ? replacement[f]
        : f
            .split('/')
            .map((t) => replacement[t])
            .join('/')
    )
    .join(' ');

  return formatted;
};

export const formatNumToStrWithZero = (number) => {
  return number.toString().padStart(2, '0');
};
