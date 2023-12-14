import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  //useSelector - используют для доступа к состоянию
  //useSelector - хук, который принимает другую функцию
  //возаращаемое значение которой будет состоянием
  const count = useSelector((state: iKekState) => state.counter.value);

  //useDispatch - хук, который возвращает функцию
  //используемую для правки изменений в состоянии с помощью экшенов
  //Которые будут возвращать экшон генераторы, которые описаны в counterSlice
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="increment"
        onClick={() => {
          dispatch(increment());
        }}
      >
        "Плюс мазафака"
      </button>
      <span>{count}</span>
      <button
        aria-label="decrement"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        "Минус мазафака"
      </button>
      <button
        aria-label="puk puk"
        onClick={() => {
          console.log("puk puk puk");
          //В incrementByAmount передаётся просто число,
          //Оно обрабатывается экшен генератором incrementByAmount
          //и инициализирвется свойство payload у экшона
          dispatch(incrementByAmount(3));
        }}
      >
        puk 3 times
      </button>
    </div>
  );
}

interface iKekState {
  counter: { value: number };
}
