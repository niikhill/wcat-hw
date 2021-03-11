const fs = require("fs");
const help = require("./help");
const linebrk = require("./utils/linebrk");
const no_noempty = require("./utils/no_nonempty");
const numberAllLines = require("./utils/numberAllLines");


function types(in_type,filepath) {
    let file_content = fs.readFileSync(filepath, 'utf8');
    for(let i=0; i<in_type.length-1; i++){
        if(in_type[i] == "-b"){
            file_content = no_noempty.numberNonEmptyLines(file_content);
        }
        else if(in_type[i] == "-n" ){
            file_content = numberAllLines.numberAllLines(file_content);
        }
        else if(in_type[i] == "-s" ){
            file_content = linebrk.lineBreak(file_content);
        }else if(in_type[i]=="help"){
            help.helpfn(input);
        }
        else{
            if(in_type[i] != "-s"||"-n"||"-b"){
                console.log("Wrong Input Please check the inp :\n");
                help.helpfn();
                //console.log(in_type[i])
                return;
            }
        }
    }

}


module.exports = {
    types:types
}



