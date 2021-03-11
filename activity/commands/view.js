let fs = require("fs"); 
 

function viewFunction(filepath){
    for(let i = 0;i<filepath.length;i++){
        if (!fs.existsSync(filepath[i])){
            console.log("File does not exist");
            break;
        }
        else{
            
            let file = fs.lstatSync(filepath[i]).isFile();
            if (file == true) {
                console.log("Opening File \n \n ",filepath[i]);
                let contentInFile = fs.readFileSync(filepath[i], 'utf8');
                console.log(contentInFile);
            }
        }
    }
}

module.exports = {
    viewfn: viewFunction
}

