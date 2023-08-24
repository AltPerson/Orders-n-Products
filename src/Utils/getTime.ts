export function getTime(): string {
  const leadingZero = (num: number) => `0${num}`.slice(-2);
  return [new Date().getHours(), new Date().getMinutes()]
    .map(leadingZero)
    .join(':');
}
