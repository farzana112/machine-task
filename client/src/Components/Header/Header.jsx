import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { logOut } from '../../Store/userSlice';
const Header = () => {
    const userName=useSelector((state)=>state?.user?.user?.userName)
    console.log("header screen");
    console.log(userName)
    const dispatch=useDispatch()
    
  return (
   

    <header>
    

<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
  <Container className='justify-content-between'>
    <LinkContainer to='/'>
      <Navbar.Brand>MERN App</Navbar.Brand>
    </LinkContainer>
    {userName ? (
      <NavDropdown title={userName} id='username' style={{ color: 'red' }}>
       
        <NavDropdown.Item onClick={()=>dispatch(logOut())}>Logout</NavDropdown.Item>
      </NavDropdown>
    ) : (
      <Nav className='ms-auto'>
        <LinkContainer to='/login'>
          <Nav.Link>
            <FaSignInAlt /> Sign In
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to='/register'>
          <Nav.Link>
            <FaSignOutAlt /> Sign Up
          </Nav.Link>
        </LinkContainer>
      </Nav>
    )}
  </Container>
</Navbar>

  </header>
  );
};

export default Header;