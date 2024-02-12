import React, { useState } from "react";
import Enviar from "../../Assets/enviar.svg?react";
import { useFetch } from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import { ErrorWidget } from "../../Components/Helpers/Error/Error";
import styles from "./PhotoCommentsForm.module.css";

export const PhotoCommentsForm = ({ id, setComments }) => {
  const { error, request } = useFetch();
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className={styles.textarea}
      ></textarea>
      <button className={styles.button}>
        <Enviar />
      </button>
      <ErrorWidget error={error} />
    </form>
  );
};
