// import {option}
import { BusinessFormOption } from "../types/Option";
import { businessForms } from "../consts/searchOption";
const dispPrice = (form: BusinessFormOption, price: number) => {
  switch (form) {
    case businessForms.all:
      return `${price.toLocaleString()}円/月`;
    case businessForms.monthly:
      return `${price.toLocaleString()}円/月`;
    case businessForms.dropin_1day:
      return `${price.toLocaleString()}円/日`;
    case businessForms.dropin_1hour:
      return `${price.toLocaleString()}円/時間`;
    default:
      throw new Error('表示する金額が不正です');
  }
}

export default dispPrice;