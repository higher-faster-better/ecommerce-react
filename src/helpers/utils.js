export const displayDate = (timestamp) => {
  const date = new Date(timestamp);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
};

export const displayMoney = (n) => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  return format.format(n);
};

export const calculateTotal = (arr) => {
  if (!arr || arr.length === 0) return 0;

  const total = arr.reduce((acc, val) => acc + val, 0);
  
  return total.toFixed(2);
};

export const displayActionMessage = (msg, status = 'info') => {
  const div = document.createElement('div');
  const span = document.createElement('span');

  const statusClass = {
    info: 'toast-info',
    success: 'toast-success',
    error: 'toast-error'
  }[status] || 'toast-info';

  div.className = `toast ${statusClass}`;
  span.className = 'toast-msg';
  span.textContent = msg;
  div.appendChild(span);

  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    document.body.replaceChild(div, existingToast);
  } else {
    document.body.appendChild(div);
  }

  setTimeout(() => {
    try {
      document.body.removeChild(div);
    } catch (e) {
      console.error(e);
    }
  }, 3000);
};
