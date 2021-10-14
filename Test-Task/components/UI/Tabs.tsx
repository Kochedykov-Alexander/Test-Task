import React, {useState, useEffect} from 'react';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useIdentificationCard } from '../../hooks/useIdentificationCard';
import { useInput } from '../../hooks/useInput';


const Tabs: React.FC = () => {


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
	const card = useInput('', {});
	


	useEffect(() => {
		setCardType(useIdentificationCard(card.value));
	}, [card.value])
	

	const geo = useGeolocation(); 


	return (
		<div>
			<div className="main-block__form__tabs">
				<div className={toggleClass === 1 ? "tabs active-tabs" : "tabs"} onClick={() => setToggleClass(1)}>Shipping</div>
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
										{!(b.isNext && phone.isEmpty) && (<input type="tel" className="content__inputs_daytime" placeholder="Datetime Phone" value={phone.value} onChange={(e) => phone.onChange(e)} onBlur={(e) => phone.onBlur(e)}/>)}
											{(b.isNext && phone.isEmpty) && (<div className='message'>Please enter recipient phone in format +7 (000) 000 00 00</div>)}
											{(b.isNext && phone.isEmpty) && (<input type="tel" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} className="content__inputs_daytime" placeholder="Datetime Phone" value={phone.value} onChange={(e) => phone.onChange(e)} onBlur={(e) => phone.onBlur(e)}/>)}
											<label htmlFor ="content__inputs_daytime_label">For delivery questions only</label>
										
									</div>
									</div>

									<div className="content__address">
										<div className="content__address_text">
											Address
										</div>
									</div>
									<div className="content__inputs">
									{!(b.isNext && street.isEmpty) && (<input type="text" className="content__inputs_street" placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>)}
										{(b.isNext && street.isEmpty) && (<div className='message'>Please enter recipient street</div>)}
										{(b.isNext && street.isEmpty) && (<input type="text" className="content__inputs_street" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>)}
										
										<input type="text" className="content__inputs_apt" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" value={apt.value} onChange={(e) => apt.onChange(e)} onBlur={(e) => apt.onBlur(e)}/>

									<div className="content__inputs_icon">
											
									{!(b.isNext && city.isEmpty) && (<input type="text" className="content__inputs_city" placeholder="City" value={geo.city == undefined ? city.value : geo.city} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>)}
										{(b.isNext && city.isEmpty) && (<input type="text" className="content__inputs_city" placeholder="City" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} value={geo.city == undefined ? city.value : geo.city} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>)}
											{/* <FontAwesomeIcon icon={faCrosshairs} style={{position: 'absolute', top: '40%', right: '10px', fontSize: '20px', cursor: 'pointer'}} /> */}
									</div>
										<div className="content__inputs__row">
											<div className="content__inputs__row_country">
											<select onChange={(e) => country.onChange(e)} onBlur={(e) => country.onBlur(e)}>
													<option value={geo.country == undefined ? country.value : geo.country} selected disabled>{(geo.country === undefined) ? country.value : geo.country}</option>
													<option value="Russia">Russia</option>
													<option value="USA">USA</option>
													<option value="UK">UK</option>
													<option value="Ukraine">Ukraine</option>
											</select>
											</div>
										{!(b.isNext && zip.isEmpty) && (<input type="text" className="content__inputs__row_zip" placeholder="ZIP"  value={geo.zip == undefined ? zip.value : geo.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>)}
											{(b.isNext && zip.isEmpty) && (<input type="text" className="content__inputs__row_zip" placeholder="ZIP" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} value={geo.zip == undefined ? zip.value : geo.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>)}
											
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
									<div className="content__recipient">
										<div className="content__recipient_text">
											Billing Contact
										</div>
									</div>
									<div className="content__inputs">

									{!((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<input type="text" className="content__inputs_fullname" placeholder="Full Name" value={full_name.value} onChange={(e) => full_name.onChange(e)} onBlur={(e) => full_name.onBlur(e)}/>)}
										{((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<div className='message'>Please enter recipient full name and min length = 3</div>)}
										{((b.isNext && full_name.isEmpty) || (b.isNext && full_name.isMinLengthError)) && (<input type="text" className="content__inputs_fullname" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} placeholder="Full Name" value={full_name.value} onChange={(e) => full_name.onChange(e)} onBlur={(e) => full_name.onBlur(e)}/>)}

										<input type="text" className="content__inputs_email" placeholder="Email Address"/>		
									</div>
									

									<div className="content__address">
										<div className="content__address_text">
											Billing Address
										</div>
									</div>
									<div className="content__inputs">
										{!(b.isNext && street.isEmpty) && (<input type="text" className="content__inputs_street" placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>)}
											{(b.isNext && street.isEmpty) && (<div className='message'>Please enter recipient street</div>)}
											{(b.isNext && street.isEmpty) && (<input type="text" className="content__inputs_street" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} placeholder="Street Address" value={street.value} onChange={(e) => street.onChange(e)} onBlur={(e) => street.onBlur(e)}/>)}
										
											<input type="text" className="content__inputs_apt" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" value={apt.value} onChange={(e) => apt.onChange(e)} onBlur={(e) => apt.onBlur(e)}/>
										
										<div className="content__inputs_icon">
									{!(b.isNext && city.isEmpty) && (<input type="text" className="content__inputs_city" placeholder="City" value={geo.city == '' ? geo.city : city.value} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>)}
										{(b.isNext && city.isEmpty) && (<input type="text" className="content__inputs_city" placeholder="City" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} value={geo.city == '' ? geo.city : city.value} onChange={(e) => city.onChange(e)} onBlur={(e) => city.onBlur(e)}/>)}
											{/* <FontAwesomeIcon icon={faCrosshairs} style={{position: 'absolute', top: '40%', right: '10px', fontSize: '20px', cursor: 'pointer'}} /> */}
										</div>
										<div className="content__inputs__row">
											<div className="content__inputs__row_country">
											<select onChange={(e) => country.onChange(e)} onBlur={(e) => country.onBlur(e)}>
													<option value={geo.country == undefined ? country.value : geo.country} selected disabled>{(geo.country === undefined) ? country.value : geo.country}</option>
													<option value="Russia">Russia</option>
													<option value="USA">USA</option>
													<option value="UK">UK</option>
													<option value="Ukraine">Ukraine</option>
											</select>
											</div>
										{!(b.isNext && zip.isEmpty) && (<input type="text" className="content__inputs__row_zip" placeholder="ZIP" value={geo.zip == undefined ? zip.value : geo.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>)}
											{(b.isNext && zip.isEmpty) && (<input type="text" className="content__inputs__row_zip" placeholder="ZIP" style={{backgroundColor: 'rgba(248, 231, 28, 0.07)'}} value={geo.zip == undefined ? zip.value : geo.zip} onChange={(e) => zip.onChange(e)} onBlur={(e) => zip.onBlur(e)}/>)}
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
									<div className="content__recipient">
										<div className="content__recipient_text">
											Cardholder Name
										</div>
									</div>
									<div className="content__inputs">
										<input type="text" className="content__inputs_cardholder" placeholder="Name as it appears on your card"/>
									</div>

									<div className="content__address">
										<div className="content__address_text">
											Card Number
										</div>
									</div>
									<div className="content__inputs">
										<input type="text" className="content__inputs_card" placeholder="XXXX XXXX XXXX XXXX XXXX" value={card.value} onChange={(e) => card.onChange(e)} onBlur={(e) => card.onBlur(e)}/>
										
									</div>
									<div>
										<img src={cardType} alt="" />
									</div>
									<a className="content__button">
										Pay Securely
									</a>	
								</div>
							</div>
		</div>
	)
}

export default Tabs;
