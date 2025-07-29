import React from 'react';

const Contact = () => {
    return (
        <div className='bg-gray-500 min-h-screen'>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 mt-20">Contact Us 📞</h1>
            <p className="mb-4">We would love to hear from you! Please fill out the form below or reach out to us using the contact details provided.</p>
            
            <form className="mb-8">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full" type="text" id="name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full" type="email" id="email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea className="border border-gray-300 rounded-md p-2 w-full" id="message" rows="4" required></textarea>
                </div>
                <button className="bg-blue-500 text-white rounded-md px-4 py-2" type="submit">Send Message</button>
            </form>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Our Contact Details</h2>
                <p>Email: olakanmilois@gmail.com</p>
                <p>Phone: <a href="tel:+2349016491032">+234 901 649 1032</a></p>
                <p>Address: The mission house, near the ECWA church, Ipetu, Kwara State, Nigeria.</p>
                <a href="https://wa.me/2349016491032?text=Hello%20WOLOM%2C%20I%27d%20like%20to%20connect!" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">09016491032</a>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Find Us Here</h2>
                <iframe 
                    className="w-full h-64" 
                    title="WOLOM Church Location"
                    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d505162.6978370941!2d4.5716858!3d8.4424884!3m2!1i1024!2i768!4f13.1!2m1!1sThe%20mission%20house%20near%20the%20ECWA%20church%20Ipetu%20Kwara%20State%20Nigeria!5e0!3m2!1sen!2sng!4v1753722630515!5m2!1sen!2sng" 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
        </div>
    );
};

export default Contact;