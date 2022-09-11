import React, { useState } from "react";

import Goods from "./Goods";

const CategoryShower = ({ category, goods }) => {
  return (
    <div className="row my-3">
      <p>{category.name}</p>
      {goods.map((item) => (
        <Goods title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default CategoryShower;
