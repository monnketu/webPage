export interface  SpaceData {
  address: string; // 住所
  area: string; // 東京のどこか
  meetingRoomCapacity: number; // 会議室の定員
  density: number;
  dropinFeePerDay: number; // 1日あたりの利用料金
  dropinFeePerHour: number; // 1時間あたりの利用料金
  endTime: string;
  favorite: number; // お気に入りに登録しているユーザー数
  imageName: string;
  isArea23: boolean; // 東京23区にあるかどうか
  isBattery: boolean; // 充電可能か
  isBook: boolean; // 書籍がおいてあるか
  isCafe: boolean;
  isCall: boolean;
  isCorporateRegistration: boolean;
  isDropIn: boolean;
  isEnhancedOptions: string;
  isFreeDrink: boolean;
  isMeetingRoom: boolean;
  isNappingRoom: boolean;
  isParking: boolean;
  isPrinterCopier: boolean;
  isReceivingMail: boolean;
  jurisdiction: string;
  name: string;
  options: string;
  price: number;
  spaceID: number;
  startTime: string;
  station: string;
  timeFromStation: number;
  wifi: number;

}