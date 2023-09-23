const Footer = () => {
  return (
    <div>
      <footer className="p-10 mt-20 bg-gray-800 text-base-content">
      <div className="footer max-w-5xl mx-auto text-gray-300">
      <aside>
          
         <h1 className="text-2xl font-semibold">CareerHub</h1>
         <p className="w-72 text-gray-500">
         There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
         </p>
         <img className="w-24" src="/src/assets/icons/social.png" alt="" />
        </aside>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <header className="footer-title">Product</header>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <header className="footer-title">Support</header>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developer</a>
        </nav>
        <nav>
          <header className="footer-title">Contact</header>
          <a className="link link-hover">524 Broadway, NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
      </div>
      </footer>
    </div>
  );
};

export default Footer;
