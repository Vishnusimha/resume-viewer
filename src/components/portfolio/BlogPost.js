import React, { useEffect, useState } from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

// Import your blog posts
import post1 from "./blogs/post1.md";
import post2 from "./blogs/post2.md";
import post3 from "./blogs/post3.md";

const blogFiles = [
  { id: 1, file: post1, title: "Post 1" },
  { id: 2, file: post2, title: "Post 2" },
  { id: 3, file: post3, title: "Post 3" },
];

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Configure marked with custom highlighting
    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: "hljs language-",
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });

    const fetchPosts = async () => {
      const fetchedPosts = await Promise.all(
        blogFiles.map(async (blog) => {
          const response = await fetch(blog.file);
          const text = await response.text();
          const html = marked.parse(text);
          return {
            id: blog.id,
            title: blog.title,
            html,
          };
        })
      );
      setPosts(fetchedPosts);
      setSelectedPost(fetchedPosts[0]);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Handle checkbox changes
  useEffect(() => {
    const handleCheckboxChange = (e) => {
      e.target.classList.toggle("checked");
    };

    // Add event listeners to checkboxes
    const checkboxes = document.querySelectorAll(
      ".blog-post input[type='checkbox']"
    );

    checkboxes.forEach((checkbox) => {
      checkbox.disabled = false;
      checkbox.addEventListener("change", handleCheckboxChange);
    });

    return () => {
      checkboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", handleCheckboxChange);
      });
    };
  }, [selectedPost]); // Re-run when selectedPost changes

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="loading-spinner"></div>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="blog-layout">
      <div className="blog-sidebar">
        <div className="sidebar-header">
          <h3>Blog Posts</h3>
          <div className="sidebar-search">
            <input type="text" placeholder="Search posts..." />
          </div>
        </div>
        <ul className="post-list">
          {posts.map((post) => (
            <li
              key={post.id}
              className={selectedPost?.id === post.id ? "active" : ""}
              onClick={() => setSelectedPost(post)}
            >
              <span className="post-title">{post.title}</span>
              <span className="post-date">May 2023</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="blog-content">
        {selectedPost && (
          <div className="post-container">
            <div className="post-header">
              <h1>{selectedPost.title}</h1>
              <div className="post-meta">
                <span className="post-date">Published: May 15, 2023</span>
                <span className="post-reading-time">5 min read</span>
              </div>
            </div>

            <article
              className="blog-post"
              dangerouslySetInnerHTML={{ __html: selectedPost.html }}
            />

            <div className="post-footer">
              <div className="post-tags">
                <span>Tags:</span>
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Web Development</span>
              </div>
              <div className="post-actions">
                <button className="action-btn">
                  <i className="icon-like"></i> Like
                </button>
                <button className="action-btn">
                  <i className="icon-share"></i> Share
                </button>
                <button className="action-btn">
                  <i className="icon-bookmark"></i> Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
