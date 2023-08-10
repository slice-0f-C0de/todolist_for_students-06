import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemForm = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemForm) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    const addTask = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    return <div>
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? "error" : ""}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
    </div>
}