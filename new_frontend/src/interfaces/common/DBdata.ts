export default interface DBdata {
  spaceID: number;                    // コワーキングスペースのID
  name: string;                       // 名前
  MeetingRoomCapacity: number;        // 会議室の収容人数
  aria: string;                       // 地域(東京の何区)
  address: string;                    // 住所
  station: string;                    // 最寄駅
  timeFromStation: number;            // 最寄駅からの時間
  startTime: string;                  // 営業開始時間
  endTime: string;                    // 営業終了時間
  characteristic: string;             // 特徴
  price: number;                      // 価格
  density: number;                    // 人口密度
  dropInFeePerDay: number;            // 1日ドロップインの料金
  dropInFeePerHour: number;           // 1時間あたりのドロップイン料金
  favorite: number;                   // お気に入り登録数
  imageName: string;                  // 写真の画像ファイル名
  isArea23: boolean;                  // 23区にあるかどうか
  isBattery: boolean;                 // コンセントがあるかどうか
  isBook: boolean;                    // 本があるかどうか
  isCafe: boolean;                    // カフェがあるかどうか
  isCall: boolean;                    // 電話があるかどうか
  isCorporateRegistration: boolean;   // 法人登記ができるどうか: BOOLEAN型 無:False 有:True
  isDropIn: boolean;                  // ドロップイン可能かどうか
  isEnhancedOptions: boolean;         // オプションの設備があるかどうか
  isFreeDrink: boolean;               // フリードリンクがあるかどうか
  isMeetingRoom: boolean;             // 会議室があるかどうか
  isNappingRoom: boolean;             // 仮眠室があるどうか
  isParking: boolean;                 // 駐車場があるかどうか
  isPrinterCopier: boolean;           // プリンターコピーがあるかどうか
  isReceivingMail: boolean;           // 郵便受け取りができるどうか
  jurisdiction: string;               // 管轄
  options: string;                    // 設備
  wifi: number;                       // wifiがあるかどうか
 }