const {} = require('child_process')
const path = require('path')
const fs = require('fs')
async function init(){
    console.log('Executing script.js');
    const outDirPath = path.join(__dirname,'output');

    const p = exec(`cd ${outDirPath} && npm install && npm run build`)

    p.stdout.on('data',function(data){
        console.log(data.toString());
    });

    p.stdout.on('error',function(data){
        console.log('end',data.toString());
    });

    p.on('close',async function(){
        console.log('Build Complete');
        const distFolderPath = path.join(__dirname,'output','dist');
        const distFolderContent = fs.readdirSync(distFolderPath,{recursive:true});  
    });
}
