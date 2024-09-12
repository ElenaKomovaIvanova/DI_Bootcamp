import fs from 'fs/promises';

const readDirectory = async (path) => {
  try {
    const files = await fs.readdir(path);
    return files;
  } catch (err) {
    console.error('Error reading directory:', err);
    throw err;
  }
};

const displayFiles = async () => {
  const files = await readDirectory('D:/Обучение Лена/developerAcademy/DI_Bootcamp/Week6/day4/Exercises/file-explorer');
  console.log(files);
};

displayFiles();