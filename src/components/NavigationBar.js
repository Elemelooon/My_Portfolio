import {Container, Nav, Navbar} from 'react-bootstrap';

const NavigationBar = () => {
    return ( 
        <>
        <Navbar className="bg-dark p-3 sticky-top navi">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link href="#projects" className='text-spaces px-2'>Projects</Nav.Link>
            <Nav.Link href="#about" className='text-spaces px-2'>About</Nav.Link>
            <Nav.Link href="#contact" className='text-spaces px-2'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
     );
}
 
export default NavigationBar;