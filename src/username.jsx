import { useState, useEffect } from "react";

const Username = () => {

    const [name, setName] = useState(``);
            // useEffect(() => {
        //     document.title = `Your name is ${name}`;

        //     return(() => console.log(`Name is ${name}`));
        // })


    const nameInput = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <p>Your name is {name}</p>
            <form onSubmit={nameInput}>
                <input type="text" id="inputName"></input>
                <button onClick={() => setName(document.getElementById("inputName").value)}>Click Me</button>
            </form>
        </>
    )
}

export default Username;