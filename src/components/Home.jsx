import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// On page load: get random plant from db (rand < max plantTable.count)

const Home = () => {
  const { pageTitle, setPageTitle } = useOutletContext();

  useEffect(() => {
    setPageTitle("Plantea");
  }, []);

  return (
    <>
      <div>Plant of the Day</div>
      {/* this links to the plant details page */}
      <h4>"Name of Plant"</h4>
      <img src="https://via.placeholder.com/380x300" alt="Featured Plant" />
      <div className="container text-start">
        <div>This is why we love "name of plant" so much:</div>
        <div>Positive effects on the body:</div>
        <ul>
          <li>effect 1</li>
          <li>effect 2</li>
          <li>effect 3</li>
        </ul>
        <div>Have fun trying some of our favorite recipes:</div>
        <ul>
          <li>recipe 1</li>
          <li>recipe 2</li>
          <li>recipe 3</li>
        </ul>
      </div>
    </>);
};

export default Home;
