import './default-page-layout.css'
import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'

const maxPageWidth = '800px'

const Page = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 100%;
	flex-wrap: wrap;
	box-sizing: border-box;
	padding-top: 1rem;
`
const MainContent = styled.div`
	max-width: ${maxPageWidth};
	display: block;
	width: 100%;
	/* align-items: center; */
	box-sizing: border-box;
`
const LogoContainer = styled.div`
	max-width: ${maxPageWidth};
	width: 100%;
	display: block;
	margin: 0 auto;
	align-self: center;
`

export default function Layout({ children }) {
	return (
			<Page>
				<LogoContainer>
					<Logo size='4' hideTagline={false} maxPageWidth={maxPageWidth} />
				</LogoContainer>
				<MainContent maxPageWidth={maxPageWidth}>{children}</MainContent>
			</Page>
	)
}
