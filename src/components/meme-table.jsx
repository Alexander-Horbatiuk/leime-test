import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

import { getMemes } from "../utils/meme-storage.js";

import MemeEditModal from "./meme-edit-modal.jsx";

const MemeTable = () => {
  const [memes, setMemes] = useState(getMemes());
  const [selectedMeme, setSelectedMeme] = useState(null);

  const handleEdit = (meme) => {
    setSelectedMeme(meme);
  };

  const handleClose = () => {
    setSelectedMeme(null);
    setMemes(getMemes());
  };

  return (
    <>
      <Table aria-label="Список мемов">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Назва</TableColumn>
          <TableColumn>Кількість лайків</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map((meme) => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.name}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  radius="full"
                  onPress={() => handleEdit(meme)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedMeme && (
        <MemeEditModal meme={selectedMeme} onClose={handleClose} />
      )}
    </>
  );
};

export default MemeTable;
