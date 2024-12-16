import React from "react";

function Details() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 py-6">
      <h1 className="text-3xl font-semibold text-center mb-4">About Us</h1>
      <p className="text-xl text-center mb-8">
        Welcome to **Your Next Read**, where we believe in the power of books to
        inspire, educate, and transform lives. Our mission is to provide a wide
        selection of books that cater to readers of all ages and interests.
      </p>
      <p className="text-xl text-center mb-8">
        From bestsellers to hidden gems, we carefully curate our collection to
        help you discover your next great read. Whether you're looking for
        fiction, non-fiction, self-help, or anything in between, we've got
        something for you.
      </p>
      <p className="text-xl text-center mb-8">
        Join our community of book lovers and embark on a journey of knowledge,
        adventure, and creativity. We're here to guide you on every page of your
        reading journey.
      </p>
      <div className="flex justify-center">
        <button className="bg-pink-500 rounded-md text-white px-6 py-3 hover:bg-pink-700 duration-300">
          Start Browsing Now
        </button>
      </div>
    </div>
  );
}

export default Details;
