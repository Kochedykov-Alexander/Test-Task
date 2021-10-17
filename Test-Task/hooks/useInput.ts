import React, {FormEvent, useState} from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialValue: string, validations: Object) => {

	const [value, setValue] = useState<string>(initialValue);
	const [isDirty, setIsDirty] = useState<boolean>(false);
	const [isNext, setIsNext] = useState<boolean>(true);
	const valid = useValidation(value, validations);


	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		setValue(e.target.value);
	}

	const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>): void => {
		setIsDirty(true);
	}

	const onClick = (e: React.MouseEvent<HTMLInputElement>): void => {
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