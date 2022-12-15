import React, { useContext } from 'react';
import { AuthContext } from '../App';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import ModalBody from './ModalBody';
import { FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";



const Header = () => {
  const [data, setData] = useContext(AuthContext);
  const [modalShow, setModalShow] = React.useState(false);

  const handleSelect = (element) => {
    setData(element)

  }

  return (
    <Navbar collapseOnSelect expand="lg"  >
      <Container className='py-2 '>
        <Navbar.Brand><Link to='/' style={{ color: '#9B1FE9', textDecoration: 'none' }} className='fw-bold'>Faucets</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <NavDropdown title={data ? data : "Select Name"} style={{ border: '1px solid gray' }} id="collasible-nav-dropdown" onSelect={handleSelect}>
              <NavDropdown.Item eventKey="Arbitrum Rinkeby"> <img src={require("../asset/a.png")} style={{ height: '15px', width: '15px' }} alt=" " />  Arbitrum Rinkeby</NavDropdown.Item>
              <NavDropdown.Item eventKey="Avalanche Fuji">  <img src={require("../asset/b.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Avalanche Fuji</NavDropdown.Item>
              <NavDropdown.Item eventKey="BNB Chain Testnet "><img src={require("../asset/c.png")} style={{ height: '15px', width: '15px' }} alt=" " /> BNB Chain Testnet</NavDropdown.Item>
              <NavDropdown.Item eventKey="Ethereum Rinkeby">  <img src={require("../asset/d.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Ethereum Rinkeby</NavDropdown.Item>
              <NavDropdown.Item eventKey="Fantom Testnet">  <img src={require("../asset/e.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Fantom Testnet</NavDropdown.Item>
              <NavDropdown.Item eventKey="Harmony Testnet">  <img src={require("../asset/f.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Harmony Testnet</NavDropdown.Item>
              <NavDropdown.Item eventKey="PQA Network Sokol">  <img src={require("../asset/g.png")} style={{ height: '15px', width: '15px' }} alt=" " /> POA Network Sokol</NavDropdown.Item>
              <NavDropdown.Item eventKey="Polygon Mumbai">  <img src={require("../asset/h.png")} style={{ height: '15px', width: '15px' }} alt=" " /> Polygon Mumbai</NavDropdown.Item>
            </NavDropdown>
            <Button className=' ms-3' variant="outline" onClick={() => setModalShow(true)} style={{ color: '#9B1FE9', border: '2px solid rgb(155, 31, 233)' }}> <FaWallet /> Collect Wallet</Button>{' '}
            <ModalBody show={modalShow} onHide={() => setModalShow(false)}></ModalBody>
            <DropdownButton variant="outline" className='text-center rounded ms-3 me-3' title={<CgProfile style={{ height: '30px', width: '30px', backgroundColor: "#6d7380", borderRadius: '5px' }} />} >
              <Dropdown.Item ><Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Log in</Link></Dropdown.Item>
              <Dropdown.Item ><Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link></Dropdown.Item>
              <Dropdown.Item ><Link to='/faq' style={{ textDecoration: 'none', color: 'black' }}>FAQ</Link></Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;