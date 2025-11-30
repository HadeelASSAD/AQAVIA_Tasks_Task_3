import { useState } from "react";
import { useUser } from "../UserContext";
import { Link } from "react-router-dom";
import "../Styles/Page1.css";

function Page1() {
  const { updateValue } = useUser();
  const [text, setText] = useState("");

  const handleSave = () => {
    updateValue(text);
    alert("Saved successfully");
  };

  return (
    <div className="page1-container">
      <h2 className="page1-title">Page 1</h2>

      <input
        className="page1-input"
        placeholder="Write something..."
        onChange={(e) => setText(e.target.value)}
      />

      <button className="page1-btn" onClick={handleSave}>
        Save
      </button>

      <div className="link-wrapper">
        <Link className="page1-link" to="/page2">
          Go to Page 2
        </Link>
      </div>
    </div>
  );
}

export default Page1;
