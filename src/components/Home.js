import React, { useContext, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Table } from 'react-bootstrap';
import { AuthContext } from '../App';
import { AiTwotoneWarning } from "react-icons/ai";
import './Home.css'

const TestSiteKey = "6Lewsn0jAAAAANMHR6Rp-atUcT2fQi5nuJRWVjEt";

const Home = () => {
    const value = useContext(AuthContext);
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div >
            <h5 className='text-center py-4 text-white fw-bold' style={{ backgroundColor: '#9B1FE9' }}>Notice Here</h5>
            <div className='p-5 container sm-row'>
                <h2 className='fs-1' style={{ color: '#9B1FE9', fontWeight: 'bold' }}>Request testnet LINK</h2>
                <p className='w-100  pb-5 col-4 text-muted'> Get testnet LINK for an account on one of the supported blockchain testnets so you can <br /> create and test your own oracle and Chainlinked smart contract</p>
                <div style={{ backgroundColor: '#fff' }} className="p-5">
                    <p className='fs-7 p-3' style={{ backgroundColor: '#eef2fe' }}><span className=''><AiTwotoneWarning></AiTwotoneWarning></span>Your wallet is connected to <span className='fw-bold'>{value ? value : "name"}</span>, so you are requesting <span className='fw-bold'>{value ? value : "name"}</span> Link/ETH.</p>
                    <div className="mb-3 w-50 ">
                        <label for="exampleFormControlInput1" className="form-label fw-bold" style={{ color: '#9B1FE9' }}>Wallet Address</label>
                        <input type="email" className="form-control" placeholder="Wallet Address..." />
                        <label for="exampleFormControlInput1" className="form-label fw-bold" style={{ color: '#9B1FE9' }}>Request Type</label><br />
                        <div className='d-flex'>
                            <p className='pb-2 pt-2 me-3 ps-2 fw-light border border-1' style={{ width: "295px", paddingRight: "100px", backgroundColor: '#eaebed' }} >20 Test Link</p>
                            <p style={{ width: "295px", paddingRight: "100px", backgroundColor: '#eaebed' }} className=' ps-2 fw-light border border-1 pb-2 pt-2'>0.5 ETH</p>
                        </div>
                    </div>

                    <ReCAPTCHA className='mt-4' sitekey={TestSiteKey} onChange={onChange} />
                    <Button className='my-3' style={{ backgroundColor: '#9B1FE9' }}>Send Request</Button>{' '}
                    <p className='fw-bold'>Request History </p>
                    <div className='pt-4 bg-white'>

                        <div>
                            <div className="d-flex">
                                <div>
                                    <button style={{ width: "290px", }}
                                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                        onClick={() => toggleTab(1)} >
                                        ETH Transaction History
                                    </button>
                                </div>
                                <div className='w-50 ms-3'>
                                    <button
                                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                        onClick={() => toggleTab(2)}
                                    >
                                        TestLink Transaction History
                                    </button>

                                </div>
                            </div>
                            <div className="container1">


                                <div className="content-tabs">
                                    <div
                                        className={toggleState === 1 ? "content  active-content" : "content"}
                                    >
                                        <div className='w-50'>
                                            <Table className='table table-bordered' >
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>Time</th>
                                                        <th>Amount</th>
                                                        <th>Hash</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>12:30 AM</td>
                                                        <td>487</td>
                                                        <td>4s8er5s5fe57rjmxnfuewrurks</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>10:30 AM</td>
                                                        <td>875</td>
                                                        <td>sf7s7ers4e7r7wser</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>11:30 AM</td>
                                                        <td>797</td>
                                                        <td>se4s7er7</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>

                                    <div
                                        className={toggleState === 2 ? "content  active-content" : "content"}
                                    >
                                        <div className='w-50'>
                                            <Table className='table table-bordered' >
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>Time</th>
                                                        <th>Amount</th>
                                                        <th>Hash</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>08:30 AM</td>
                                                        <td>748</td>
                                                        <td>7s7effkeurusue4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>10:23 AM</td>
                                                        <td>874</td>
                                                        <td>sfe7r7sr4fer</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>11:10 AM</td>
                                                        <td>797</td>
                                                        <td>s4e7s8er</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;


