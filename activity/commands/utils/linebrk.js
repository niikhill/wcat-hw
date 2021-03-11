const fs = require("fs");

function lineBreak(file_content){
    //ref -->https://www.textfixer.com/tutorials/javascript-line-breaks.php
    file_content = file_content.replace(/\n\s*\n/g, '\n\n');
    console.log(file_content);
    return file_content;
}
module.exports = {
    lineBreak:lineBreak
}