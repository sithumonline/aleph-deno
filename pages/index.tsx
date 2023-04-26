import React from "react";
import "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
import { booksGetter } from "~/lib/booksGetter.ts";

export default function Home() {
  const books = booksGetter();

  const booksComp = books.map((book, i) => {
    return (
      <div className="xl:w-1/4 md:w-1/2 p-4" key={i}>
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/723x403"
            alt="content"
          />
          <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
            {book.author}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {book.title}
          </h2>
          <p className="leading-relaxed text-base">{book.description}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Hello Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">{booksComp}</div>
        </div>
      </div>
    </>
  );
}
