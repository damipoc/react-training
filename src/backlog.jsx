import { useState } from "react";


const Backlog = () => {

    const itemBacklog = [
        {
            id: 1,
            item: "Abcd",
            price: 4.99
        },
        {
            id: 2,
            item: "Bcde",
            price: 2.99
        },
        {
            id: 3,
            item: "Cdef",
            price: 1.99
        }
    ];


    const [item, setItem] = useState("");


    const [foundItems, setFoundItems] = useState(itemBacklog);


    const filter = (event) => {
        const keyword = event.target.value;

        if (keyword !== "") {
            const result = itemBacklog.filter((itemBacklog) => {
                return itemBacklog.item.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundItems(result);
        } else {
            setFoundItems(itemBacklog);
        }

        setItem(keyword);
    };
    return (
        <div>
            <input type="text" value={item} onChange={filter} className="input"></input>
            {foundItems && foundItems.length > 0 ? (
                foundItems.map((itemBacklog) => (
                    <li key={itemBacklog.id}>
                        <span className="item">{itemBacklog.item}  | </span>
                        <span className="price">{itemBacklog.price}</span>
                    </li>
                ))
            ) : (
                <li>
                    <span>No items found</span>
                </li>
            )}
        </div>
    )




};

export default Backlog;