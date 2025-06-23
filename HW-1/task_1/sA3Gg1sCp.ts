type author = {
    name: string, age: number
}
type books = {
    title: string
    pageCount: number,
    genre: string,
    authors:author[]
}
let book1 :books = {
    title: `The Lord of the Rings`,
    pageCount: 185,
    genre: `Fantasy`,
    authors: [
        {name: 'J.R.R. Tolkien', age: 133},
        {name: 'J.R. Tolkien', age: 33}]
}
let book2 = {
    title: `Dracula`,
    pageCount: 96,
    genre: `Horror`,
    authors: [
        {name: 'Bram Stoker', age: 178},
        {name: 'J.R. Tolkien', age: 33}]
}
let book3 = {
    title: `Sinners`,
    pageCount: 115,
    genre: `Thriller`,
    authors: [
        {name: 'Ryan Coogler', age: 178},
        {name: 'Bram Stoker', age: 33}]
}