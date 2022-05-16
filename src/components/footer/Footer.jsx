import React from "react";
import {
Box,
Container,
Row,
Copyright,
Heading,
} from "./StyledFooter";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
			<Heading>Welcome to Jason Li's Personal Website</Heading>
		</Row>
		<Row>
		{/* <Column>
			<Heading>About Me</Heading>
			<FooterLink href="#">Map</FooterLink>
			<FooterLink href="#">Schedule</FooterLink>
		</Column> */}
		</Row>
		<Row>
			<Copyright>Copyright © 2022 Personal Blog</Copyright>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
