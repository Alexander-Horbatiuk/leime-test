import React, { useEffect, useState } from "react";
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
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);

  useEffect(() => {
    setMemes(getMemes());
  }, []);

  const handleUpdate = () => {
    const updatedMemes = getMemes();

    setMemes([...updatedMemes]);
  };

  const handleEdit = (meme) => {
    setSelectedMeme(meme);
  };

  const handleClose = () => {
    setSelectedMeme(null);
    handleUpdate();
  };

  return (
    <>
      <Table aria-label="Список мемів">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Назва</TableColumn>
          <TableColumn>Кількість лайків</TableColumn>
          <TableColumn>Дії</TableColumn>
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
                  редагувати
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
