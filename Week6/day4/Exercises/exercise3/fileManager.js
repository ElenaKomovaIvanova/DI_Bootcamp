const fs = require("fs").promises;


const readFile = async (file) => {
    try {
        const data = await fs.readFile(file, 'utf8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        throw err;
    }
};


const writeFile = async (file, data) => {
    fs.writeFile(file, data, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Write operation complete.');
        }
    });
}

module.exports = { writeFile, readFile };