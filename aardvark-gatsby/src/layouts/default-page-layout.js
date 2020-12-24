import './default-page-layout.css'
import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
	max-width: 600px;
`

export default function Layout({ children }) {
	return <Page>{children}</Page>
}
