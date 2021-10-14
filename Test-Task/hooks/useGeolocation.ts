import React, { useState } from 'react';
import $ from 'jquery';

export const useGeolocation = () => {

	const [city, setCity] = useState<string>('');
	const [country, setCountry] = useState<string>('');
	const [zip, setZip] = useState<string>('');

	const successCallback = async (url: string): Promise<any> => {
		await fetch(url)
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

	// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
	  successCallback('https://ipapi.co/json/');

	  return {
		city,
		country,
		zip
	}
	
		
}
