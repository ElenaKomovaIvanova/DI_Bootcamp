import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try {
        if (!password) {
            return { error: 'Password is required' };  // Возвращаем объект с ошибкой вместо res
        }
        const hashedPassword = await bcrypt.hash(password, 10);  // Используем saltRounds = 10
        return hashedPassword;
    } catch (error) {
        if (error instanceof bcrypt.BcryptError) {
            return { error: 'Bcrypt error occurred while hashing password' };  // Обработка ошибки bcrypt
        }
        return { error: 'Internal server error' };  // Обработка других ошибок
    }
};
