import React from "react";

import MemeList from "../components/meme-list.jsx";

const ListPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Список мемів</h1>
      <MemeList />
    </div>
  );
};

export default ListPage;
