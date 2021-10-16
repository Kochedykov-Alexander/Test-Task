import React, {useContext, useEffect, useState} from 'react'
import sentContext from '../../shared/context';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useIdentificationCard } from '../../hooks/useIdentificationCard';
import { useInput } from '../../hooks/useInput';
import InputMask from "react-input-mask";
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//import sentContext from '../../shared/context';

interface TabsProps {
	children?: React.ReactChild | React.ReactNode,
	geolocation: Object
}

const Tabs: React.FC = ({geolocation} : TabsProps) => {

	const geo = undefined;
	const {state, setState} = useContext(sentContext);

	const [toggleClass, setToggleClass] = useState<number>(1);
	const [cardType, setCardType] = useState<string>('');

	const full_name = useInput('', {isEmpty: true, minLength: 3});
	const street = useInput('', {isEmpty: true});
	const phone = useInput('', {isEmpty: true});
	const apt = useInput('', {});
	const city = useInput('', {isEmpty: true});
	const country = useInput('Country', {isEmpty: true});
	const zip = useInput('', {isEmpty: true});
 	const b = useInput('', {});
	const card = useInput('', {isEmpty: true});
	const expire = useInput('', {isEmpty: true});
	const security = useInput('', {isEmpty: true});
	const email = useInput('', {isEmail: false});
	

	useEffect(() => {
		setCardType(useIdentificationCard(card.value));
	}, [card.value])

	// // function clicked() :void {
	// // 	document.getElementById("editor").classList.remove('content__inputs__row_country');
	// // 	document.getElementById("editor").classList.add('content__inputs__row_country_new');
	// }



	return (

		<div>
			<div className="main-block__form__tabs">
				<div className={toggleClass === 1 ? "tabs active-tabs" : "tabs"} id="tab1" onClick={() => setToggleClass(1)}>Shipping</div>
				<div className={toggleClass === 2 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleClass(2)}>Billing</div>
				<div className={toggleClass === 3 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleClass(3)}>Payment</div>
			</div>
						
							<div className="main-block__form__tabs__content">
								<div className={toggleClass === 1 ? "content active-content" : "content"}>
									<div className="content__title">
										Shipping info
									</div>
									
									<div className="content__recipient">
										<div className="content__recipient_text">
											Recipient
										</div>
									</div>
									<div className="content__inputs">

										{((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<div className='message'>Please enter recipient full name and min length = 3</div>)}
										<input type="text" className={((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) ? "content__inputs_fullname focused" : "content__inputs_fullname"} placeholder="Full Name" value={full_name.value} onChange={(e) => full_name.onChange(e)} onBlur={(e) => full_name.onBlur(e)}/>
										
							
										<div className="content__inputs_daytime_container">
											{((b.isNext && phone.isEmpty)) && (<div className='message'>Please enter recipient phone in format +7 (000) 000 00 00</div>)}
												<InputMask name="phone" mask="+7\(999) 999-99-99" type="tel" className={((b.isNext && phone.isEmpty)) ? "content__inputs_daytime focused" : "content__inputs_daytime"} id="phoneNumber" placeholder="Datetime Phone" value={phone.value} onChange={(e) => phone.onChange(e)} onBlur={(e) => phone.onBlur(e)}/>
											<label htmlFor ="content__inputs_daytime_label">For delivery questions only</label>
										
									</div>
									</div>

									<div className="content__address">
										<div className="content__address_text">
											Address
										</div>
									</div>
									<div className="content__inputs">

										{((b.isNext && street.isEmpty)) && (<div className='message'>Please enter recipient street</div>)}
										<input type="text" className={((b.isNext && street.isEmpty)) ? "content__inputs_street focused" : "content__inputs_street"} placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>
										
										<input type="text" className="content__inputs_apt" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" value={apt.value} onChange={(e) => apt.onChange(e)} onBlur={(e) => apt.onBlur(e)}/>

									<div className="content__inputs_icon">
						
										<input type="text" name="city" className={((b.isNext && city.isEmpty)) ? "content__inputs_city focused" : "content__inputs_city"} placeholder="City" value={geolocation.city == '' ? city.value : geolocation.city} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>
											<FontAwesomeIcon icon={faCrosshairs} style={{position: 'absolute', top: '40%', right: '10px', fontSize: '20px', cursor: 'pointer'}}/>
									</div>
										<div className="content__inputs__row">
										<div className="content__inputs__row_count">
											<div className="content__inputs__row_country" id="editor">
											

											<input type="text" className="select" placeholder="Country" value={geolocation.country == '' ? "" : geolocation.country} name="city" list="cityname" onChange={(e) => country.onChange(e)} onBlur={(e) => country.onBlur(e)}/>
												<datalist id="cityname">
													<option value="Boston"/>
													<option value="Cambridge"/>
												</datalist>
											
											</div>
											</div>
											<input type="text" className={((b.isNext && zip.isEmpty)) ? "content__inputs__row_zip focused" : "content__inputs__row_zip"} placeholder="ZIP" value={geolocation.zip == '' ? zip.value :  geolocation.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>
										</div>
									</div>
									{(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && 
										<a onClick={() => setToggleClass(2)} className="content__button" style={{cursor: 'pointer'}}>Continue</a>
									}
									{!(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && 
										<a className="content__button" style={{cursor: 'pointer'}}>Continue</a>
									}
									
								</div>
								<div className={toggleClass === 2 ? "content active-content" : "content"}>
									<div className="content__title">
										Billing Information
									</div>
									<a onClick={() => setToggleClass(1)} className="content__recipient_link">
											Same as shipping
									</a>
									<div className="content__recipient">
										<div className="content__recipient_text">
											Billing Contact
										</div>
										
									</div>
									<div className="content__inputs">

									{((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<div className='message'>Please enter recipient full name and min length = 3</div>)}
										<input type="text" className={((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) ? "content__inputs_fullname focused" : "content__inputs_fullname"} name="name" placeholder="Full Name" value={full_name.value} onChange={(e) => full_name.onChange(e)} onBlur={(e) => full_name.onBlur(e)}/>

									{(b.isNext && email.isEmailError) && (<div className='message'>Please enter correct email</div>)}
										<input type="text" className={((b.isNext && email.isEmailError)) ? "content__inputs_email focused" : "content__inputs_email"} placeholder="Email Address" value={email.value} onChange={(e) => email.onChange(e)} onBlur={(e) => email.onBlur(e)} name="email"/>
											
									</div>
									

									<div className="content__address">
										<div className="content__address_text">
											Billing Address
										</div>
									</div>
									<div className="content__inputs">
									{((b.isNext && street.isEmpty)) && (<div className='message'>Please enter recipient street</div>)}
										<input type="text" className={((b.isNext && street.isEmpty)) ? "content__inputs_street focused" : "content__inputs_street"} placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>
										
											<input type="text" className="content__inputs_apt" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" value={apt.value} onChange={(e) => apt.onChange(e)} onBlur={(e) => apt.onBlur(e)}/>
										
										<div className="content__inputs_icon">
										<input type="text" name="city" className={((b.isNext && city.isEmpty)) ? "content__inputs_city focused" : "content__inputs_city"} placeholder="City" value={geo == undefined ? city.value : geo.city} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>
											<FontAwesomeIcon icon={faCrosshairs} style={{position: 'absolute', top: '40%', right: '10px', fontSize: '20px', cursor: 'pointer'}}/>
										</div>
										<div className="content__inputs__row">
										<div className="content__inputs__row_count">
											<div className="content__inputs__row_country" id="editor">
											

											<input type="text" className="select" placeholder="Country" value={geolocation.country == '' ? "" : geolocation.country} name="city" list="cityname" onBlur={(e) => country.onBlur(e)}/>
												<datalist id="cityname">
													<option value="Boston"/>
													<option value="Cambridge"/>
												</datalist>
											
											</div>
											</div>
											<input type="text" className={((b.isNext && zip.isEmpty)) ? "content__inputs__row_zip focused" : "content__inputs__row_zip"} placeholder="ZIP" value={geolocation.zip == '' ? zip.value :  geolocation.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>
										</div>
									</div>
									{(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && 
										<a onClick={() => setToggleClass(3)} className="content__button" style={{cursor: 'pointer'}}>Continue</a>
									}
									{!(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && 
										<a className="content__button" style={{cursor: 'pointer'}}>Continue</a>
									}

								</div>
								<div className={toggleClass === 3 ? "content active-content" : "content"}>
									<div className="content__title">
										Payment
									</div>
									<div className="content__ssl">
										<div className="content__ssl_logo">
											<img src='../../lock.png' alt="" />
										</div>
										<div className="content__ssl_text">This is a secure 128-bit SSL encrypted payment</div>
									</div>
									<div className="content__recipient">
										<div className="content__recipient_text">
											Cardholder Name
										</div>
									</div>
									<div className="content__inputs">
									{((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<div className='message'>Please enter recipient full name and min length = 3</div>)}
										<input type="text" className={((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) ? "content__inputs_fullname focused" : "content__inputs_fullname"} placeholder="Name as it appears on your card" value={full_name.value} onChange={(e) => full_name.onChange(e)} onBlur={(e) => full_name.onBlur(e)}/>
									</div>

									<div className="content__address">
										<div className="content__address_text">
											Card Number
										</div>
									</div>
									<div className="content__inputs input_card">
										<InputMask mask="9999 9999 9999 9999" name="card" type="text" className="content__inputs_card" placeholder="XXXX XXXX XXXX XXXX XXXX" value={card.value} onChange={(e) => card.onChange(e)} onBlur={(e) => card.onBlur(e)}/>
										<img src={cardType} alt="" />
									</div>
									
									<div className="content__cards__info">
										<div className="content__cards__info__expire">
											<div className="content__cards_info__expire_text">Expire Date</div>
											<InputMask mask="99 / 99" placeholder="MM / YY" type="text" className="content__cards_info__expire_input" name="message" value={expire.value} onChange={(e) => expire.onChange(e)} onBlur={(e) => expire.onBlur(e)}/>
										</div>
										<div className="content__cards__info__security">
											<div className="content__cards_info__security_text">Security Code</div>
											<InputMask mask="999" type="text" placeholder="XXX" className="content__cards_info__security_input" name="subject" value={security.value} onChange={(e) => security.onChange(e)} onBlur={(e) => security.onBlur(e)}/>
										</div>
									</div>
									{(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card.inputValid && security.inputValid && expire.inputValid) && 
									<button className="content__button" type="submit">
										Pay Securely
									</button>
									}
									{!(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card.inputValid && security.inputValid && expire.inputValid) && 	
									<button className="content__button disabled" disabled>
										Pay Securely
									</button>
									}
								</div>
							</div>
							
						
		</div>
	)
}

export default Tabs;
