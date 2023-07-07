import { useNavigate } from "react-router-dom"; // useHistory
//when user clicks on About section
export default function About() {
  const history = useNavigate();

  const buttonHandler = () => {
    history("/Main");
  };
  return (
    <section>
      <h1>Account Page</h1>
      <p>This is the your account screen!</p>
      <button onClick={buttonHandler}>Home</button>
    </section>
  );
}
