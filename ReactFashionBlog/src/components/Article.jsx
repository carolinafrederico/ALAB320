import React from "react";

const Article = ({ date, title, image, alt, content }) => {
  return (
    <article className="blog-post">
      <p className="post-date">{date}</p>
      <h2 className="post-title">{title}</h2>
      <img src={image} alt={alt} />
      <p className="post-content">{content}</p>
      <a href="#" className="continues-link">Continues...</a>
    </article>
  );
};

export default Article;
