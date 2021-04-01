import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { Rate } from "antd";

const Comments = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const comments = [
    {
      author: "Kenneth",
      description: "With great pizza, comes with great responsibilities. 10/10",
      rating: 5,
    },
    {
      author: "Darryl",
      description:
        "Delivered quickly to my doorstep. The pizzas are still steaming hot when it arrived!",
      rating: 5,
    },
    {
      author: "Kieran",
      description:
        "Many varieties to choose from! My favorite pizza is the Chicken Pepperoni.",
      rating: 4,
    },
    {
      author: "Kang Hua",
      description:
        "Hands down the best pizza I've ever tasted in the local town. I've never tried dining in their restaurant though.",
      rating: 5,
    },
    {
      author: "Ahmad Jufri",
      description:
        "They taste amazing and affordable as well. Adding side dishes to the menu would be nice.",
      rating: 4,
    },
    {
      author: "Jing Luo",
      description:
        "They have great service and reasonable prices. However, the delivery time was not quite up to my expectation.",
      rating: 3,
    },
  ];
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {comments.map((comment) => {
        return (
          <div data-aos="fade-up" className="comment-box m-3" key={comment.author}>
            <div className="comment-author">{comment.author}</div>
            <div className="comment-description">
              <q> {comment.description} </q>
            </div>
            <Rate disabled defaultValue={comment.rating} />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
