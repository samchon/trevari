const fs = require("fs");

function iterate(path)
{
    let fileList = fs.readdirSync(path);
    for (file of fileList)
    {
        let currentPath = path + "/" + file;
        let stat = fs.lstatSync(currentPath);
        
        if (stat.isDirectory())
        {
            iterate(currentPath);
            continue;
        }
        else if (currentPath.indexOf(".md") !== -1)
        {
            let content = fs.readFileSync(currentPath, "utf8");
            content = content.split(" ").join("");
            content = content.split("\r").join("");
            content = content.split("\n").join("");

            console.log(currentPath.replace("./", ""), content.length);
        }
    }
}
iterate(".");