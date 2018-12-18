# Request Header Parser Microservice

Simple API built with Node and Express that parses a request header and returns a JSON object containing the client's IP address, preferred languages and system info. Built as part of [freeCodeCamp](https://www.freecodecamp.org/)'s APIs and Microservices Certification.

## API Endpoint

/api/whoami

## Sample Output

`{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5", "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`