import React, { useEffect, useState } from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

// Import your blog posts
import post1 from "./blogs/post1.md";
import post2 from "./blogs/post2.md";
import post3 from "./blogs/post3.md";

// Mock folder structure
const folderStructure = [
  {
    name: "blogs",
    type: "folder",
    children: [
      {
        name: "getting-started",
        type: "folder",
        children: [
          { name: "intro.md", type: "file", content: post1 },
          { name: "setup.md", type: "file", content: post2 },
        ],
      },
      {
        name: "advanced",
        type: "folder",
        children: [{ name: "performance.md", type: "file", content: post3 }],
      },
      {
        name: "snippets",
        type: "folder",
        children: [
          { name: "kotlin-examples.md", type: "file", content: post1 },
          { name: "python-tips.md", type: "file", content: post2 },
        ],
      },
    ],
  },
  {
    name: "tutorials",
    type: "folder",
    children: [
      { name: "react-basics.md", type: "file", content: post1 },
      {
        name: "nodejs-guidenodejs-guidenodejs-guidenodejs-guidenodejs-guide.md",
        type: "file",
        content: post2,
      },
    ],
  },
];

const BlogPost = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
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

    // Load first post by default
    const loadFirstPost = async () => {
      const firstFile = findFirstFile(folderStructure);
      if (firstFile) {
        const response = await fetch(firstFile.content);
        const text = await response.text();
        const html = marked.parse(text);
        setSelectedPost({
          id: firstFile.name,
          title: firstFile.name.replace(".md", ""),
          html,
        });
      }
      setLoading(false);
    };

    loadFirstPost();
  }, []);

  // Find first file in folder structure
  const findFirstFile = (structure) => {
    for (const item of structure) {
      if (item.type === "file") return item;
      if (item.children) {
        const found = findFirstFile(item.children);
        if (found) return found;
      }
    }
    return null;
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle checkbox changes
  useEffect(() => {
    const handleCheckboxChange = (e) => {
      e.target.classList.toggle("checked");
    };

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
  }, [selectedPost]);

  const toggleFolder = (path) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const handleFileClick = async (file) => {
    const response = await fetch(file.content);
    const text = await response.text();
    const html = marked.parse(text);
    setSelectedPost({
      id: file.name,
      title: file.name.replace(".md", ""),
      html,
    });
  };

  // Render folder structure recursively
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
            {folder.children.map((item) => {
              const itemPath = `${currentPath}/${item.name}`;
              if (item.type === "folder") {
                return renderFolder(item, currentPath);
              } else {
                return (
                  <div
                    key={itemPath}
                    className={`file-item ${
                      selectedPost?.id === item.name ? "active" : ""
                    }`}
                    onClick={() => handleFileClick(item)}
                  >
                    <span className="file-icon">📄</span>
                    <span className="file-name">{item.name}</span>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    );
  };

  // Filter folder structure based on search query
  const filteredStructure = searchQuery
    ? filterStructure(folderStructure, searchQuery.toLowerCase())
    : folderStructure;

  function filterStructure(structure, query) {
    return structure.filter((item) => {
      if (item.type === "file") {
        return item.name.toLowerCase().includes(query);
      } else {
        const filteredChildren = filterStructure(item.children || [], query);
        return (
          filteredChildren.length > 0 || item.name.toLowerCase().includes(query)
        );
      }
    });
  }

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
      {/* Toggle button only visible on mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`blog-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Documentation</h3>
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

      <div className="blog-content" onClick={() => setSidebarOpen(false)}>
        {selectedPost && (
          <div className="post-container">
            <div className="post-header">
              <h1>{selectedPost.title}</h1>
              <div className="post-meta">
                <span className="post-date">
                  Last updated: {new Date().toLocaleDateString()}
                </span>
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
                <span className="tag">Documentation</span>
                <span className="tag">Guide</span>
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
