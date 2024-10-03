import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#f8d6e0",
    padding: "50px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  };

  const sectionStyle = {
    width: "20%",
  };

  const headingStyle = {
    color: "#d47a87",
    marginBottom: "20px",
  };

  const ulStyle = {
    listStyleType: "none",
    padding: "0",
  };

  const liStyle = {
    marginBottom: "10px",
  };

  const linkStyle = {
    color: "#555",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const paragraphStyle = {
    marginBottom: "20px",
    color: "#555",
  };

  const buttonStyle = {
    backgroundColor: "#333",
    width:"300px",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  };

  const socialStyle = {
    marginTop: "20px",
  };

  const socialIconStyle = {
    marginRight: "10px",
    fontSize: "24px",
    color: "#555",
  };

  return (
    <footer style={footerStyle}>
      <div style={{ textAlign: "center" }}>
        <h3 style={headingStyle}>Stay Updated</h3>
        <p style={paragraphStyle}>
          Be the first to know about events, new content, products, or brands at gooders.
        </p>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#333")}
        >
          Subscribe to our newsletter
        </button>
        <div style={socialStyle}>
          <a href="#" style={socialIconStyle}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" style={socialIconStyle}>
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>

      <div style={contentStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Shop</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>All</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Accessories</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Apparel</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Jewellery</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Homeware</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Brands</a>
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>About</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Who we are</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Values</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Be a gOOOder</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Make It Good</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Milano is Good</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Journal</a>
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Information</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Contact Us</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Terms of service</a>
            </li>
            <li style={liStyle}>
              <a href="#" style={linkStyle}>Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
