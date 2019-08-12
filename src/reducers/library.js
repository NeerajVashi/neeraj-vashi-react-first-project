export default function library(state ={authors:[], books:[], token:{}}, action) {
    switch(action.type) {
        case "changeAuthors": {
            state = {...state, authors:action.payload}
            break;
        }
        case 'changeBooks': {
            state = {...state , books:action.payload}
            break;
        }
        case 'logout' : {
            state = {...state, token:action.payload}
            break
        }
        case 'deleteBook': {

            const currentBooks =  JSON.parse(JSON.stringify(state.books))
            const newbooks = currentBooks.filter((book, x) => {
                return book.id !== action.payload
                });
            state = {...state , books:newbooks}
            break;
        }
        case 'deleteAuthor': {
            const currentAuthors =  JSON.parse(JSON.stringify(state.authors))
            const newAuthors = currentAuthors.filter((author, x) => {
                return author.authorId !== action.payload
            });
            state = {...state, authors:newAuthors}
            break;
        }
        case 'addAuthor': {
            const currentAuthors =  JSON.parse(JSON.stringify(state.authors))
            currentAuthors.push(JSON.parse(action.payload));
            state = {...state, authors:currentAuthors}
            break;
        }
        case 'addBook' : {
            const currentBooks =  JSON.parse(JSON.stringify(state.books))
            currentBooks.push(JSON.parse(action.payload));
            state = {...state , books:currentBooks}
            break;
        }
        case 'updateBook' : {
            const newBook = action.payload;
            const currentBooks =  JSON.parse(JSON.stringify(state.books))
            currentBooks.forEach((book, index) =>{
                if (book.id === newBook.id) {
                  currentBooks[index] = newBook;
                }
              })
            state = {...state, books:currentBooks} 
            break;
        }
        case 'updateAuthor' : {
            const newAuthor = action.payload
            const currentAuthors =  JSON.parse(JSON.stringify(state.authors))
            currentAuthors.forEach((author, index) =>{
                if (author.authorId === newAuthor.authorId) {
                  currentAuthors[index] =newAuthor;
                }
              })
            state = {...state, authors:currentAuthors}  
            break;
        }
        
        case 'login' : {
            state = {...state, token:action.payload}
            break;
        }
        default : {
            
        }
    }
    return state;
}