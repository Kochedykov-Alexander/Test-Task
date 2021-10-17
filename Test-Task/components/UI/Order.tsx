import React, {useContext, useEffect, useState} from 'react'
import styles from '../../styles/Order.module.scss'
import { useQuery } from '@apollo/client';
import { GET_ORDER_BY_ID } from '../../query/order';

interface OrderState {
	order: number;
	// id: number;
	// full_name: string;
    // phone: string;
    // email: string;
    // city: string;
	// data: Object
	// street: string;
    // apt: string;
	// zip: string;
	// card_number: string;
	// expire_date: string;
	// security_code: string;
}

const Order: React.FC<OrderState> = ({order}) => {

	
	const [selectedOrder, setSelectedOrder] = useState();
	console.log(order)
	const {data, loading, error, refetch} = useQuery(GET_ORDER_BY_ID, {
		variables: {
			order
		},
		pollInterval: 500,
	});

	useEffect(() => {
		if (!loading) {
			setSelectedOrder(data.getOrderById)
		}	
	}, [data])
	
	if (loading) {
		return <h1>Loading...</h1>
	}

	return (
		
		<div className={styles.order}>
			{selectedOrder && (
			<div>
			<div className={styles.order__title}>
				{selectedOrder.full_name}, Thank You for your order!
			</div>
			<div className={styles.order__number}>
				Order number is: {selectedOrder.id}
			</div>
			<div className={styles.order__text}>
				Your will recieve an email confirmation shortly to <a href="">{selectedOrder.email}</a>
			</div>
			<div className={styles.order__estimated}>
				Estimated delivery Day is <p className={styles.bold}>Friday 1st April 2016</p>
			</div>	
			<a className={styles.order__print_recipe}>Print Recipe</a>
			</div>
			)}
		</div>
		
	)
}

export default Order;
