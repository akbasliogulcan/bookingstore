import React from "react";
import { Link, Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div></div>

      <Link to="roman">Roman</Link>
      <Link to="hikaye">Hikaye</Link>

      {/*aşağıdaki outlet nested root da kullanılır category de 
      yazılmasının nedeni anakısmın burası olması hikaye ve roman içinde oluşur. http://localhost:5173/kategori/hikaye  */}
      <Outlet />
    </div>
  );
};

export default Category;
