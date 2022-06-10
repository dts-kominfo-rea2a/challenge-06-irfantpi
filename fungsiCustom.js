// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = (fnCallback) => {
  
  const fs = require('fs');
  hasilData = [];

  fs.readFile(file1, 'utf8', (err, data1) => {
    if(err){
      return console.log ('error data 1' + err);
    }
    fs.readFile(file2, 'utf8', (err, data2) => {
      if(err){
        return console.log ('error data 2' + err);
      }
      fs.readFile(file3, 'utf8', (err, data3) => {
        if(err){
          return console.log ('error data 3' + err);
        }
        let jsonFile1 = JSON.parse(data1);
        let jsonFile2 = JSON.parse(data2);
        let jsonFile3 = JSON.parse(data3);

        hasilData.push(jsonFile1.toString().split(' ')[1]);
        hasilData.push(jsonFile2.toString().split(' ')[1]);
        hasilData.push(jsonFile3.toString().split(' ')[1]);
        
        fnCallback(err, hasilData);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

