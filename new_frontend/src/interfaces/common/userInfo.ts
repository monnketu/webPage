import FormInterface from "../form/Form";
import Question from "./question";
import userInfoInterface from "./userInfo";
import recommendInterface from './recommend';

export default interface StateInterface {
  userInfo: userInfoInterface;
  formInfo: FormInterface;
  questionInfo: Question;
  recommendInfo: recommendInterface;
}