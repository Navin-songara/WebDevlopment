// Client to Server 4
// Pass value from client to side to server side:- express Js provides three ways to pass
//  data from client side to server side
// 1. Query String
// 2. Request parameters
// 3. request body

// 1. QueryString:- In This way we can pass data from client side to server side but not
//    compalsary to pass all data, if we pass some few data it will submit the request to
//    server like http://localhost:0000/?rno=101

// 2. Request parameter:- In this way we can pass data from client side to server side.
//    but it is complsary to pas all data . if we pass some few data in request data 
//    will not submit to the serverrequest parameter provides more secure url as compare
//    to query string

// Like:- http://localhost:0000/101/amit

// In both above data passing technique data will display in url so we cannot pass secure
// data by this way.

// 3. Request body:- In this way we can pass data from client side to server side . we can 
//    pass data in hidden mode by this way in this way data will not show in url. so it is 
//    more secure way as compare to query string and request parameter to pass data from 
//    client side to server side

//    LIKE : - http://localhost:0000
