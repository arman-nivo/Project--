import React from 'react';
import './ClientFeedback.css';
import imgdes from "../../images/Element4.png"
const testimonials = [
  {
    id: 1,
    title: 'LOREM IPSUM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit',
  },
  {
    id: 2,
    title: 'LOREM IPSUM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit',
  },
  {
    id: 3,
    title: 'LOREM IPSUM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit',
  },
  {
    id: 4,
    title: 'LOREM IPSUM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit',
  },
];

const ClientFeedback = () => {
  return (
    <section className="client-feedback-section">
      <div className="feedback-header">
        <h2>Client Feedback</h2>
        <div className="sci-fi-decorator">
          <img src={imgdes} alt="Not Fount" />
        </div>
        <p className="feedback-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
        </p>
      </div>

      <div className="feedback-grid">
        {testimonials.map(item => (
          <div key={item.id} className="feedback-card sci-fi-frame">
            <h5>{item.title}</h5>
            <p>{item.text}</p>
            <div className="decorations">
              <span className="square" />
              <span className="square filled" />
              <span className="square" />
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <span className="dot" />
        <span className="dot active" />
        <span className="dot" />
      </div>
    </section>
  );
};

export default ClientFeedback;
