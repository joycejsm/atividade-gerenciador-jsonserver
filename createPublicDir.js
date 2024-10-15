const fs = require('fs');
const path = './public';

if (!fs.existsSync(path)){
    fs.mkdirSync(path);
    console.log('Public directory created.');
} else {
    console.log('Public directory already exists.');
}
