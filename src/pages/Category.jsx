import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import api from "../utils/api";

const Category = () => {
  //*state kurulumu
  const [books, setBooks] = useState([]);

  //*burada kategoriye geldiğimizde API ya istek atmasını istiyoruz.sonrasında bunu roman ve hikaye olarak filtreleriz.
  useEffect(() => {
    api.get("/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="container py-5 min-vh-100">
      <div className="row g-5 mx-auto">
        <aside className="col-lg-3 col-md-4">
          <div className="bg-white text-dark p-4 rounded-3 shadow-lg">
            <h3 className="mb-4 text-primary fw-bold">Kategoriler</h3>

            <div className="d-flex flex-column gap-3">
              <Link to="roman" className="d-flex align-items-center gap-2 p-3">
                <span>📒</span>
                <span>Roman</span>
              </Link>
              <Link to="hikaye" className="d-flex align-items-center gap-2 p-3">
                <span>📘</span>
                <span>Hikaye</span>
              </Link>
            </div>
          </div>
        </aside>

        <main className="col-lg-9 col-md-8">
          <div className="p-5 bg-white text-dark rounded-3 shadow-lg">
            {/*aşağıdaki outlet nested root da kullanılır category de 
      yazılmasının nedeni anakısmın burası olması hikaye ve roman içinde oluşur. http://localhost:5173/kategori/hikaye  */}
            {/*nested routes içerisinde routerlara props geçileceği zaman bunu useoutletcontext ile yaparız.Bu işlem için
           ilk olarak outlet  yapısına  context ile props geçilir devamında  propsun karşılanacağı route'da  Useoutletcontext  ile bu 
           prop yakalanır.  */}
            <Outlet context={{ books }} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Category;
