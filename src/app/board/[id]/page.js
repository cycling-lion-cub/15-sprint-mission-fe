import { getArticle } from "@/lib/api";
import { ArticleMenu } from "@/components/board/ArticleMenu";

export default async function BoardDetail({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  return (
    <article>
      <h1>{article.title}</h1>
      <ArticleMenu articleId={article.id} />
      <p>{article.createdAt}</p>
      <p>{article.content}</p>
    </article>
  );
}
