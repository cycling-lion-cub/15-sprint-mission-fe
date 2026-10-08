"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createArticle, updateArticle } from "@/lib/api";

export default function ArticleForm({
  articleId,
  initialTitle = "",
  initialContent = "",
}) {
  const router = useRouter();
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const isValid = title.trim() !== "" && content.trim() !== "";
  const isEdit = Boolean(articleId);
  const heading = isEdit ? "게시글 수정" : "게시글 작성";
  const submitLabel = isEdit ? "수정" : "등록";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValid) return;

    const body = { title: title.trim(), content: content.trim() };
    const article = isEdit
      ? await updateArticle(articleId, body)
      : await createArticle(body);

    router.push(`/board/${article.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>{heading}</h2>
        <button type="submit" disabled={!isValid}>
          {submitLabel}
        </button>
      </div>

      <label htmlFor="title">*제목</label>
      <input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="제목을 입력해주세요"
        maxLength={50}
      />

      <label htmlFor="content">*내용</label>
      <textarea
        id="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="내용을 입력해주세요"
      />
    </form>
  );
}
