let fs = require("fs");
let path = require("path");
let cmd = process.argv.slice(2); 
let help = require("./commands/help");
let input_types = require("./commands/input_types");
let view = require("./commands/view");
let file_path = cmd[cmd.length-1];


if(cmd.length==1&&cmd[0]=="help"){
    help.helpfn();
}else if(cmd.length==1){
    view.viewfn(cmd);
}
else if (cmd.length>1){
    let isFile = cmd[0]!=path.basename(cmd[0]);
    if(isFile==true){
        view.viewfn(cmd);
    }
    else{
        if(!fs.existsSync(file_path)){
            console.log("File does not exist");
        }
        else{
            input_types.types(cmd,file_path);
        }
    }
}


