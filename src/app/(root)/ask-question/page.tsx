"use client";

import React, { useRef, useState } from "react";

import { DevTool } from "@hookform/devtools";
import { Editor } from "@tinymce/tinymce-react";
import { useForm, Controller, FieldValues } from "react-hook-form";

import styles from "./page.module.css";
import {
  questionPlugins,
  questionToolbars,
} from "@/constants/questionPluginsAndToolbar";
import { InputTagsList } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  QuestionSchemaTypes,
  questionSchema,
} from "@/models/questionValidation";
import { createQuestion } from "@/lib/actions/questionAction";

const Page = () => {
  const editorRef = useRef<Editor | null>(null);
  const [tagsList, setTagsList] = useState<string[]>([]);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<QuestionSchemaTypes>({
    defaultValues: {
      title: "",
      description: "",
      questionTags: "",
    },
    resolver: zodResolver(questionSchema),
  });

  const handleTagsInput = (e: React.KeyboardEvent<HTMLInputElement>, field) => {
    if (e.key === "Enter" && field.value && !tagsList.includes(field.value)) {
      const newTagsList = [...tagsList, field.value];
      setTagsList(newTagsList);
      setValue("questionTags", "");
      // setValue("questionTags", newTagsList);
      // trigger("questionTags");
    }
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      await createQuestion({});
      console.log("connection stablished");
    } catch (error) {}
    // reset();
  };

  return (
    <div className={styles.wrapper}>
      <h2>Ask a Question</h2>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="questionForm"
          className={styles.form}
        >
          <div className={styles.formQuestionTitle}>
            <label htmlFor="questionTitle">
              Question Title <span>*</span>
            </label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => <input {...field} id="questionTitle" />}
            />
            <p className={styles.notice}>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <p className={styles.inputError}>{errors.title?.message}</p>
          </div>
          <div className={styles.formQuestionDescription}>
            <label htmlFor="questionDescription">
              Detailed explanation of your problem? <span>*</span>
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) => {
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue=""
                  init={{
                    menubar: false,
                    plugins: questionPlugins,
                    toolbar: questionToolbars,
                    content_style:
                      "body { font-family:Inter,Arial,sans-serif; font-size:14px; }",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                  }}
                />
              )}
            />
            <p className={styles.notice}>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <p className={styles.inputError}>{errors.description?.message}</p>
          </div>
          <div className={styles.formQuestionTags}>
            <label htmlFor="questionTags">
              Tags <span>*</span>
            </label>
            <Controller
              name="questionTags"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  onKeyDown={(e) => handleTagsInput(e, field)}
                />
              )}
            />
            <div>
              <p className={styles.notice}>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </p>
              <InputTagsList data={tagsList} />
            </div>
            <p className={styles.inputError}>{errors.questionTags?.message}</p>
          </div>
          <button
            disabled={isSubmitting}
            className={styles.submitQuestion}
            type="submit"
          >
            ask a question
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default Page;
