import { getArticles } from "@/lib/api";

export default async function Board() {
  const { list } = await getArticles({ pageSize: 5 });
  console.log(list);

  return (
    <>
      <h1>게시판이에요</h1>
      <ul>
        {list.map((article) => (
          <li key={article.id}>
            {article.title} : {article.id} : {article.createdAt}
          </li>
        ))}
      </ul>
    </>
  );
}
