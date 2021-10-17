import {gql} from '@apollo/client'


export const CREATE_ORDER = gql `

	mutation createOrder($input: OrderInput) {
		createOrder(input: $input) {
			id, full_name, email, city, phone
		}
	}
	
`