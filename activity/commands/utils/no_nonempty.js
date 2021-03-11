const fs = require("fs");
function numberNonEmptyLines(file_content){
    //ref --> https://www.textfixer.com/tutorials/javascript-line-breaks.php
    let lines = file_content.split(/\r?\n/);
    let count = 0;
    let string_data = "";
    for(let idx=0; idx<lines.length; idx++){
        let line = lines[idx];
        
        if (line == ""){
            count++;
            console.log(count, ". ", line);
            string_data += (count + ". " + line + "\n")
        }
        else{
            console.log(line);
            string_data += (line + "\n");
        }
    }

    return string_data;
}

module.exports = {
    numberNonEmptyLines:numberNonEmptyLines
}
