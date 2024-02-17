import {useState} from "react";

export const AddCategory = ({addCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length<1)
            return;
        addCategory(inputValue.trim());
        //setCategories(categories=>[ ...categories, inputValue]);
        setInputValue('');
        console.log(inputValue)
    }
    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder={'Search Gifs'}
                value={inputValue}
                onChange={onInputChange}
            />

        </form>

    )
}