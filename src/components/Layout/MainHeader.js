import classes from './MainHeader.module.css';
import CartButton from '../Cart/CartButton';
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
import {useIsBigScreenMode} from "../../utils/responsive";
import MobileHeader from "./MobileHeader";


const Seperator = () => {
    return <div className={classes.separator}/>;
}


const MainHeader = (props) => {
    const bigScreenMode = useIsBigScreenMode();

    if (!bigScreenMode) {
        return (
            <MobileHeader/>
        )
    }

    return (
        <header
            style={{
                height: "12rem",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "flex-start",
                backgroundColor: '#F0F0F0',
                width: "calc(100vw)",
                marginRight: -20,
                marginTop: -20,
                padding: 6,
                backgroundImage: 'url(/img/b1.png)',
            }}
        >
            <div style={{flex: 1, display: "flex", flexDirection: 'row',flexGrow : 1}}>
                <Navbar collapseOnSelect className='p-5 ' sticky="top" expand="lg" variant="dark"
                        style={{flexWrap: "nowrap", whiteSpace: "nowrap",flexGrow : 1, flexDirection: 'row', marginTop: 50}}>
                    <Navbar.Collapse id="responsive-navbar-nav" className='d-flex'
                                     style={{flexDirection: 'row', flexWrap: "nowrap"}}>

                        <Nav style={{flexDirection: 'row'}}>
                            <Nav.Link eventKey={4} href="#memes" className="mb-4">
                                <CartButton/>
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="#memes">
                                <div className={classes["active-button"]}>ورود/عضویت</div>
                            </Nav.Link>
                            <Nav.Link className='header-title' href="#deets">رستوران آریایی</Nav.Link>

                            <Seperator/>
                            <span className="block-example">
                               <Container className="pt-3">
                                   <Row style={{color: '#505050', fontWeight: 'bold', flexWrap: "nowrap"}}>
                                     <Col>
                                         <div className="header-item-text">صفحه اصلی</div>
                                     </Col>
                                     <Col>
                                         <div className="header-item-text">درباره ما</div>
                                     </Col>
                                     <Col>
                                         <div className="header-item-text">تماس با ما</div>
                                     </Col>
                                   </Row>
                               </Container>
                              </span>
                            <Seperator/>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Brand href="#home" className='d-flex p-5' style={{
                        flexWrap: "nowrap",
                        whiteSpace: "nowrap",
                        flexDirection: 'row',
                        marginBottom: 22
                    }}>
                        <Row style={{color: '#595959', display: 'flex', flexWrap: "nowrap", flexDirection: 'row'}}>
                            <Col sm><AiOutlineMail size={25}/></Col>
                            <Col sm><AiOutlineFacebook size={25}/></Col>
                            <Col><AiOutlineInstagram className="" size={25}/></Col>
                        </Row>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{
                        backgroundColor: 'black',
                        alignContent: 'flex-end',
                        justifyContent: 'flex-end'
                    }}/>
                </Navbar>
            </div>
        </header>
    )
};

export default MainHeader;
