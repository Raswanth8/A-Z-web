### JWT is primarily used for authorisation and not authentication.

- Authorisation is when you enter username and password, enter a web page, Authorisation is when you have to check whether the same author is logged back or not.

- It uses JSON web token instead of cookies (Session IDs) for authorisation.

- Session ID is stored on server, whereas the JWT is stored on client.

-  JWT (Encoded) - Header (ALGORITHM & TOKEN TYPE) + Payload (data) + Signature (Decoded)