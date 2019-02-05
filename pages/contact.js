import MainLayout from "../components/MainLayout";
import HOC from "../components/HOC";

export default MainLayout(props => {
  console.log(props, "contact");
  return <p>Contact</p>;
});
