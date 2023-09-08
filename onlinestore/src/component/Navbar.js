import {Button, Container, Navbar, Modal} from 'react-bootstrap'

function NavbarComponents() {

      return (
        <Navbar>
          <Navbar.Brand href ='/'>Ecommerce Store</Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button>Cart 0 Items</Button>
            </Navbar.Collapse>  
        </Navbar>
      )
}
export default NavbarComponents;
