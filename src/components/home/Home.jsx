import "../../styles/components/home/Home.scss";
import Banner from "./Banner";

const Home = ({ greeting }) => {
  console.log(`RobinDev - greeting`, greeting);
  return (
    <>
      <Banner title={greeting.title} nota={greeting.nota}></Banner>
    </>
  );
};
export default Home;
