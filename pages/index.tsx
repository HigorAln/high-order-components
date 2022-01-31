import type { NextPage } from "next";
import { WithAuth } from "../services/withAuthClient";
import { withAuthServer } from "../services/withAuthServer";

const Home: NextPage = () => {
  return <h1>Hello world</h1>;
};

export default Home;

export const getServerSideProps = withAuthServer(async (ctx) => {
  console.log("entrou na funcao");
  return {
    props: {},
  };
});
