import ReduxProvider from './Redux/Provider';

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}