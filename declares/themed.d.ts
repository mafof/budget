import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    card: string; // Верх и низ бекграунд цвета
    iconsCard: string; // Иконки верха и низа
    changePartCard: string; // Выбранный раздел в навигации
    text: string; // Заголовок экрана

    input: string; // Поля ввода в невыбранном состоянии
    inputFocus: string; // Поля ввода в фокусировке
    inputError: string; // Поля ввода при ошибке
    inputDisable: string; // Заблокированные поля ввода
    
    red: string;
    green: string;
    blue: string;
  }
}