const currencyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

export function vndFormatter(raw) {
  return currencyFormatter.format(raw);
}

export function timestampFormatter(ts) {
  const date = new Date(ts);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatDecimal(number, decimalDigit = 2) {
  return Number(number).toFixed(decimalDigit);
}

export function numberFormatter(number) {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return 0;
}

export function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
