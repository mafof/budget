import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    card: string; // Верх и низ бекграунд цвета
    iconsCard: string; // Иконки верха и низа
    changePartCard: string; // Выбранный раздел в навигации
    text: string; // Заголовок экрана
  }
}