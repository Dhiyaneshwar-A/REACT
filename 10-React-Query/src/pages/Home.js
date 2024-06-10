import { AppContext } from "../App";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { username } = useContext(AppContext);

  const { data, isLoading, error , refetch} = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <h1>Hi, {username}</h1>
      <h1><p>{data?.fact}</p></h1>
      <button onClick={refetch}>Update Data</button>
    </div>
  );
};
