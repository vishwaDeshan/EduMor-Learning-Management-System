import React from 'react';
import SuccesImg from '../../Assets/ThankYou.jpg';
import { useNavigate } from 'react-router-dom';
import withAuth from '../../hoc/withAuth';

const Success = () => {
        const navigate = useNavigate();
      
        const handleBackToDashboard = () => {
          navigate('/');
        };
  return (
    <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={SuccesImg} alt="Thank You!" style={{ width: '500px' }} />
      <p style={{ textAlign: 'center', fontSize: '24px', marginTop: '20px' }}>Payment successfully completed!</p>
      <button
        className="checkout-button"
        type="button"
        class="btn btn-primary"
        style={{ borderRadius: "10px" }}
        onClick={handleBackToDashboard}
      >
        Back To Dashboard
      </button>
      <p></p>
    </div>
  );
};

export default withAuth(Success);
