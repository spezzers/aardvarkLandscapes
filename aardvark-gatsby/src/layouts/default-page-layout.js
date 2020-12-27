import './default-page-layout.css'
import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'

const maxPageWidth = '800px'

const Page = styled.div`
display: flexbox;
justify-content: center;
flex-direction: column;
max-width: 100vw;
flex-wrap: wrap;
`
const MainContent = styled.div`
max-width: ${maxPageWidth};
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr ));
`
const LogoContainer = styled.div`
max-width: ${maxPageWidth};
width: 100%;
margin: 0 auto;
align-self: center;
`

export default function Layout({ children }) {
	return (
		<Page>
			<LogoContainer>
				<Logo size='4' hideTagline={false} maxPageWidth={maxPageWidth} />
			</LogoContainer>
			<MainContent maxPageWidth={maxPageWidth}>
				{children}
			</MainContent>
		</Page>
	)
}
