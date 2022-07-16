import React from 'react';


function Article({imgSrc, title, description, author}) {
  return (
    <div className="mt-6 text-neutral-800 sm:first:col-span-full ">
      <div className="hover:underline cursor-pointer">
        <img src={imgSrc} alt="" className="min-w-full bg-contain aspect-video"/>
        <h2 className="text-2xl mt-6 font-semibold">
          {title}
        </h2>

        <p className="mt-3 text-neutral-600">
          {description}
        </p>
      </div>


      <div className="mt-3 flex items-center hover:underline cursor-pointer">
        <img src={author.imgSrc} alt="" className="rounded-full w-12"/>
        <div className="ml-4">
          <h4 className="text-sm font-semibold">{author.name}</h4>
          <p className="text-xs text-neutral-600">{author.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
