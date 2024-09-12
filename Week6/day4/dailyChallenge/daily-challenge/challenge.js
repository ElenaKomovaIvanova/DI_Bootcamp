import { readFile } from "./files/read-file.js"
import { colorfulText } from "./colorful-message.js";
import { greetingMessage } from "./greeting.js";

const displayData = async () => {
    try {
      const message = await readFile();
      console.log(greetingMessage('Elena'));
      console.log(colorfulText(message, 2, 4, 3)); 
    } catch (err) {
      console.error('Error in displayData:', err);
    }
  };
  
  displayData();