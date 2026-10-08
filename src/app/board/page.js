import { getArticles } from "@/lib/api";
import { BestArticleCard } from "@/components/board/BestArticleCard";
import { ArticleCard } from "@/components/board/ArticleCard";
import { ArticleSearch } from "@/components/board/ArticleSearch";

export default async function Board({ searchParams }) {
  const { keyword = "" } = await searchParams;
  const trimmed = typeof keyword === "string" ? keyword.trim() : "";

  const params = { pageSize: 5 };
  if (trimmed) {
    params.keyword = trimmed;
  }

  const [{ list: bestList }, { list }] = await Promise.all([
    getArticles({ pageSize: 3 }),
    getArticles(params),
  ]);

  return (
    <>
      <h2>베스트 게시글</h2>
      <ul>
        {bestList.map((article) => (
          <BestArticleCard key={article.id} article={article} />
        ))}
      </ul>
      <h2>게시글</h2>
      <ArticleSearch defaultKeyword={trimmed} />
      <ul>
        {list.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ul>
    </>
  );
}
