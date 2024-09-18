export const validateTaskData = (data) => {
    const { title, complited } = data;
    if (!title || typeof title !== 'string') {
        return ({ error: 'Title is required and should be a string' });
    }

    if (typeof complited !== 'boolean') {
        return ({ error: 'Completed must be a boolean value' });
    }
    return true;
};