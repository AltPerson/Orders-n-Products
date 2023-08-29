export function getTime(fullTime?: boolean): string {
  const leadingZero = (num: number) => `0${num}`.slice(-2);
  const timeFormat = fullTime
    ? [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()]
    : [new Date().getHours(), new Date().getMinutes()];

  return timeFormat.map(leadingZero).join(':');
}
