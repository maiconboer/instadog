export function formatDate(date) {

  const dateBrazil = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' });
  let newDate = new Date(date)
  let options = dateBrazil.resolvedOptions()

  return newDate.toLocaleDateString('pt-BR', options)
}