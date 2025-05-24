import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";

export default function ErrorPage({ message }) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <h1>{message}</h1>
      <Link to={"/home"}>Back To Home</Link>
    </div>
  );
}
