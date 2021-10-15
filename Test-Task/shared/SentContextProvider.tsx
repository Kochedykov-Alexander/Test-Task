import React from 'react'
import sentContext from './context';

export default function SentContextProvider({children}) {
	
	const [state, setState] = React.useState<boolean>(false);
	
	return (
	  <sentContext.Provider value={{state, setState}}>
		{children}
	  </sentContext.Provider>
	);
	
}
