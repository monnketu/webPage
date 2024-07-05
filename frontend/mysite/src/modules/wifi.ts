const disp_wifi = (num:number) => {
  switch (num) {
    case 0:
      return '無'; 
    case 1:
      return '普通'; 
    case 2:
      return '強';
    default:
      return '不明';
  }
};
export default disp_wifi;