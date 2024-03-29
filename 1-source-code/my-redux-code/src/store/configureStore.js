import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/api";
// import func from "./middleware/Func";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import reducer from "./reducer";

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "Console" }),
      toast,
      api,
    ],
  });
}
