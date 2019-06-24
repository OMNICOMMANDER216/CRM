export default (value) => {
  if (value === 'name') return 'text';
  if (value === 'user' || value === 'status' || value === 'priority' || value === 'invoice') return 'select';
  if (value === 'user') return 'select';
  if (value === 'last_updated' || value === 'date') return 'date';
};
