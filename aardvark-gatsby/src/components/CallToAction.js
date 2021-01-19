import React from 'react'

const CallToAction = props => {
	const call = props.call || 'Call To Action'
	const action = () =>
		props.action ? props.action : console.log('Call To Action Clicked')

	return (
		<div>
			{props.children}
			<button onClick={action}>{call}</button>
		</div>
	)
}

export default CallToAction
