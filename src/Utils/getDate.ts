export function getDate(manualDate?: string): string {
  const date = new Date(manualDate ? manualDate : new Date()).toLocaleString(
    'uk-UA',
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    },
  );
  const arrayDate = date.split(' ');
  return `${arrayDate[0]} ${arrayDate[1]} ${arrayDate[2]}`;
}
