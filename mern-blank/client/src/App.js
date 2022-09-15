import styles from "./App.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [items, setItems] = useState([]);
    console.log(items);
    const fetchItems = async () => {
        const response = await axios({
            method: "GET",
            url: "/allitems",
        });
        setItems(response.data);
    };
    const addItemHadler = async () => {
        await axios({
            method: "GET", //usually requests that add something to the databse should be POST
            url: "/additem",
        });
        fetchItems();
    };
    useEffect(() => {
        fetchItems();
    }, []);
    return (
        <div className={styles.app}>
            <ul>
                <h3>Item List:</h3>
                {items.map((_item, i) => (
                    <li key={i}>
                        name: {_item.name}, id: {_item.index}
                    </li>
                ))}
            </ul>
            <button onClick={addItemHadler}>Add Item</button>
        </div>
    );
}

export default App;
