import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    
        
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">RJ Hospitals</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/About">ABOUT</Nav.Link>
                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        <NavDropdown title="Add" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><Link to="/viewdoctor"> Doctor</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><Link to="/View">Patient</Link></NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
              
            </Container>
        </Navbar>
      
     
  )
}

export default Home

 