import { BusinessFormOption } from "../../types/BusinessFormOption";

export interface Form {
  space: string;
  businessForm: BusinessFormOption;
  time: string;
  station: string;
  price: number;
}