import React from "react";
import { ContactHero } from "../../components/contact/Hero";
import ContactForm from "../../components/contact/ContactForm";
import { ContactInfo } from "../../components/contact/ContactInfo";
import ContactMap from "../../components/contact/ContactMap";

const ContactPage = () => {
    return (
        <div className="min-h-screen">
            <ContactHero />
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactForm />
                    <ContactInfo />
                </div>
                <ContactMap />
            </div>
        </div>
    );
};

export default ContactPage; 