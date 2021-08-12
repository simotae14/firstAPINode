# NOTE NODEJS

## Tipi di Validator - Query

### QUERY VALIDATOR

Altro tipo di Express Validator
es:
possiamo validare oltre al `body` di una post i `query string` di una __GET__

[http://localhost:8080/feed/post?max=100](http://localhost:8080/feed/post?max=100)

per Validare le Query String dentro alle nostre `routes` importa __query__

```javascript
const {
  body,
  query
} = require('express-validator');
...
query('max').custom((value, {req}) => value > 100).withMessage('query val > 100')
```

## I Sanitizers
[Doc](https://github.com/validatorjs/validator.js#sanitizers)
Per normalizzare e ripulire dati una volta che il valore viene validato (es: trim)



