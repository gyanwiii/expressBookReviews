const axios = require("axios");

const BASE_URL = "http://localhost:5000";


// ==========================
// TASK 10: Get all books
// ==========================
const getAllBooks = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/`);
        console.log("\nTASK 10 - All Books:\n");
        console.log(res.data);
    } catch (err) {
        console.error("Task 10 Error:", err.message);
    }
};


// ==========================
// TASK 11: Get book by ISBN
// ==========================
const getBookByISBN = async (isbn) => {
    try {
        const res = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        console.log("\nTASK 11 - Book by ISBN:\n");
        console.log(res.data);
    } catch (err) {
        console.error("Task 11 Error:", err.message);
    }
};


// ==========================
// TASK 12: Get books by author
// ==========================
const getBooksByAuthor = async (author) => {
    try {
        const res = await axios.get(`${BASE_URL}/author/${author}`);
        console.log("\nTASK 12 - Books by Author:\n");
        console.log(res.data);
    } catch (err) {
        console.error("Task 12 Error:", err.message);
    }
};


// ==========================
// TASK 13: Get books by title
// ==========================
const getBooksByTitle = async (title) => {
    try {
        const res = await axios.get(`${BASE_URL}/title/${title}`);
        console.log("\nTASK 13 - Books by Title:\n");
        console.log(res.data);
    } catch (err) {
        console.error("Task 13 Error:", err.message);
    }
};


// ==========================
// RUN ALL TASKS
// ==========================
const runTasks = async () => {
    await getAllBooks();
    await getBookByISBN(1);
    await getBooksByAuthor("Chinua Achebe");
    await getBooksByTitle("Things Fall Apart");
};

runTasks();