
export  function showAuthors() {
    return function(dispatch) {
        const myRequest = 'https://library-api-01.herokuapp.com/author';
        fetch(myRequest).then(response => response.json())
            .then((allAuthor) => {
                dispatch({type:'changeAuthors', payload:allAuthor})
            })
 }
}
export function logout() {
    return function(dispatch) {
     dispatch({type:'logout', payload:{}})
} 
}
export  function login(user) {
    return function(dispatch) {
        const loginRequest = 'https://auth-01.herokuapp.com/login';
        fetch(loginRequest, {
            headers: {
                Accept:'application/json',
                'Content-type': 'application/json',
            },
            method:'post',
            body: JSON.stringify(user),
        }).then(response => { 
            // console.log('token', response)
            return response.json()
        })
        .then((isLogin) => {
            // console.log('isLogin', isLogin)
            if(isLogin.status){
                dispatch({type:'login', payload:isLogin})
            }
        })
 }
}
export function showBooks() {
    return function(dispatch) {
        const myRequest = 'https://library-api-01.herokuapp.com/book';
        fetch(myRequest).then(response => response.json())
            .then((allBooks) => {
                dispatch({type:'changeBooks', payload:allBooks})
            })
 }
}
export function addBooks(newBook){
    return function(dispatch) {
        const insertBookRequest = 'https://library-api-01.herokuapp.com/book/insert';
        fetch(insertBookRequest, {
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            method: 'post',
            body: newBook,
          }).then((addBook) => {
                dispatch({type:'addBook', payload:newBook})
            })
 }
}

export function addAuthors(newAuthor){
    return function(dispatch) {
        const insertAuthorRequest = 'https://library-api-01.herokuapp.com/author/insert';
        fetch(insertAuthorRequest, {
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          method: 'post',
          body: newAuthor,
        }).then((addBook) => {
                dispatch({type:'addAuthor', payload:newAuthor})
            })
 }
}

export  function  deleteBook(id) {
    return function(dispatch) {
        const deleteBookRequest = `https://library-api-01.herokuapp.com/delete/${id}`;
        fetch(deleteBookRequest, {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'delete'
        }).then((deleteBook) => {
            dispatch({type:'deleteBook', payload:id})
        })
 }
}


export  function  deleteAuthor(id) {
    return function(dispatch) {
        const deleteBookRequest = `https://library-api-01.herokuapp.com/delete/${id}`;
        fetch(deleteBookRequest, {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'delete'
        }).then((deleteAuthor) => {
            dispatch({type:'deleteAuthor', payload:id})
        })
 }
}
export  function updateAuthor(id, newauthordata) {
    return function(dispatch) {
        const insertAuthorRequest = `https://library-api-01.herokuapp.com/author/update/${id}`;
        fetch(insertAuthorRequest, {
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          method: 'put',
          body: JSON.stringify(newauthordata),
        }).then((updateAuthor) => {
            dispatch({type:'updateAuthor', payload:newauthordata})
        })
 }
}

export  function updateBook(id, newBookData){
    return function(dispatch) {
        const bookRequest = `https://library-api-01.herokuapp.com/book/update/${id}`;
        fetch(bookRequest, {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            method: 'put',
            body: JSON.stringify(newBookData),
        }).then((updateBook) => {
            dispatch({type:'updateBook', payload:newBookData})
        })
}
}
