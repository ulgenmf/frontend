/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				mobile: "300px",
				tablet: "450px",
				pc: "1200px",
			},
		},
	},
	plugins: [],
};
