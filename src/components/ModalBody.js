import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalBody = (props) => {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>

      <Modal.Body>
        <h2 className='fw-bold'>Connect your wallet</h2>
        <div className='d-flex mb-5' >
          <div className='text-center p-5 m-2' style={{ backgroundColor: '#eef2fe' }}>
            <img src={require("../asset/MetaMask.png")} style={{ height: '90px', width: '90px' }} alt=" " />
            <h4 style={{ color: '#9B1FE9' }} className='fw-bold pt-3'>MetaMask</h4>
          </div>

          <div className='text-center pt-3 p-4 m-2' style={{ backgroundColor: '#eef2fe' }}>
            <img src={require("../asset/wallet.png")} style={{ height: '90px', width: '90px' }} alt=" " />
            <h4 style={{ color: '#9B1FE9' }} className='fw-bold pt-3'>WalletConnect</h4>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBody;