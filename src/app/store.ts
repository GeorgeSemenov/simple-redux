import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

//С помощью configureStore создаём store - это будет хранилище
//редукторов(редуктор хранит состояние и способы изменять это состояние)
//Более того с помощью configureStore мы связываем store с такими хуками как
//useSelector - чтобы получать из редуктора значения см Counter.tsx
//useDispatch - хук для получения экшенов из экшенгенераторов, для изменения
//состояиня см Counter.tsx
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
