import React, { useEffect, useState } from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import AuthenticationVSAuthorisation from "../../assets/blogs/android/AuthenticationVSAuthorisation.md";
import SSLPinning from "../../assets/blogs/android/Implementing SSL Pinning with OkHttp and Retrofit.md";
import KotlinDSLVSGroovy from "../../assets/blogs/android/KotlinDSLVSGroovy.md";
import SerializableVSParcelable from "../../assets/blogs/android/SerializableVSParcelable.md";
import FeaturesCompose from "../../assets/blogs/android/FeaturesCompose.md";

// Folder structure
const folderStructure = [
  {
    name: "Blogs",
    type: "folder",
    children: [
      {
        name: "Android",
        type: "folder",
        children: [
          { name: "Features Compose", type: "file", content: FeaturesCompose },
          { name: "SSL Pinning", type: "file", content: SSLPinning },
          {
            name: "Kotlin DSL VS Groovy",
            type: "file",
            content: KotlinDSLVSGroovy,
          },
          {
            name: "Serializable VS Parcelable",
            type: "file",
            content: SerializableVSParcelable,
          },
        ],
      },
    ],
  },
  {
    name: "Coding Concepts",
    type: "folder",
    children: [
      {
        name: "Authentication VS Authorisation",
        type: "file",
        content: AuthenticationVSAuthorisation,
      },
    ],
  },
];
const stripMarkdown = (md) => {
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[.*?\]\(.*?\)/g, "") // links
    .replace(/[`*_>#\-~]/g, "") // inline markdown
    .replace(/\n{2,}/g, "\n") // collapse newlines
    .replace(/#{1,6}\s/g, "") // headings
    .trim();
};

const BlogPost = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: "hljs language-",
    });

    const flattenFiles = (structure) => {
      let files = [];
      structure.forEach((item) => {
        if (item.type === "file") {
          files.push(item);
        } else if (item.children) {
          files = files.concat(flattenFiles(item.children));
        }
      });
      return files;
    };

    const loadAllPosts = async () => {
      const flatFiles = flattenFiles(folderStructure);
      const promises = flatFiles.map(async (file) => {
        const res = await fetch(file.content);
        const text = await res.text();
        return {
          id: file.name,
          title: file.name,
          html: marked.parse(text),
          preview: stripMarkdown(text).slice(0, 150) + "...",
          wordCount: text.split(/\s+/).length,
        };
      });
      const results = await Promise.all(promises);
      setAllPosts(results);
      setLoading(false);
    };

    loadAllPosts();
  }, []);

  useEffect(() => {
    const checkboxes = document.querySelectorAll(
      ".blog-post input[type='checkbox']"
    );
    const handleCheckboxChange = (e) => e.target.classList.toggle("checked");
    checkboxes.forEach((c) => {
      c.disabled = false;
      c.addEventListener("change", handleCheckboxChange);
    });
    return () =>
      checkboxes.forEach((c) =>
        c.removeEventListener("change", handleCheckboxChange)
      );
  }, [selectedPost]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleContentClick = (e) => {
    if (
      window.innerWidth <= 767 &&
      sidebarOpen &&
      e.target === e.currentTarget
    ) {
      setSidebarOpen(false);
    }
  };

  const toggleFolder = (path) => {
    setExpandedFolders((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const handleFileClick = async (file) => {
    const response = await fetch(file.content);
    const text = await response.text();
    setSelectedPost({
      id: file.name,
      title: file.name,
      html: marked.parse(text),
      wordCount: text.split(/\s+/).length,
    });
  };

  const renderFolder = (folder, path = "") => {
    const currentPath = path ? `${path}/${folder.name}` : folder.name;
    const isExpanded = expandedFolders[currentPath];

    return (
      <div key={currentPath} className="folder-container">
        <div className="folder-item" onClick={() => toggleFolder(currentPath)}>
          <span className={`folder-icon ${isExpanded ? "expanded" : ""}`}>
            {isExpanded ? "📂" : "📁"}
          </span>
          <span className="folder-name">{folder.name}</span>
        </div>
        {isExpanded && (
          <div className="folder-contents">
            {folder.children.map((item) =>
              item.type === "folder" ? (
                renderFolder(item, currentPath)
              ) : (
                <div
                  key={`${currentPath}/${item.name}`}
                  className={`file-item ${
                    selectedPost?.id === item.name ? "active" : ""
                  }`}
                  onClick={() => handleFileClick(item)}
                >
                  <span className="file-icon">📄</span>
                  <span className="file-name">{item.name}</span>
                </div>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  const filterStructure = (structure, query) =>
    structure
      .map((item) => {
        if (item.type === "file") {
          return item.name.toLowerCase().includes(query) ? item : null;
        }
        const filteredChildren = filterStructure(item.children || [], query);
        return filteredChildren.length ||
          item.name.toLowerCase().includes(query)
          ? { ...item, children: filteredChildren }
          : null;
      })
      .filter(Boolean);

  const filteredStructure = searchQuery
    ? filterStructure(folderStructure, searchQuery.toLowerCase())
    : folderStructure;

  const getReadingTime = (wordCount) =>
    `${Math.ceil(wordCount / 200)} min read`;

  const renderCardGrid = () => (
    <div className="blog-card-grid">
      {allPosts.map((post) => (
        <div
          key={post.id}
          className="blog-card"
          onClick={() => setSelectedPost(post)}
        >
          <h3>{post.title}</h3>
          <p>{post.preview}</p>
          <span className="reading-time">{getReadingTime(post.wordCount)}</span>
        </div>
      ))}
    </div>
  );

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
      <button
        className={`sidebar-toggle ${sidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        {sidebarOpen ? "✕" : "☰"}
      </button>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}

      <div className={`blog-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3
            onClick={() => setSelectedPost(null)}
            style={{ cursor: "pointer" }}
          >
            Documentation
          </h3>
          <div className="sidebar-search">
            <input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="folder-structure">
          {filteredStructure.map((folder) => renderFolder(folder))}
        </div>
      </div>

      <div className="blog-content" onClick={handleContentClick}>
        {selectedPost ? (
          <div className="post-container">
            <div className="post-header">
              <h1>{selectedPost.title}</h1>
              <div className="post-meta">
                <span className="post-date">
                  Last updated: {new Date().toLocaleDateString()}
                </span>
                <span className="post-reading-time">
                  {getReadingTime(selectedPost.wordCount)}
                </span>
              </div>
            </div>
            <article
              className="blog-post"
              dangerouslySetInnerHTML={{ __html: selectedPost.html }}
            />
            <div className="post-footer">
              <div className="post-tags">
                <span>Tags:</span>
                <span className="tag">Documentation</span>
                <span className="tag">Guide</span>
              </div>
              <div className="post-actions">
                <button className="action-btn">👍 Like</button>
                <button className="action-btn">🔗 Share</button>
                <button className="action-btn">📌 Save</button>
              </div>
            </div>
          </div>
        ) : (
          renderCardGrid()
        )}
      </div>
    </div>
  );
};

export default BlogPost;
