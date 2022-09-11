import React from "react";
import { useParams } from "react-router";

const Detail = () => {
  const { goodsId } = useParams();
  console.log(goodsId);

  return <div>Ali</div>;
};

export default Detail;
