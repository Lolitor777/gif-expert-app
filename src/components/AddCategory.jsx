import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One piece')

    const onInputChange = (event) => {
        setInputValue( event.target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault(); //Evita el refresh del navegador al hacer un envío del formulario
        const inputValueClean = inputValue.trim()

        if (inputValueClean.length <= 1) return; 
        //setCategories( categories => [ inputValue, ...categories ] )
        
        onNewCategory( inputValueClean );
        setInputValue(''); //Limpia el input
    }


  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>    
  )
}
