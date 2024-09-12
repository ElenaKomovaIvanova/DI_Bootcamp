import fs from 'fs/promises';

const readFile = async () => {
  try {
    const data = await fs.readFile('D:/Обучение Лена/developerAcademy/DI_Bootcamp/Week6/day4/Exercises/file-explorer/source.txt', 'utf8');
    return data;
  } catch (err) {
    console.error('Error reading file:', err);
    throw err;
  }
};

const writeFile = async (data) => {
  try {
    await fs.writeFile('D:/Обучение Лена/developerAcademy/DI_Bootcamp/Week6/day4/Exercises/file-explorer/destination.txt', data, 'utf8');
    console.log('File copied successfully.');
  } catch (err) {
    console.error('Error writing file:', err);
    throw err;
  }
};

const data = await readFile();
await writeFile(data);