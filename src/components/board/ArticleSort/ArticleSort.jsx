"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ArticleSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderBy = searchParams.get("orderBy") ?? "recent";

  const handleChange = (event) => {
    const params = new URLSearchParams(searchParams);
    params.set("orderBy", event.target.value);
    router.push(`/board?${params}`);
  };

  return (
    <select value={orderBy} onChange={handleChange}>
      <option value="recent">최신순</option>
      <option value="like" disabled>
        좋아요순(준비)
      </option>
    </select>
  );
}
