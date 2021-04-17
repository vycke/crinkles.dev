const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function formatDate(iso) {
  const date = new Date(iso);

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}