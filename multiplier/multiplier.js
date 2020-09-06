const fs = require("fs");
const colors = require("colors");

let listTable = (base, limit = 10) => {
  console.log('===================='.green);
  console.log(`==== Table of ${base} ====`.green);
  console.log('===================='.green);
  for (let i = 1; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

let createFile = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The entered value '${base}'is not a number`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
      err ? reject(err) : resolve(`Table-${base}.txt`.blue);
    });
  });
};

module.exports = {
  createFile,
  listTable,
};
