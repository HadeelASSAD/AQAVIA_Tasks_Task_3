import { useUser } from "../UserContext";
import { Link } from "react-router-dom";
import "../Styles/Page2.css";

function Page2() {
  const { value, updateValue } = useUser();

  const handleEdit = () => {
    const newVal = prompt("Write a new value", value);
    if (newVal !== null) {
      updateValue(newVal);
    }
  };

  return (
    <div className="page2-container">
      <h2 className="page2-title">Page 2</h2>

      <p className="page2-value">
        <span>Current value:</span> {value}
      </p>
      <button className="page2-btn" onClick={handleEdit}>
        Edit
      </button>

      <div className="link-wrapper">
        <Link className="page2-link" to="/">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Page2;
