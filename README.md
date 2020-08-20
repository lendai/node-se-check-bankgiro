# se-check-bankgiro

A JavaScript module for validating swedish Bankgiro numbers.

Based on https://github.com/barsoom/banktools-se

## Installation

    npm install se-check-bankgiro

## Testing

     npm test se-check-bankgiro

## Usage

Once the package has been installed using `npm`, using the module is very simple.
At the moment, the module exposes a single method, `checkBankgiro`. `checkBankgiro` accepts a single string parameter that represents the Bankgiro number.

#### Node.js

```javascript
const checkBankgiro = require('se-check-bankgiro')
const result = checkBankgiro('5402-9681') // should respond { isValid: true }
```

## License (MIT)

Copyright (c) 2020 Daniel Mauno Pettersson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
