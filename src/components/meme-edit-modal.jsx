import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Input,
} from "@heroui/react";

import { getMemes, saveMemes } from "../utils/meme-storage.js";

const MemeEditModal = ({ meme, onClose }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState(meme.name);
  const [image, setImage] = useState(meme.image);
  const [likes, setLikes] = useState(meme.likes);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};

    if (name.length < 3 || name.length > 100) {
      errs.name = "Назва має бути від 3 до 100 символів";
    }

    if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(image)) {
      errs.image = "Картинка має бути валідним зображенням (jpg, png, gif, webp)";
    }

    const likesNum = Number(likes);

    if (!Number.isInteger(likesNum) || likesNum < 0 || likesNum > 99) {
      errs.likes = "Лайки повинні бути числом від 0 до 99";
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;

    const updated = {
      ...meme,
      name: name.trim(),
      image: image.trim(),
      likes: Number(likes),
    };

    const current = getMemes();
    const newList = current.map((m) => (m.id === updated.id ? updated : m));

    saveMemes(newList);
    onClose();
  };

  return (
    <>
      <Modal isOpen onClose={onClose} onPress={onOpen}>
        <ModalContent isOpen={isOpen} onOpenChange={onOpenChange}>
          {(onClose) => (
            <>
              <ModalHeader>Редагувати мем</ModalHeader>
              <ModalBody className="space-y-4">
                <Input disabled label="ID" value={meme.id} />
                <Input
                  error={errors.name}
                  label="Назва"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  error={errors.image}
                  label="Картинка (JPG URL)"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <Input
                  error={errors.likes}
                  label="Кількість лайків"
                  type="number"
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Скасувати
                </Button>
                <Button color="primary" onPress={handleSave}>
                  Зберегти
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MemeEditModal;
