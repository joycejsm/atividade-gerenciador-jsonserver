const fs = require('fs');
const path = './public';

if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
    console.log('Pasta public criada.');
} else {
    console.log('Pasta public já existe.');
}
