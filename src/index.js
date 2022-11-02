const redux = require("redux");

console.clear();
// developer famouse validation button
// as you seen in linkedin
// if validation is wrong
// hover on button will move

// create store
const createStore = redux.createStore;

// constant action types
const buy_cake = "BUY_CAKE";

// initial state

const initialState = {
  numberOfCake: 10
};

// actions / action creator
const buyCake = () => {
  return {
    type: buy_cake,
    msg: "cake has been sold"
  };
};

//reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1
      };
    default:
      return state;
  }
};

//store
const store = createStore(reducer);

console.log("current state ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
