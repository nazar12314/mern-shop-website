import "../css/App.css";
import "materialize-css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const url = "/api/v1/items";

function CreateItem() {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, form);
      setMessage(response.message);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card">
            <form method="post" onSubmit={handleFormSubmit}>
              <div className="card-content">
                <h2 className="card-title">Create product</h2>
                <div className="row">
                  <div className="input-field col s9">
                    <input
                      onChange={handleForm}
                      id="name"
                      name="name"
                      type="text"
                      className="validate"
                      value={form.name}
                    />
                    <label htmlFor="name">Name: </label>
                  </div>
                  <div className="input-field col s3">
                    <input
                      onChange={handleForm}
                      id="price"
                      name="price"
                      type="text"
                      className="validate"
                      value={form.price}
                    />
                    <label htmlFor="price">Price: </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      onChange={handleForm}
                      id="description"
                      className="materialize-textarea"
                      name="description"
                      value={form.description}
                    ></textarea>
                    <label htmlFor="description">Description</label>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateItem;
