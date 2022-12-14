import React, { useState } from "react";

import Goods from "./Goods";

const CategoryShower = ({ category, goods }) => {
  return (
    <div className="row my-3 ps-4 ms-4">
      <p style={{ fontWeight: "bold" }}>{category.name}</p>
      {goods.map((item) => (
        <Goods
          key={item.id}
          image={item.theImage}
          title={item.title}
          description={item.description}
          goodsId={item.id}
        />
      ))}
    </div>
  );
};

export default CategoryShower;
