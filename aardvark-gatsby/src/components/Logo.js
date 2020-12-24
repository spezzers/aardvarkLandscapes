import React from 'react'
import styled from 'styled-components'
import { colors } from '../globalStyles'
import sprite from '../images/logo/LogoSpriteC50L36R23.gif'

const LogoWrapper = styled.div`
	font-family: Arial, sans-serif;
	display: flexbox;
	align-items: center;
	margin-left: ${props => 0.2 * props.size}rem;
`
const Tagline = styled.div`
	font-family: Arial, sans-serif;
`

const LogoType = styled.div`
	font-size: ${props => props.size * 0.62}rem;
	font-weight: bold;
	position: absolute;
	margin-left: ${props => 1.12 * props.size}rem;
`

const LogoMark = styled.div`
	height: ${props => props.size}rem;
	width: ${props => props.size}rem;
	margin-right: ${props => 0.15 * props.size}rem;
	#logoBg {
		height: ${props => props.size}rem;
		width: ${props => props.size}rem;
		background-color: ${colors.orange};
		transform: skewX(-21.5deg);
		position: absolute;
	}
	#sprite {
		height: ${props => props.size}rem;
		width: ${props => props.size}rem;
		background: url(${sprite});
		position: absolute;
		z-index: 250;
		background-size: cover;
	}
	#sprite.in {
		@keyframes aardvarkIn {
			from {
				background-position-x: 0;
			}
			to {
				background-position-x: 49.375%;
			}
		}
		animation: aardvarkIn 1.5s infinite steps(39);
	}
	#sprite.out {
	}
`
const Logo = props => {
	return (
		<>
			<LogoWrapper size={props.size}>
				<LogoMark size={props.size}>
					<div id='logoBg' size={props.size} />
					<div id='sprite' class='in' size={props.size}></div>
				</LogoMark>
				<LogoType id='bizName' size={props.size}>
					Aardvark
				</LogoType>
			</LogoWrapper>
			<Tagline id='tagline'>Landscape Gardening Services</Tagline>
		</>
	)
}

export default Logo
