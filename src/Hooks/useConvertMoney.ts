const useConvertMoney = (value: number): string => {
  let [rub, penny] = new String(value).split('.', 2); // Разделяем рубли и копейки
  
  // форматируем рубли
  rub = rub.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  
  // Проверяем пенни
  penny = (!penny) ? '0' : penny;
  penny = (Number(penny) <= 9) ? `${penny}0` : penny;

  return `${rub}.${penny} Руб.`;
}

export default useConvertMoney;