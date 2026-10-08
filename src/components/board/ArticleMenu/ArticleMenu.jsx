"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteArticle } from "@/lib/api";

export default function ArticleMenu({ articleId }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    await deleteArticle(articleId);
    router.push("/board");
    router.refresh();
  };

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        ⋮
      </button>
      {isOpen && (
        <ul>
          <li>
            <Link href={`/board/${articleId}/edit`}>수정하기</Link>
          </li>
          <li>
            <button type="button" onClick={handleDelete}>
              삭제하기
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
