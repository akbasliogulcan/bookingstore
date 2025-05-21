import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/card";
const Story = () => {
  const { books } = useOutletContext();
  const stories = books.filter((book) => book.category === "Hikaye");

  return (
    <div>
      <h2>Hikayeler</h2>

      <div className="row row-cols-1 row-cols-md-2 gap-2  ">
        {stories.map((book) => {
          return <Card book={book} />;
        })}
      </div>
    </div>
  );
};

export default Story;
