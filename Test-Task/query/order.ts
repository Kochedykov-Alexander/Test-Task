import {gql} from '@apollo/client'


export const GET_ORDER_BY_ID = gql `

	query getOrderById($order: ID!) {
			getOrderById(id: $order) {
				id, full_name, email
			}
	}
	
`