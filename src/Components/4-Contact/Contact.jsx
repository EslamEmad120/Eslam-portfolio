import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "201143999343"; // رقمك مع كود الدولة
    const text = `اسمي: ${formData.name}\nرسالتي: ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row">
            <h3 className="mb-4">Contact me</h3>
            <form onSubmit={handleSubmit}>
              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="form-control"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-success w-100 fw-bold"
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
