import fs from 'fs/promises';

export const readFile = async () => {
  try {
    const data = await fs.readFile("D:/Обучение Лена/developerAcademy/DI_Bootcamp/Week6/day4/dailyChallenge/daily-challenge/files/file-data.txt", "utf-8");
    return data;
  } catch (err) {
    console.error('Error reading file:', err);
    throw err;
  }
};