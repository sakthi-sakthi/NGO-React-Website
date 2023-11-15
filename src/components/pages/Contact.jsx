import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from '../header';
import Footer from '../footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiUrl from '../API';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || formData.name.length < 3) {
            toast.error("Please enter a valid name with at least 3 letters.");
            return;
        }
        if (/[^a-zA-Z. ]/.test(formData.name)) {
            toast.error("Only letters and dot are allowed in the name.");
            return;
        }
        if (/\d/.test(formData.name)) {
            toast.error("Name should not contain numbers.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (!formData.phone || !/^\d+$/.test(formData.phone)) {
            toast.error("Please enter a valid phone number with only numbers.");
            return;
        }
        if (formData.phone.length !== 10) {
            toast.error("Phone number must be exactly 10 digits long.");
            return;
        }
        if (!formData.message) {
            toast.error("Please enter your message.");
            return;
        }
        if (!recaptchaValue) {
            toast.error('Please complete the reCAPTCHA verification.');
            return;
        }

        try {
            const response = await fetch(`${ApiUrl}/store/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });

            setRecaptchaValue(null);

            toast.success('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            <Header />
            <div className="main-content">
                <div className="rs-breadcrumbs bg-6">
                    <div className="container">
                        <div className="content-part text-center">
                            <h1 className="breadcrumbs-title white-color mb-0">Contact</h1>
                        </div>
                    </div>
                </div>
                <div id="rs-contact" className="rs-contact inner pt-100 md-pt-80">
                    <div className="container">
                        <div className="content-info-part mb-60">
                            <div className="row gutter-16">
                                <div className="col-lg-4 md-mb-30">
                                    <div className="info-item">
                                        <div className="icon-part">
                                            <i className="fa fa-at" />
                                        </div>
                                        <div className="content-part">
                                            <h4 className="title">Phone Number</h4>
                                            <a href="tel:+088589-8745">(+088)589-8745</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 md-mb-30">
                                    <div className="info-item">
                                        <div className="icon-part">
                                            <i className="fa fa-envelope-o" />
                                        </div>
                                        <div className="content-part">
                                            <h4 className="title">Email Address</h4>
                                            <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="info-item">
                                        <div className="icon-part">
                                            <i className="fa fa-map-o" />
                                        </div>
                                        <div className="content-part">
                                            <h4 className="title">Office Address</h4>
                                            <p>228 Main Street, Georgia, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-part">
                            <div className="row md-col-padding">
                                <div className="col-md-5 custom1 pr-0">
                                    <div className="img-part" />
                                </div>
                                <div className="col-md-7 custom2 pl-0">
                                    <div id="form-messages" />
                                    <form id="contact-form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    required=""
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="E-mail"
                                                    required=""
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    required=""
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <textarea
                                                    name="message"
                                                    placeholder="Your Message Here"
                                                    required=""
                                                    defaultValue={""}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <ReCAPTCHA
                                                    sitekey="6LdDXxApAAAAACXkbXcaJQBh2Jt4F60qHtZ2dztr"
                                                    onChange={handleRecaptchaChange}
                                                />
                                                <br />
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="readon modify" disabled={isSubmitting}>
                                                    {isSubmitting ? (
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    ) : (
                                                        'Submit Now'
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="g-map mt-100 md-mt-80">
                        <iframe src="https://maps.google.com/maps?q=37.803467%2C%20-122.472369&t=&z=13&ie=UTF8&iwloc=&output=embed" title='uac'/>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    )
}

export default Contact
