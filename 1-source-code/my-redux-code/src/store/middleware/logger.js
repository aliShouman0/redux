//SNA store next action like DNA
const logger = (pram) => (store) => (next) => (action) => {
  console.log("pram", pram);
  // console.log("store", store);
  // console.log("next", next);
  // console.log("action", action);
  next(action);
};

export default logger;
