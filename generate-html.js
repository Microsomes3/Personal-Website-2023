import fs from 'fs';

if(!fs.existsSync("src/htmls/dist")) {
    fs.mkdirSync("src/htmls/dist");
}


const htmls = fs.readdirSync("src/htmls");

htmls.forEach((hfile)=>{
    const fending = hfile.split(".")[1];
    if(fending == "html"){
        const fdata = fs.readFileSync(`src/htmls/${hfile}`,"utf-8");
        fs.writeFileSync(`src/htmls/dist/${hfile.split(".")[0]}.txt`,fdata);
    }
})