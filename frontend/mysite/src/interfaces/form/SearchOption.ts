// import { businessForm } from '../../consts/searchOption';
import { BusinessFormOption } from "../../types/Option"

export default interface BusinessForm {
  all: BusinessFormOption,
  monthly: BusinessFormOption,
  dropin_1day: BusinessFormOption,
  dropin_1hour: BusinessFormOption,
}