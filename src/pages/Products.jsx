import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "../components/card";
import Filter from "../components/Filter";
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {
  //*UseNavigate kurulumu
  const navigate = useNavigate();

  //*UseState
  const [books, setState] = useState([]);

  //*useSearchParams kurulumu  url almak için
  const [searchParams] = useSearchParams();

  //*Eğer url'e parametereler geçildiyse bunları al ve  api'a gönder
  const params = {
    q: searchParams.get("search"), //search filter.jsx den geliyor  .Filter da arama paramteresi geçtik ve burada yakaladık
    _sort: "title",
    _order: searchParams.get("sort") === "z-a" ? "desc" : "asc", //sort filter.jsx den geliyor
  };

  //*Bileşen ekrana geldiğinde  api isteği at ve searchparams her değiştiğinde tekrar api isteği at.
  useEffect(() => {
    api.get("/books", { params }).then((res) => {
      //*Kitap yoksa
      if (res.data.length === 0) {
        //*Eğer kitap yoksa notFound sayfasına yönlendir.
        navigate("/notfound");
      }

      //*eğer kitapların uzunluğu sıfırdan farklıysa kitapları setState ile state aktar.

      setState(res.data); //params 15.satırdan geliyor
    });
  }, [searchParams]); //searchParams değiştiğinde api isteği at yani arama kısmına yazdığımızda

  return (
    <div className="container">
      {/* Result */}

      {/* Eğer kiitap yoksa 0 kitpa bulundu  demek yerine kitap bulunamadı desin ve notfound sayfasına yönlendirsin. */}
      {/* <h1>{books.length} kitap bulundu.</h1> */}

      {/* senaryo:eğer kitap yoksa 0 kitap bulundu şeklinde değil de hiç kitap bulunamadı yazsın */}
      {books.length === 0 ? (
        <h2>kitap bulunamadı</h2>
      ) : (
        <h2>{books.length} kitap bulundu.</h2>
      )}

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
