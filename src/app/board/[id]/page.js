import { getArticle } from "@/lib/api";

export default async function BoardDetail({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.createdAt}</p>
      <p>{article.content}</p>
    </article>
  );
}
