import React, {useState, useEffect} from 'react';

export const useValidation = (value: string, validations: Object) => {

	const [isEmpty, setIsEmpty] = useState<boolean>(true);
	const [isEmailError, setIsEmailError] = useState<boolean>(false);
	const [isMinLengthError, setIsMinLengthError] = useState<boolean>(false);
	const [inputValid, setInputValid] = useState<boolean>(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setIsMinLengthError(true) : setIsMinLengthError(false);
					break;
				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true);
					break;
				case 'isPhone':
					break;
				case 'isEmail':
					const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    				(re.test(String(value).toLowerCase())) ? setIsEmailError(false) : setIsEmailError(true)
					break
			}	
		}
	}, [value])

	useEffect(() => {
		if (isMinLengthError || isEmpty) {
			setInputValid(false);
		}
		else {
			setInputValid(true);
		}
		
	}, [isEmpty, isMinLengthError])

	
	

	return {
		isEmpty,
		isMinLengthError,
		inputValid,
		isEmailError
	}
}