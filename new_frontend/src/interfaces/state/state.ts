import { Form } from "../form/Form";
import Question from "./question";
import recommendInterface from './recommend';

interface UserInfo {
  userID: string;
  profileImage: string;
  isLogined: boolean;
}

interface UserState {
  userInfo: UserInfo;
  formInfo: Form;
  questionInfo: Question;
  recommendInfo: recommendInterface;
}

export default UserState;