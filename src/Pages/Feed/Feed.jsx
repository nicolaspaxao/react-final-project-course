import React, { useEffect, useState } from "react";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import propTypes from "prop-types";

export const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function infinitScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && wait == false) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infinitScroll);
    window.addEventListener("scrol", infinitScroll);

    return () => {
      window.removeEventListener("wheel", infinitScroll);
      window.removeEventListener("scrol", infinitScroll);
    };
  }, [infinite]);

  return (
    <>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired,
  ]),
};
