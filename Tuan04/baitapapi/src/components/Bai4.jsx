import React, { useState, useEffect } from 'react';

function Bai4() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Lỗi fetch API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="post-container">
      <h3>Bài 4: Tìm kiếm bài viết (Client-side)</h3>

      <div className="search-box">
        <input
          type="text"
          placeholder="Nhập tiêu đề cần tìm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="post-list">
        {loading ? (
          <p>Đang tải dữ liệu...</p>
        ) : (
          <ul>
            {filteredPosts.map((post) => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </li>
            ))}
            
            {filteredPosts.length === 0 && posts.length > 0 && (
              <p>Không tìm thấy bài viết nào phù hợp.</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Bai4;