function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>
            <em>{post.date}</em>
          </p>
          <div>{post.preview}</div>

          {/* Only show the link if post.link exists */}
          {post.link && (
            <p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="post-link"
              >
                View Projects on GitHub
              </a>
            </p>
          )}
        </article>
      ))}
    </main>
  );
}

export default ArticleList;

