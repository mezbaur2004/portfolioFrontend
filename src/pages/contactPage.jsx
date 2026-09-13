import React from 'react';
import PageTopbar from '../components/main/pageTopbar.jsx';
import ContactForm from '../components/main/contactForm.jsx';
import Footer from '../components/main/footer.jsx';

const ContactPage = () => (
    <div className="page-shell">
        <PageTopbar />
        <main className="page-main">
            <ContactForm />
        </main>
        <Footer />
    </div>
);

export default ContactPage;
