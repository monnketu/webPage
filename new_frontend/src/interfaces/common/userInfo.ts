import { Form } from "../form/Form";
import Question from "./../state/question";
import userInfoInterface from "./userInfo";
import recommendInterface from './../state/recommend';

export default interface StateInterface {
  userInfo: userInfoInterface;
  formInfo: Form;
  questionInfo: Question;
  recommendInfo: recommendInterface;
}