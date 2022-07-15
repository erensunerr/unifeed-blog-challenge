import React from 'react';


function Article({imgSrc, title, description, author}) {
  return (
    <div className="mt-6 text-neutral-800">
      <img src={imgSrc} alt="" className="min-w-full"/>
      <h2 className="text-2xl mt-6 font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-neutral-600">
        {description}
      </p>

      <div className="mt-3">
        User section
      </div>
    </div>
  );
}

export default Article;
