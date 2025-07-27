// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className=" text-white text-center py-4 border-t border-sky-500 border-round">
      <p className="text-sm">&copy; {new Date().getFullYear()} Bug Tracker. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
