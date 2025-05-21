import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "../components/card";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  //UseState
  const [books, setState] = useState([]);

  //useSearchParams kurulumu  url almak için
  const [searchParams] = useSearchParams();

  //Eğer url'e parametereler geçildiyse bunları al ve  api'a gönder
  const params = {
    q: searchParams.get("search"), //search filter.jsx den geliyor  .Filter da arama paramteresi geçtik ve burada yakaladık
    _sort: "title",
    _order: searchParams.get("sort") === "z-a" ? "desc" : "asc", //sort filter.jsx den geliyor
  };

  //*Bileşen ekrana geldiğinde  api isteği at ve searchparams her değiştiğinde tekrar api isteği at.
  useEffect(() => {
    api.get("/books", { params }).then((res) => setState(res.data)); //params 15.satırdan geliyor
  }, [searchParams]); //searchParams değiştiğinde api isteği at yani arama kısmına yazdığımızda

  return (
    <div className="container">
      {/* Result */}

      <h1>{books.length} kitap bulundu.</h1>

      {/* filter */}
      <Filter />

      {/* cards */}
      <div className="books-container">
        {books.map((book) => (
          <Card book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
