import Link from "next/link";

export default function BestArticleCard({ article }) {
  return (
    <li>
      <Link href={`/board/${article.id}`}>
        <h3>{article.title}</h3>
        <span>{article.id}</span>
        <span>9999+</span>
        <span>{article.createdAt}</span>
      </Link>
    </li>
  );
}
