import React from 'react'
import { Helmet } from 'react-helmet'


const SEO = (props) => {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>{props.title}</title>
				<description>{props.description}</description>
			</Helmet>
			{props.children}
		</>
	)
}

export default SEO