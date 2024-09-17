import {db} from '../config/knexfile.js';
import bcrypt from "bcrypt";

// done
export const getUserById = (id) => db('users').where({ id }).first();

// done
export const getAllUsers = () => db('users').select('*');

// done
export const createUser = async (user) => {
    return db.transaction(async trx => {
        const { email, username, first_name, last_name, password } = user;
        try {
            const newUser = await trx('users')
                .insert({ email, username, first_name, last_name })
                .returning('*');
            const newHashpwd = await trx('hashpwd')
                .insert({ username: username, password: password })
                .returning('*');

            return { newUser, newHashpwd };
        } catch (error) {
            throw error;
        }
    });
}

// done
export const getUserByUsername = async (username) => {
    try {
        const user = await db('users').where({ username }).first();
        return user;
    } catch (error) {
        throw error;
    }
}

//done
export const checkPassword = async (username, password) => {
    try {
        const userHash = await db('hashpwd').where({username}).first();
        const isPasswordCorrect = await bcrypt.compare(password, userHash.password);
        return isPasswordCorrect;
    } catch (error) {
        throw error;
    }
}


export const updateUser = async (id, user) => {
    return db.transaction(async trx => {
        const { email, username, first_name, last_name, password } = user;
        let hashpwd = '';
        try {
            const updatedUser = await trx('users')
                .where({ id })
                .update({ email, username, first_name, last_name })
                .returning('*');
            if (user.password) {
               hashpwd = await trx('hashpwd')
                    .where({ username: user.username })
                    .update({ password })
                    .returning('*');
            }
            return { user: updatedUser[0], hashpwd: hashpwd ? hashpwd[0] : null };
        } catch (error) {
            throw error;
        }
    });
};

