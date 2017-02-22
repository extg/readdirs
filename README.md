# recursive-readdirs

## Install

```bash
npm install recursive-readdirs --save
```

## Usage

```js

const readdirs = require('recursive-readdirs');

readdirs(['/path/to/a', '/path/to/b'], (err, res) => {
    if (err) {
        console.log(err);
    }

    console.log(res);
})
```
