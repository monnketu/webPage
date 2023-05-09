import { BusinessFormOption } from "../../types/Option";

export default interface FormInterface {
  space: string;
  businessForm: BusinessFormOption;
  time: string;
  station: string;
  price: string;
}