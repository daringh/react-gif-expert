import {useState} from "react";
import {AddCategory, GifGrid} from './componets'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and morty']);

    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    };

    return (
        <>

            <h1>GIFT EXPERT</h1>

            <AddCategory addCategory={addCategory}/>

            {
                categories.map((category) =>
                    (
                        <GifGrid
                            key={category}
                            category={category}/>
                    )
                )
            }


        </>
    )
}