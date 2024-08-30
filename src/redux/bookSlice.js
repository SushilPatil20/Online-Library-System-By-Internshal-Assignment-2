import { books } from '../utils/books.json';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchBooks = createAsyncThunk('books/fetchBooks',
    async () => {
        const response = await fetch('http://localhost:5000/books')
        return response.json();
    }
)

export const addNewBook = createAsyncThunk(
    'books/addNewBook',
    async (newBook) => {
        const response = await fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(newBook),
        })
        return response.json();
    }
)

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        list: books,
        status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(addNewBook.fulfilled, (state, action) => {
                state.list.push(action.payload);
            });
    }
})
export default booksSlice.reducer;