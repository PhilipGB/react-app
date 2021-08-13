import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { posts } from "./BlogContent.js";

function Blog() {
  return (
    <section id="blog" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-green-400">
            My Blog
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {posts.map((post) => (
              <div>
                <h1>{post.title}</h1>
                <h2>{post.subtitle}</h2>
                <h3>{post.date}</h3>
                <div>
                    <p>{post.content}</p>
                    <img alt="blog" src={post.image}/>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;