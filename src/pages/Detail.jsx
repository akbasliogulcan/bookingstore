import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import { useState } from "react";
import Info from "../components/info";
const Detail = () => {
  //state kurulumu
  const [book, setBook] = useState(null);
  // const params = useParams();
  // console.log(params.id);
  //Url'den id  değerine eriş
  const { id } = useParams();

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
  }, []);

  return (
    <div className="container my-5 mx-auto">
      {/* //image */}

      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          src={book?.image}
          className="rounded img-fluid shadow"
          alt={book?.title}
        />
      </div>

      {/* info */}
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center text-nowrap">{book?.title}</h1>
      </div>

      <div>
        <Info title="yazar" value={book?.author} />
        <Info title="yıl" value={book?.year} />
        <Info title="sayfa sayısı" value={book?.page} />
        <Info title="fiyat" value={book?.price} />
        <Info title="açıklama" value={book?.description} />
      </div>
    </div>
  );
};

export default Detail;
