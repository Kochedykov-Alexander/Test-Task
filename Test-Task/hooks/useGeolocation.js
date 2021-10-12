import React, { useState } from 'react';
import $ from 'jquery';

export const useGeolocation = () => {

	

	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [zip, setZip] = useState('');

	const successCallback = async () => {
		await fetch('https://ipapi.co/json/')
  			.then(d => d.json())
			.then(res => {
				setCity(res.city);
				setCountry(res.country_name);
				setZip(res.postal);
			})
	  }

	  
	  const errorCallback = (error) => {
		console.error(error)
	  }

	  //navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
	  successCallback();

	  return {
		city,
		country,
		zip
	}
	
		
}
