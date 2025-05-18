import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  //USESearchparams kurulumu
  const [searchParams, setSearchParams] = useSearchParams();

  //form gönderdildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    //sayfa yenilemeyi engelle
    e.preventDefault();

    //inputtaki değere eriş
    const text = e.target[0].value;

    //Url'e geçilecek parametreyi ayarla
    searchParams.set("search", text);
    //hazırlanan parametreyi URL'e ekle
    setSearchParams(searchParams);
  };

  //Select alanında bir değişim olduğunda çalışacak fonksiyon
  const handleChange = (e) => {
    const value = e.target.value;

    //select alanında elde edilen değeri URL'e geçilecek parametre olarak ayarla.
    searchParams.set("sort", value);

    //hazırlanan parametreyi URL'e egeç
    searchParams(searchParams);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-3">
        {/* Select */}
        <select onChange={handleChange} className="form-select w-25 ">
          <option disabled>Sırala</option>

          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
        {/* Form */}
        <form onSubmit={handleSubmit} className="d-flex gap-2 ">
          <input
            type="search"
            placeholder="kitap ismi giriniz"
            className="form-control"
          />

          <button className="btn btn-primary">Ara</button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
