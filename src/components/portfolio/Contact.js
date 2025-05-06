import React from "react";

const Contact = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section">
      <h2>Contact</h2>
      <p>Email: vishnusimha98@gmail.com</p>
      <p>Phone: +353 8995956611</p>
    </section>
  );
});

export default Contact;
