import React from 'react';


function Article({imgSrc, title, description, author, variant}) {
  // variant: "horizontal" | "vertical"

  switch (variant) {
    case "horizontal":
      return (
      <>
        <div className="col-span-1 cursor-pointer">
          <img src={imgSrc} alt="" className="h-full object-cover rounded aspect-video"/>
        </div>

        <div className="text-neutral-800 col-span-2 flex cursor-pointer ml-2">
          <div className="">
            <div className="hover:underline">
              <h2 className="text-2xl mt-6 font-semibold">
                {title}
              </h2>

              <p className="mt-3 text-neutral-600">
                {description}
              </p>
            </div>

            <div className="mt-3 flex items-center hover:underline hover:hue-rotate-[360deg] transition-all duration-1000 cursor-pointer">
              <img src={author.imgSrc} alt="" className="rounded-full w-12"/>
              <div className="ml-4">
                <h4 className="text-sm font-semibold">{author.name}</h4>
                <p className="text-xs text-neutral-600">{author.title}</p>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    default:// vertical variant is the default
      return (
        <div className="mt-6 text-neutral-800">
          <div className="hover:underline cursor-pointer">
            <img src={imgSrc} alt="" className="min-w-full bg-contain aspect-video"/>
            <h2 className="text-2xl mt-6 font-semibold">
              {title}
            </h2>

            <p className="mt-3 text-neutral-600">
              {description}
            </p>
          </div>


          <div className="mt-3 flex items-center hover:underline hover:hue-rotate-[360deg] transition-all duration-1000 cursor-pointer">
            <img src={author.imgSrc} alt="" className="rounded-full w-12"/>
            <div className="ml-4">
              <h4 className="text-sm font-semibold">{author.name}</h4>
              <p className="text-xs text-neutral-600">{author.title}</p>
            </div>
          </div>
        </div>
      )

  }
}

export default Article;
