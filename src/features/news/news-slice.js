import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getUrl from '../../services/newsService';
import Swal from 'sweetalert2';

const initialState = {
    news: {},
    newsFiltered: {},
    error: '',
    loading: false,
}

export const fetchNews = createAsyncThunk('news/fetch', ({ category }) => {
    return fetch(getUrl(category))
        .then((response) => response.json())
        .then((json) => json.articles)
        .then(news => news.map(n => ({
            ...n,
            isFavorite: false,
            comments: []
        }))).then(news => ({ category, news }))
})

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        RemoveNews: (state, action) => {
            const arr = state.news[action.payload.category]
            const newArr = arr.filter(newsPiece => newsPiece.title !== action.payload.news);
            state.news[action.payload.category] = newArr;
            state.newsFiltered[action.payload.category] = newArr;
        },
        toggleFavorite: (state, { payload }) => {
            const index = state.news[payload.category].findIndex(n => n.title === payload.title)
            const filtIndex = state.newsFiltered[payload.category].findIndex(n => n.title === payload.title)
            if (index !== -1) {
                state.news[payload.category][index].isFavorite = !state.news[payload.category][index].isFavorite
            }
            if (filtIndex !== -1) {
                state.newsFiltered[payload.category][filtIndex].isFavorite = !state.newsFiltered[payload.category][filtIndex].isFavorite
            }
        },
        addComment: (state, { payload }) => {
            const { title, comment, category } = payload
            let categoryNews = state.newsFiltered[category]
            const newsIndex = categoryNews.findIndex(n => n.title === title)
            if (newsIndex >= 0) {
                state.newsFiltered[category][newsIndex].comments.push(comment)
                state.news[category][newsIndex].comments.push(comment)
            }
        },
        editComment: (state, { payload }) => {
            const { title, comment, category } = payload
            let categoryNews = state.newsFiltered[category]
            const newsIndex = categoryNews.findIndex(n => n.title === title)
            if (newsIndex >= 0) {
                const comments = state.newsFiltered[category][newsIndex].comments
                const commentIndex = comments.findIndex(c => c.id === comment.id)
                if (commentIndex >= 0) {
                    state.newsFiltered[category][newsIndex].comments[commentIndex] = comment
                    state.news[category][newsIndex].comments[commentIndex] = comment
                }
            }
        },
        search: (state, action) => {
            let query = action.payload
            if (!query || query === null || query.trim().length < 1) {
                state.newsFiltered = { ...state.news }
                return;
            }
            query = query.toLowerCase()
            let categories = Object.keys(state.news)
            for (let category of categories) {
                state.newsFiltered[category] = state.news[category].filter(newsPiece =>
                    newsPiece.title.toLowerCase().includes(query) || (newsPiece.description && newsPiece.description.toLowerCase().includes(query)));
            }
        },
        sortByDateNewToOld: (state) => {
            let categories = Object.keys(state.news)
            for (let category of categories) {
                state.news[category] = state.news[category].sort((a, b) => {
                    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
                })
            }
            state.newsFiltered = { ...state.news }
        },
        sortByDateOldToNew: (state) => {
            let categories = Object.keys(state.news)
            for (let category of categories) {
                state.news[category] = state.news[category].sort((a, b) => {
                    return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
                })
            }
            state.newsFiltered = { ...state.news }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.loading = true;
            state.error = ''
        })
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            const { category, news } = action.payload
            state.loading = false;
            state.newsFiltered[category] = news
            state.news[category] = news
            state.error = ''
        })
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.loading = false;
            state.news = {};
            state.newsFiltered = {};
            state.error = action.error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })
    }
});

export default newsSlice.reducer;
export const { addComment, editComment, RemoveNews, EditNews, search, toggleFavorite, sortByDateNewToOld, sortByDateOldToNew } = newsSlice.actions;
