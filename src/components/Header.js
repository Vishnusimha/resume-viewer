import React from "react";

const Header = ({ name, title, contact }) => {
  return (
    <header className="resume-header">
      <h1 className="name">{name}</h1>
      <h2 className="title">{title}</h2>
      <div className="contact-info">
        <p>{contact.university}</p>
        <p>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            {contact.linkedin}
          </a>
        </p>
        <p>
          Github:{" "}
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            {contact.github}
          </a>
        </p>
        <p>Phone: {contact.phone}</p>
      </div>
    </header>
  );
};

export default Header;
