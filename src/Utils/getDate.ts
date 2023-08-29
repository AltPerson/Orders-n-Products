export function getDate(manualDate?: string, eng?: boolean): string {
  const date = new Date(manualDate ? manualDate : new Date()).toLocaleString(
    eng ? 'en-GB' : 'ua-UK',
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    },
  );
  const arrayDate = date.split(' ');
  return `${arrayDate[0]} ${arrayDate[1]} ${arrayDate[2]}`;
}
