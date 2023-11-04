"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import { Editor } from "@tinymce/tinymce-react";

const Page = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className={styles.wrapper}>
      <h2>Ask a Question</h2>
      <div className={styles.formContainer}>
        <form id="questionForm" className={styles.form}>
          <div className={styles.formQuestionTitle}>
            <label htmlFor="questionTitle">
              Question Title <span>*</span>
            </label>
            <input type="text" name="" id="questionTitle" />
            <p>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
          </div>
          <div className={styles.formQuestionDescription}>
            <label htmlFor="questionDescription">
              Detailed explanation of your problem? <span>*</span>
            </label>
            {/* <input type="text" name="" id="questionDescription" /> */}
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>type your question details here...</p>"
              init={{
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "codesample",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "codesample |" +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist ",
                content_style:
                  "body { font-family:Inter,Arial,sans-serif; font-size:14px; }",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
                ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                    Promise.reject("See docs to implement AI Assistant")
                  ),
              }}
            />
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
          </div>
          <div className={styles.formQuestionTags}>
            <label htmlFor="questionTags">
              Tags <span>*</span>
            </label>
            <input type="text" name="" id="questionTags" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
