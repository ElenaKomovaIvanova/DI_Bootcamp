const key = 'c126a07dd819e971002891967a27cafb1f00424b';
const emojis = [];

// Fetch emojis from the API
export const fetchEmojis = async () => {
    try {
        const response = await fetch(`https://emoji-api.com/emojis?access_key=${key}`);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const emojiData = await response.json();
        emojis.length = 0; // Clear the emojis array before populating it
        emojiData.forEach(element => {
            const em = {
                id: element.unicodeName,  // Using unicodeName as ID
                emoji: element.character,
                category: element.group,
                subCategory: element.subGroup
            }
            emojis.push(em);
        });
        const { randomEmoji, randomIds } = getRandomEmojiAndIds();
        console.log('Random Emoji:', randomEmoji);
        console.log('Random IDs:', randomIds);
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
};

// Get a random emoji and three random IDs
export const getRandomEmojiAndIds = () => {
    if (emojis.length === 0) return { randomEmoji: null, randomIds: [] };

    // Choose one random emoji
    const randomEmojiIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomEmojiIndex];

    // Collect all IDs (unicodeName)
    const ids = emojis.map(e => e.id);

    // Choose three random IDs
    const randomIds = [];
    while (randomIds.length < 3 && ids.length > 0) {
        const randomIndex = Math.floor(Math.random() * ids.length);
        const randomId = ids.splice(randomIndex, 1)[0];  // Remove the selected ID to avoid duplicates
        randomIds.push(randomId);
    }

   
    while (randomIds.length < 3) {
        randomIds.push('No ID available');
    }

    return { randomEmoji, randomIds };
};



