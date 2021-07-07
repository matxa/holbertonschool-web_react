export function getFullYear() {
  const dateYear = new Date();
  return dateYear.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) return "Holberton School";
  return "Holberton School main dashboard";
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
