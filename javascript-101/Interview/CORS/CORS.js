/*
CORS - Cross Orgin Request Sharing
It is a mechanism in which 2 or more web apps can share resources provided they are from different orgins.

Before any kind of request, a preflight request (OPTIONS CALL) is made and this request is verfied by CORS using additional http headers.

A --> (preflight/OPTIONS CALL) <--- (Additional HTTP headers) <--- B
A --> (POST) --> B

Most commonly used orgin - Acces control allow orgin 
 */

