
import {ReactNode} from "react";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
};


export default List;
