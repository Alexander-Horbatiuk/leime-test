import React from "react";

import MemeTable from "../components/meme-table.jsx";

const TablePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Таблиця мемів</h1>
      <MemeTable />
    </div>
  );
};

export default TablePage;
