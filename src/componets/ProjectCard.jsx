import React from 'react';

export default function ProjectCard({
  id,
  title,
  imageUrl,
  previewUrl,
  description,
  tags,
  gallery,
  setProjectOpen,
  handleCardClick,
}) {
  return (
    <div
      key={id}
      className="flex-auto group transition overflow-hidden border rounded-lg p-3 cursor-pointer"
      onClick={() => {
        setProjectOpen(true);
        handleCardClick(id);
      }}
    >
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          alt={title}
          src={imageUrl}
        />
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          alt={`${title} preview`}
          src={previewUrl}
        />
      </div>
      <div className="flex flex-col flex-1 pt-2">
        <div className="text-xl md:text-lg font-bold group-hover:text-amber-300 transition line-clamp-2">
          {title}
        </div>
        <div className="w-full flex flex-wrap text-neutral-700 gap-2 py-3">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="bg-green-300 py-1 px-2 rounded-lg text-sm font-medium"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
