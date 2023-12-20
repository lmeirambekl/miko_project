import React, { useState } from "react";
import "./About.css";

function About() {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewsHistory, setReviewsHistory] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = () => {
    if (name.trim() !== "" && reviewText.trim() !== "") {
      const newReview = {
        name: name,
        review: reviewText,
      };
      setReviewsHistory([...reviewsHistory, newReview]);
      setName("");
      setReviewText("");
    }
  };

  return (
    <div className="about-us-container">
      <h1>Welcome to Multi Market</h1>

      <section className="our">
        <h2>Our Story</h2>
        <p>
          At Multi Market, we believe in creating a unique and enjoyable shopping experience for our customers. Our journey began in 2023, and since then, we've been committed to providing the best products and services.
        </p>
      </section>

      <section className="our">
        <h2>Our Mission</h2>
        <p>
          Our mission is to products. We aim to open and celling a lot of markets, and we take pride in our role as a leading market in the community.
        </p>
      </section>

      <section className="our">
        <h2>Meet the Team</h2>
        <p>
          Behind Multi Market is a dedicated team of professionals passionate about delivering excellence. Get to know the faces that drive our success and make your shopping experience exceptional.
        </p>
      </section>

      <section className="our">
        <h2>Quality Products</h2>
        <p>
          We are committed to offering a curated selection of high-quality products. Each item on our shelves is chosen with care to ensure freshness, taste, and overall satisfaction for our customers.
        </p>
      </section>

      <section className="our">
        <h2>Community Engagement</h2>
        <p>
          Multi Market is more than just a store; we are an active member of the community. Through various initiatives, we contribute to the well-being and development of the areas we serve.
        </p>
      </section>

      <section className="our">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! If you have any questions, suggestions, or feedback, please reach out to us at <a href="https://www.instagram.com/m1kontay/" target="_blank"> 8-708-564-19-04 </a>.
        </p>
      </section>
      
      <section className="ourre">
        <h2>Leave a Review</h2>
        <label htmlFor="name">Your Name:</label>
        <br/>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <br/>
        <textarea
          placeholder="Write your review here..."
          value={reviewText}
          onChange={handleReviewChange}
        />
        <br/>
        <button onClick={handleSubmitReview}>Submit Review</button>

        <ul>
          {reviewsHistory.map((review, index) => (
            <li key={index}>
              <strong>{review.name}:</strong> {review.review}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default About;
