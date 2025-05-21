import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/card";

const Noval = () => {
  const { books } = useOutletContext(); //*category.jsx den gelen {books } burada karşılanır.
  console.log(books);
  const noval = books.filter((book) => book.category === "Roman");

  return (
    <div>
      <h2>Romanlar</h2>

      <div className="row row-cols-1 row-cols-md-2 gap-2  ">
        {noval.map((book) => {
          return <Card book={book} />;
        })}
      </div>
    </div>
  );
};

export default Noval;
