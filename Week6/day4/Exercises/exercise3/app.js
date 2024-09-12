const {writeFile, readFile} = require("./fileManager");

const displayData = async () => {
    try {
      const data = await readFile('D:/Обучение Лена/developerAcademy/DI_Bootcamp/Week6/day4/Exercises/exercise3/helloWorld.txt');
      console.log(data);
    } catch (err) {
      console.error('Error in displayData:', err);
    }
  };
  
displayData();

writeFile('Week6/day4/Exercises/exercise3/byeWorld.txt', 'Writing to the file');
