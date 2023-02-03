interface LINE_API_response {
  iss: string; // IDトークンの生成URL
  sub: string; // IDトークンの対象ユーザーID
  aud: string; // チャンネルID(数字の文字列)
  exp: number; // IDトークンの有効期限(UNIXタイム)
  iat: number; // IDトークンの生成時間(UNIXタイム)
  nonce: string; // 認可URLに設定したnonceの値
  amr: string[]; // ユーザーが使用した認証方法のリスト
  name: string; // ユーザーの表示名
  picture: string; // ユーザープロフィールの画像URL
}

export default LINE_API_response;