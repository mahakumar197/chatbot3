import React from "react";

export default function Chat() {
  return (
    <div>
      <div className="main d-flex align-items-center justify-content-center">
        <div className="chat-body ">
          <div class="form-group ">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            <button type="submit" class="btn btn-primary send_btn">
              Submit
            </button>
          </div>
          <label for="exampleFormControlInput1" className="footer-content  ">
            Chat Bot!!!!!
          </label>
        </div>
      </div>
    </div>
  );
}
