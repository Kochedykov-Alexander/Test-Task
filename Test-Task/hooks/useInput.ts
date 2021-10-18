import React, {FormEvent, useState, useEffect} from 'react';
import { useValidation } from './useValidation';

interface GeolocationObject {
	city: string,
	country: string,
	zip: string
}

export const useInput = (initialValue: string, validations: Object, geolocation?: GeolocationObject, type?: string) => {

	const [value, setValue] = useState<string>(initialValue);
	const [isDirty, setIsDirty] = useState<boolean>(false);
	const [isNext, setIsNext] = useState<boolean>(true);
	const valid = useValidation(value, validations);

	useEffect(() => {
		if (geolocation && geolocation.city && type === 'city') {
			setValue(geolocation.city)
		}
		if (geolocation && geolocation.country && type === 'country') {
			setValue(geolocation.country)
		}
		if (geolocation && geolocation.zip && type === 'zip') {
			setValue(geolocation.zip)
		}
	}, [geolocation])

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