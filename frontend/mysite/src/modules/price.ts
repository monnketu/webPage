export const dispPrice = (type: option, price: number) => {
  switch (type) {
    case 'all':
      return `${price.toLocaleString()}円/月`;
    case 'monthly':
      return `${price.toLocaleString()}円/月`;
    case 'dropIn_1day':
      return `${price.toLocaleString()}円/日`;
    case 'dropIn_1hour':
      return `${price.toLocaleString()}円/時間`;
    default:
      throw new Error('表示する金額が不正です');
  }
}