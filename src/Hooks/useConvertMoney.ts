const useConvertMoney = (value: number): string => {
  let [rub, penny] = new String(value).split('.', 2); // Разделяем рубли и копейки
  
  // форматируем рубли
  rub = rub.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  
  // Проверяем пенни
  if(penny) {
    if(penny.length === 1) {
      penny = (Number(penny) <= 9) ? `${penny}0` : penny;
    }
  } else {
    penny = '00';
  }

  return `${rub}.${penny} Руб.`;
}

export default useConvertMoney;