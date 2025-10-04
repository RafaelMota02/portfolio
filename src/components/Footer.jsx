const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold">Rafael Mota</h3>
          <p className="text-gray-400 mt-2">Full Stack Developer & Quantum Computing Enthusiast</p>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rafael Mota. Built with React & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
