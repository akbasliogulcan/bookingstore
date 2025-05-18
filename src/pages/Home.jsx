import React from "react";
const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center gap-5">
      <h1>Hoş geldiniz</h1>
      <img
        src="welcome.webp"
        alt="banner-image"
        className="img-fluid rounded image"
      />
      <p className="fw-bold">
        Kitaplara Ürünler Sayfasından Ulaşabilirsiniz,İyi alışverişler dileriz.
      </p>
    </div>
  );
};

export default Home;
