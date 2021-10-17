import React, { useState,  useEffect} from 'react';


export const useGeolocation = () => {



	const [city, setCity] = useState<string>('');
	const [country, setCountry] = useState<string>('');
	const [zip, setZip] = useState<string>('');

	const successCallback = async (): Promise<any> => {
		await fetch('https://ipapi.co/json/')
  			.then(d => d.json())
			.then(res => {
				setCity(res.city);
				setCountry(res.country_name);
				setZip(res.postal);
			})
	  }

	  const errorCallback = (error: any): void => {
		console.error(error)
	  }

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(successCallback, errorCallback);	
	}, [])

	
	  return {
		city,
		country,
		zip
	}
	
		
}
