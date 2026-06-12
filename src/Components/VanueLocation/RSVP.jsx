import React, { useState } from "react";
import "../../../Style/RSVP.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RSVP = () => {
 
  // eslint-disable-next-line no-unused-vars
  const [attending, setAttending] = useState("");
const [name, setName] = useState("");
const [relationship, setRelationship] = useState("");
const [memory, setMemory] = useState("");
const [wishes, setWishes] = useState("");

const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState("");


const handleMemorySubmit = async (e) => {
  e.preventDefault();

 if (!name || !relationship || !memory || !wishes) {
  toast.error("Please fill all fields");

  setMessage("Please fill all fields.");
  setMessageType("error");
  return;
}

  try {
    setLoading(true);

    const response = await fetch(
      "http://localhost:8000/api/send-memory",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          relationship,
          memory,
          wishes,
        }),
      }
    );

    const data = await response.json();

   if (data.success) {
    toast.success("Memory Submitted Successfully ❤️");

    setMessage("Memory submitted successfully ❤️");
    setMessageType("success");

      setName("");
      setRelationship("");
      setMemory("");
      setWishes("");
    } else {
      toast.error(data.message || "Failed to submit memory");

      setMessage(data.message || "Failed to submit memory");
      setMessageType("error");
    }
  } catch (error) {
    console.error(error);

    toast.error("Something went wrong");

    setMessage("Something went wrong.");
    setMessageType("error");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="rsvp-section">
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />

        <div className="rsvp-container">
        <div className="rsvp-header">
          <span className="rsvp-subtitle">
              MEMORY BOOK
          </span>

          <h2>
           Relive The Beautiful
            <br />
           Moments With Us
          </h2>

          <p>
            Thank you for being part of our wedding celebration.
            Your presence, love, and support made our day truly
            unforgettable.
          </p>
        </div>

        <div className="rsvp-card">

          <div className="rsvp-number">
            01
          </div>

         <form onSubmit={handleMemorySubmit}>
          <div className="form-group">
            <label>Your Name</label>
           <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label>Relationship With Couple</label>
          <input
              type="text"
              placeholder="Friend, Family, Colleague..."
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label>Favorite Wedding Memory</label>
            <input
              type="text"
              placeholder="Share a memorable moment"
              value={memory}
              onChange={(e) => setMemory(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label>Your Blessings & Wishes</label>
          <textarea
              rows="6"
              placeholder="Write your heartfelt message..."
              value={wishes}
              onChange={(e) => setWishes(e.target.value)}
            ></textarea>
        </div>

         <button
            className="submit-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Processing...
              </>
            ) : (
              "Confirm Your Memory"
            )}
          </button>

          {message && (
            <p
              className={`memory-message ${
                messageType === "error"
                  ? "memory-error"
                  : "memory-success"
              }`}
            >
              {message}
            </p>
          )}
          </form>

        </div>

      </div>
    </section>
  );
};

export default RSVP;