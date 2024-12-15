import React from "react";
import { useNavigate } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css"; // Import MDBootstrap CSS
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit"; // Import MDB components for layout

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to Login Page
    navigate("/");
  };

  return (
    <MDBContainer className="home-page">
      <MDBRow className="justify-content-center">
        {/* Welcome Section */}
        <MDBCol md="8" className="text-center py-5">
          <h1>Welcome to PhoneLab</h1>
          <p>Your trusted mobile repair solution</p>
          <p>
            We provide top-notch repair services for your phones. From cracked screens to battery replacements, we've got you covered.
          </p>
          <MDBBtn color="primary" size="lg" onClick={() => navigate("/services")}>
            Explore Our Services
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      {/* Services Section */}
      <MDBRow className="mt-5 text-center">
        <MDBCol md="4">
          <div className="service-card">
            <h3>Screen Repair</h3>
            <p>Cracked screen? We’ll make it look brand new.</p>
          </div>
        </MDBCol>
        <MDBCol md="4">
          <div className="service-card">
            <h3>Battery Replacement</h3>
            <p>Replace your old battery with a new one to keep your phone running smoothly.</p>
          </div>
        </MDBCol>
        <MDBCol md="4">
          <div className="service-card">
            <h3>Water Damage</h3>
            <p>We can help fix your phone if it’s water damaged.</p>
          </div>
        </MDBCol>
      </MDBRow>

      {/* About Us Section */}
      <MDBRow className="mt-5 text-center">
        <MDBCol md="12">
          <h2>About Us</h2>
          <p>
            At PhoneLab, we specialize in providing expert mobile repair services right at your doorstep. Our technicians are experienced and ready to assist you with any phone issue. Whether it's a cracked screen, battery issue, or anything else, we ensure quick and reliable repairs.
          </p>
        </MDBCol>
      </MDBRow>

      {/* Contact Section */}
      <MDBRow className="mt-5 text-center">
        <MDBCol md="12">
          <h2>Contact Us</h2>
          <p>Get in touch with us to book a repair or inquire about services.</p>
          <MDBBtn color="primary" size="lg" onClick={() => navigate("/contact")}>
            Contact Us
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      {/* Logout Button */}
      <div className="text-center mt-4">
        <button onClick={handleLogout} className="logout-button btn btn-danger">
          Logout
        </button>
      </div>
    </MDBContainer>
  );
}

export default Home;