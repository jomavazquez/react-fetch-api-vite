import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

	const [ inputValue, setInputValue ] = useState('');

	// Viene por defecto el event, por eso podemos "extraer" el target o desestructurarlo, que es como se dice
	const onInputChange = ({ target }) => {
		setInputValue( target.value );
	}

	const onSubmitHandle = ( event) =>{
		event.preventDefault();
		if( inputValue.trim().length < 1 ) return;
		
		setInputValue('');
		onNewCategory( inputValue.trim() );		
	}

  	return (
		<form onSubmit={ onSubmitHandle } aria-label="form">
			<input 
				type="text"
				placeholder="Buscar gifs"
				value={ inputValue }
				onChange={ onInputChange }
			/>
		</form>
  	)
}

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired
}