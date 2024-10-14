import React from 'react';

interface UserCardProps {
    name?: string;
    age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
    let messegeName: string = name ? name : 'No name';
    let messegeAge: string = age ? age.toString() : 'No age';

    return (
        <>
            <div>{messegeName}</div>
            <div>{messegeAge}</div>
        </>
    );
};


export default UserCard;
