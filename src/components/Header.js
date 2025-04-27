import React from "react";

const Header = ({ name, title, contact }) => {
  return (
    <header className="resume-header">
      <h1 className="name">{name}</h1>
      <h2 className="title">{title}</h2>
      <div className="contact-info">
        {contact.university && <p>{contact.university}</p>}

        {contact.email && (
          <p>
            Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        )}

        {contact.linkedin && (
          <p>
            LinkedIn:{" "}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedin}
            </a>
          </p>
        )}

        {contact.github && (
          <p>
            GitHub:{" "}
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              {contact.github}
            </a>
          </p>
        )}

        {contact?.credly ? (
          <p>
            Credly:{" "}
            <a href={contact.credly} target="_blank" rel="noopener noreferrer">
              {contact.credly}
            </a>
          </p>
        ) : null}

        {contact.phone && <p>Phone: {contact.phone}</p>}
      </div>
    </header>
  );
};

export default Header;
