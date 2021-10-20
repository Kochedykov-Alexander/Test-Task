import {render, screen} from '@testing-library/react';
import React from 'react'
import Products from '../components/Products';
import MyApp from '../pages/_app';
import Index from '../pages/index';


describe("Test", () => {
	it("expect hello", () => {
		render(<MyApp/>)
		render(<Index/>)
		render(<Products/>);
		screen.debug();
		expect(screen.getByText(/Order summary/i)).toBeInTheDocument();
	})
})
