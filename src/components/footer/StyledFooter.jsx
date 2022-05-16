import styled from 'styled-components';

export const Box = styled.div`
padding: 10px;
width: 100%;
background-color: #0f3460;
color: #fff;
margin: 0px 0px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	margin: 0 auto;
	
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: flex;
justify-content: center;
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 16px;
text-decoration: none;
opacity: 0.5;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.h1`
font-size: 20px;
color: #fff;
margin-top: 20px;
margin-bottom: 15px;
font-weight: bold;
`;

export const Copyright = styled.span`
opacity: 0.5;
`;
