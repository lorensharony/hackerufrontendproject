import { configureStore } from "@reduxjs/toolkit";
import newaReducer from "../features/news/news-slice"
import themeReducer from "../features/theme/theme-slice"

const store = configureStore({
    reducer: {
        news: newaReducer,
        theme: themeReducer
    }
})

export default store;