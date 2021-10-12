import React, {useState} from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialValue, validations) => {

	const [value, setValue] = useState(initialValue);
	const [isDirty, setIsDirty] = useState(false);
	const [isNext, setIsNext] = useState(true);
	const valid = useValidation(value, validations);


	const onChange = (e) => {
		setValue(e.target.value);
	}

	const onBlur = (e) => {
		setIsDirty(true);
	}

	const onClick = (e) => {
		e.preventDefault();
		setIsNext(true);

	}

	return {
		value,
		isNext,
		onClick,
		onChange,
		onBlur,
		isDirty,
		...valid
	}
}