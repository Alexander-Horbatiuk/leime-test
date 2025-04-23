import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image, Spinner } from "@heroui/react";

import { useMemes } from "../hooks/useMemes";

const MemeList = () => {
  const { memes, loading } = useMemes();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner label="Завантаження мемів..." size="lg" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {memes.map((meme) => (
        <Card key={meme.id} className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{meme.name}</p>
            <small className="text-default-500">❤️{meme.likes}</small>
            <a
              className="text-blue-600  text-sm"
              href={meme.image}
              rel="noopener noreferrer"
              target="_blank"
            >
              Переглянути зображення
            </a>
          </CardHeader>

          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={meme.image}
              width={270}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default MemeList;
