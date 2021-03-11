const fs = require("fs");
function numberAllLines(file_content){
    //ref --> https://www.textfixer.com/tutorials/javascript-line-breaks.php
    const lines = file_content.split(/\r?\n/);
    let count = 0;
    let string_data = "";
    for(let idx=0; idx<lines.length; idx++){
        count+=1;
        console.log(count, ". ", lines[idx]);

        string_data += (count + ". " + lines[idx] + "\n");
    }
    return string_data;
}

module.exports = {
    numberAllLines:numberAllLines
}