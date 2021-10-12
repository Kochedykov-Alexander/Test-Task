import React, {useState} from 'react';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useInput } from '../../hooks/useInput';


export default function Tabs() {


	const [toggleClass, setToggleClass] = useState(1);

	const full_name = useInput('', {isEmpty: true, minLength: 3});
	const street = useInput('', {isEmpty: true});
	const phone = useInput('', {isEmpty: true});
	const apt = useInput('', {});
	const city = useInput('', {isEmpty: true});
	const country = useInput('Country', {isEmpty: true});
	const zip = useInput('', {isEmpty: true});
 	const b = useInput('', {});

	const geo = useGeolocation(); 


	return (
		<div>
			<div class="main-block__form__tabs">
				<div class={toggleClass === 1 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleClass(1)}>Shipping</div>
				<div class={toggleClass === 2 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleClass(2)}>Billing</div>
				<div class={toggleClass === 3 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleClass(3)}>Payment</div>
			</div>

							<div class="main-block__form__tabs__content">
								<div className={toggleClass === 1 ? "content active-content" : "content"}>
									<div class="content__title">
										Shipping info
									</div>
									
									<div class="content__recipient">
										<div class="content__recipient_text">
											Recipient
										</div>
									</div>
									<div class="content__inputs">

										{((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<div class='message'>Please enter recipient full name and min length = 3</div>)}
										<input focus type="text" class={((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) ? "content__inputs_fullname focused" : "content__inputs_fullname"} placeholder="Full Name" value={full_name.value} onChange={(e) => full_name.onChange(e)} onBlur={(e) => full_name.onBlur(e)}/>
										
							

										<div class="content__inputs_daytime_container">
										{!(b.isNext && phone.isEmpty) && (<input type="tel" class="content__inputs_daytime" placeholder="Datetime Phone" value={phone.value} onChange={(e) => phone.onChange(e)} onBlur={(e) => phone.onBlur(e)}/>)}
											{(b.isNext && phone.isEmpty) && (<div class='message'>Please enter recipient phone in format +7 (000) 000 00 00</div>)}
											{(b.isNext && phone.isEmpty) && (<input type="tel" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} class="content__inputs_daytime" placeholder="Datetime Phone" value={phone.value} onChange={(e) => phone.onChange(e)} onBlur={(e) => phone.onBlur(e)}/>)}
											<label for="content__inputs_daytime_label">For delivery questions only</label>
										
									</div>
									</div>

									<div class="content__address">
										<div class="content__address_text">
											Address
										</div>
									</div>
									<div class="content__inputs">
									{!(b.isNext && street.isEmpty) && (<input type="text" class="content__inputs_street" placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>)}
										{(b.isNext && street.isEmpty) && (<div class='message'>Please enter recipient street</div>)}
										{(b.isNext && street.isEmpty) && (<input type="text" class="content__inputs_street" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>)}
										
										<input type="text" class="content__inputs_apt" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" value={apt.value} onChange={(e) => apt.onChange(e)} onBlur={(e) => apt.onBlur(e)}/>

									<div class="content__inputs_icon">
											
									{!(b.isNext && city.isEmpty) && (<input type="text" class="content__inputs_city" placeholder="City" value={geo.city == undefined ? city.value : geo.city} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>)}
										{(b.isNext && city.isEmpty) && (<input type="text" class="content__inputs_city" placeholder="City" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} value={geo.city == undefined ? city.value : geo.city} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>)}
											{/* <FontAwesomeIcon icon={faCrosshairs} style={{position: 'absolute', top: '40%', right: '10px', fontSize: '20px', cursor: 'pointer'}} /> */}
									</div>
										<div class="content__inputs__row">
											<div class="content__inputs__row_country">
											<select onChange={(e) => country.onChange(e)} onBlur={(e) => country.onBlur(e)}>
													<option value={geo.country == undefined ? country.value : geo.country} selected disabled>{(geo.country === undefined) ? country.value : geo.country}</option>
													<option value="Russia">Russia</option>
													<option value="USA">USA</option>
													<option value="UK">UK</option>
													<option value="Ukraine">Ukraine</option>
											</select>
											</div>
										{!(b.isNext && zip.isEmpty) && (<input type="text" class="content__inputs__row_zip" placeholder="ZIP" maxlength="6" value={geo.zip == undefined ? zip.value : geo.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>)}
											{(b.isNext && zip.isEmpty) && (<input type="text" class="content__inputs__row_zip" placeholder="ZIP" maxlength="6" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} value={geo.zip == undefined ? zip.value : geo.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>)}
											
										</div>
									</div>
									{(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && 
										<a onClick={() => setToggleClass(2)} class="content__button" style={{cursor: 'pointer'}}>Continue</a>
									}
									{!(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && 
										<a class="content__button" style={{cursor: 'pointer'}}>Continue</a>
									}
									
								</div>
								<div class={toggleClass === 2 ? "content active-content" : "content"}>
									<div class="content__title">
										Billing Information
									</div>
									<div class="content__recipient">
										<div class="content__recipient_text">
											Billing Contact
										</div>
									</div>
									<div class="content__inputs">

									{!((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<input type="text" class="content__inputs_fullname" placeholder="Full Name" value={full_name.value} onChange={(e) => full_name.onChange(e)} onBlur={(e) => full_name.onBlur(e)}/>)}
										{((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<div class='message'>Please enter recipient full name and min length = 3</div>)}
										{((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<input type="text" class="content__inputs_fullname" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} placeholder="Full Name" value={full_name.value} onChange={(e) => full_name.onChange(e)} onBlur={(e) => full_name.onBlur(e)}/>)}

										<input type="text" class="content__inputs_email" placeholder="Email Address"/>		
									</div>
									

									<div class="content__address">
										<div class="content__address_text">
											Billing Address
										</div>
									</div>
									<div class="content__inputs">
										{!(b.isNext && street.isEmpty) && (<input type="text" class="content__inputs_street" placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>)}
											{(b.isNext && street.isEmpty) && (<div class='message'>Please enter recipient street</div>)}
											{(b.isNext && street.isEmpty) && (<input type="text" class="content__inputs_street" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>)}
										
											<input type="text" class="content__inputs_apt" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" value={apt.value} onChange={(e) => apt.onChange(e)} onBlur={(e) => apt.onBlur(e)}/>
										
										<div class="content__inputs_icon">
									{!(b.isNext && city.isEmpty) && (<input type="text" class="content__inputs_city" placeholder="City" value={geo.city == '' ? geo.city : city.value} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>)}
										{(b.isNext && city.isEmpty) && (<input type="text" class="content__inputs_city" placeholder="City" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} value={geo.city == '' ? geo.city : city.value} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>)}
											{/* <FontAwesomeIcon icon={faCrosshairs} style={{position: 'absolute', top: '40%', right: '10px', fontSize: '20px', cursor: 'pointer'}} /> */}
										</div>
										<div class="content__inputs__row">
											<div class="content__inputs__row_country">
											<select onChange={(e) => country.onChange(e)} onBlur={(e) => country.onBlur(e)}>
													<option value={geo.country == undefined ? country.value : geo.country} selected disabled>{(geo.country === undefined) ? country.value : geo.country}</option>
													<option value="Russia">Russia</option>
													<option value="USA">USA</option>
													<option value="UK">UK</option>
													<option value="Ukraine">Ukraine</option>
											</select>
											</div>
										{!(b.isNext && zip.isEmpty) && (<input type="text" class="content__inputs__row_zip" placeholder="ZIP" maxlength="6" value={geo.zip == undefined ? zip.value : geo.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>)}
											{(b.isNext && zip.isEmpty) && (<input type="text" class="content__inputs__row_zip" placeholder="ZIP" maxlength="6" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} value={geo.zip == undefined ? zip.value : geo.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>)}
										</div>
									</div>
									{(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && 
										<a onClick={() => setToggleClass(3)} class="content__button" style={{cursor: 'pointer'}}>Continue</a>
									}
									{!(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && 
										<a class="content__button" style={{cursor: 'pointer'}}>Continue</a>
									}

								</div>
								<div class={toggleClass === 3 ? "content active-content" : "content"}>
									<div class="content__title">
										Payment
									</div>
									<div class="content__recipient">
										<div class="content__recipient_text">
											Cardholder Name
										</div>
									</div>
									<div class="content__inputs">
										<input type="text" class="content__inputs_cardholder" placeholder="Name as it appears on your card"/>
									</div>

									<div class="content__address">
										<div class="content__address_text">
											Card Number
										</div>
									</div>
									<div class="content__inputs">
										<input type="text" class="content__inputs_card" placeholder="XXXX XXXX XXXX XXXX XXXX"/>
									</div>
									<a class="content__button">
										Pay Securely
									</a>	
								</div>
							</div>
		</div>
	)
}
