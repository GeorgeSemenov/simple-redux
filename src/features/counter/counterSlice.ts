import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    //Обрати внимание, что сами редьюс функции ничего не возращают, а только
    //изменяют state - это нормально, ведь под капотом redux будет работать с
    //immer который позволяет изменять состояине, не возвращяя новый объект
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      //Обрати внимание, что нужно всегда работать только
      //с action.payload, загляни в Counter/index.tsx и посмотри,
      //Что в incrementByAmount передаётся просто число, которое
      //пото будет использованно для инициализации payload в action
      state.value += action.payload;
    },
  },
});

//createSlice создаёт для каждой редьюс функции экшон генератор, который генерирует экшоны
//для созданных нами функций

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
