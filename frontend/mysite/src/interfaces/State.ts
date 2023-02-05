import FormInterface from "./form";
import userInfoInterface from "./userInfo";
export default interface StateInterface {
  userInfo: userInfoInterface;
  formInfo: FormInterface;
}