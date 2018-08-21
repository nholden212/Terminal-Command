const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (name, text, type) => {
  fs.writeFileSync(name, text, type);
  console.log("File " + name + " made to include " + text);
}

module.exports.mkdir = (path) => {
  fs.mkdir(path);
  console.log("Directory made at: " + path);
};
