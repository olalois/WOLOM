import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-zinc-300 text-zinc-900 py-1">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Modern Church. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://web.facebook.com/solomon.braimoh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
                    <a href="https://www.linkedin.com/in/olakanmi-lois-0724a1271/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
                    <a href="hhttps://www.instagram.com/ola_k_lois/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;