//getters.js示例（我们一般使用getters来获取state的状态，而不是直接使用state）：

export const name = state => {
  return state.name;
};

export const age = state => {
  return state.age;
};

export const other = state => {
  return `My name is ${state.name}, I am ${state.age}.`;
};
