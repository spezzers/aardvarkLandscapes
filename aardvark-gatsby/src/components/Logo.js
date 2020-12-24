import React from 'react'
import styled from 'styled-components'
import { colors } from '../globalStyles'
import sprite from '../images/logo/logoSprite_L36R24.png'

const LogoAndTagline = styled.div`
	max-width: ${props => 4.02 * props.size}rem;
	display: flexbox;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
`

const LogoWrapper = styled.div`
	font-family: Arial, sans-serif;
	display: flexbox;
	flex-direction: row;
	align-items: center;
	margin-left: ${props => 0.2 * props.size}rem;
	margin-bottom: ${props => 0.15 * props.size}rem;
`
const Tagline = styled.div`
	font-family: Arial, sans-serif;
	padding: 0.5rem 0.65rem;
	text-align: center;
	font-size: 1.1rem;
	letter-spacing: 0.03rem;
`

const LogoType = styled.div`
	font-size: ${props => props.size * 0.62}rem;
	font-weight: bold;
	margin-left: -${props => 0.02 * props.size}rem;
`

const LogoMark = styled.div`
	height: ${props => props.size}rem;
	width: ${props => props.size}rem;
	margin-right: ${props => 0.15 * props.size}rem;
	.logoBg {
		height: ${props => props.size}rem;
		width: ${props => props.size}rem;
		background-color: ${colors.orange};
		transform: skewX(-21.5deg);
		position: absolute;
	}
	.sprite {
		height: ${props => props.size}rem;
		width: ${props => props.size}rem;
		background: url(${sprite});
		position: absolute;
		z-index: 250;
		background-size: cover;
	}
	.sprite.in {
		@keyframes aardvarkIn {
			0% {
				background-position-x: 0%;
			}
			100% {
				background-position-x: 50%;
			}
		}
		animation: aardvarkIn 1.65s steps(36) 0.5s;
		animation-fill-mode: forwards;
	}
	.sprite.out {
		@keyframes aardvarkOut {
			from {
				background-position-x: 50%;
			}
			to {
				background-position-x: 100%;
			}
		}
		animation: aardvarkOut 0.95s steps(24) 0.5s;
		animation-fill-mode: both;
	}
	.sprite.on {
		background-position-x: 50%;
	}
`
const Logo = props => {
	return (
		<LogoAndTagline size={props.size}>
			<LogoWrapper size={props.size}>
				<LogoMark size={props.size}>
					<div className='logoBg' size={props.size} />
					<div className='sprite in' size={props.size}></div>
				</LogoMark>
				<LogoType className='bizName' size={props.size}>
					Aardvark
				</LogoType>
			</LogoWrapper>
			{props.hideTagline ? null : <Tagline>Landscape Gardening Services</Tagline>}
		</LogoAndTagline>
	)
}

export default Logo
