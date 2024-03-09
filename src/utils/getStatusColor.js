export const getStatusColor = (status) => {
  switch (status) {
    case 'Normal':
      return '#B6FFC1';
    case 'Moderado':
      return '#FFF7AE';
    case 'Alterado':
      return '#F8DEBD';
    case 'Crítico':
      return '#CA6B6E'
    default:
      break;
  }
}