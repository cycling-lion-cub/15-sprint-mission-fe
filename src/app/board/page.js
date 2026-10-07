import { getArticles } from "@/lib/api";
import { BestArticleCard } from "@/components/board/BestArticleCard";
import { ArticleCard } from "@/components/board/ArticleCard";

export default async function Board() {
  const [{ list: bestList }, { list }] = await Promise.all([
    getArticles({ pageSize: 3 }),
    getArticles({ pageSize: 5 }),
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
      <ul>
        {list.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ul>
    </>
  );
}
