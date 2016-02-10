export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an
    // action (an object with a type property)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
    // An action always contains a type, and sometimes contains
    // a payload, which is just more information about the
    // action just taken.  The type is always in uppercase and is
    // usually a string or var
}