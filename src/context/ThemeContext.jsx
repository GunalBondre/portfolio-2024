import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(true);

	const toggleTheme = () => {
		setIsDarkTheme((prevTheme) => !prevTheme);
	};

	useEffect(() => {
		const body = document.body;
		body.className = isDarkTheme ? 'dark-theme' : '';
	}, [isDarkTheme]);

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
