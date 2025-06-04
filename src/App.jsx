import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/footer.jsx';
import EnquiryForm from './components/Contact/Enquiryform.jsx';

const App = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const openEnquiry = () => setShowEnquiry(true);
  const closeEnquiry = () => setShowEnquiry(false);

  return (
    <>
      <Navbar onEnquiryClick={openEnquiry} />
      {showEnquiry && <EnquiryForm onClose={closeEnquiry} />}
      <Footer />
    </>
  );
};

export default App;
