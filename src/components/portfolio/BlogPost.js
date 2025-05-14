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
  const [activeCategory, setActiveCategory] = useState(null); // State to hold active category filter

  useEffect(() => {
    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: "hljs language-",
    });
  }, []);

  useEffect(() => {
    // Helper function to flatten files within a specific folder and assign a category
    const flattenFolderFiles = (folder, category) => {
      let files = [];
      if (folder.children) {
        folder.children.forEach((item) => {
          if (item.type === "file") {
            files.push({ ...item, category: category });
          } else if (item.type === "folder") {
            // Recursively flatten files in subfolders, keeping the same category
            files = files.concat(flattenFolderFiles(item, category));
          }
        });
      }
      return files;
    };

    // Function to flatten the entire structure and assign categories
    const flattenFiles = (structure) => {
      let files = [];
      structure.forEach((item) => {
        if (item.type === "folder") {
          if (item.name === "Blogs" && item.children) {
            item.children.forEach((childItem) => {
              if (childItem.type === "folder") {
                files = files.concat(
                  flattenFolderFiles(childItem, childItem.name)
                );
              }
            });
          } else {
            files = files.concat(flattenFolderFiles(item, item.name));
          }
        }
      });
      return files;
    };

    const loadAllPosts = async () => {
      const flatFiles = flattenFiles(folderStructure);
      const promises = flatFiles
        .map(async (file) => {
          try {
            const res = await fetch(file.content);
            if (!res.ok) {
              console.error(`Failed to fetch ${file.name}: ${res.statusText}`);
              return null;
            }
            const text = await res.text();
            return {
              id: file.name,
              title: file.name,
              html: marked.parse(text),
              preview: stripMarkdown(text).slice(0, 150) + "...",
              wordCount: text.split(/\s+/).length,
              category: file.category, // Store the category
            };
          } catch (error) {
            console.error(`Error processing ${file.name}:`, error);
            return null;
          }
        })
        .filter(Boolean); // Filter out any null results from failed fetches

      const results = await Promise.all(promises);
      setAllPosts(results);
      setLoading(false);
    };

    loadAllPosts();
  }, []);

  useEffect(() => {
    if (!selectedPost || !selectedPost.html) return;

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
    try {
      const response = await fetch(file.content);
      if (!response.ok) {
        console.error(`Failed to fetch ${file.name}: ${response.statusText}`);
        return;
      }
      const text = await response.text();
      setSelectedPost({
        id: file.name,
        title: file.name,
        html: marked.parse(text),
        wordCount: text.split(/\s+/).length,
      });
      if (window.innerWidth <= 767) {
        setSidebarOpen(false);
      }
    } catch (error) {
      console.error(`Error loading file ${file.name}:`, error);
    }
  };

  const filterStructure = (structure, query, categoryFilter) => {
    let baseStructure = structure;

    if (categoryFilter) {
      const categoryMatch = structure.find(
        (item) =>
          (item.type === "folder" && item.name === categoryFilter) ||
          (item.type === "folder" &&
            item.children &&
            item.children.some(
              (child) =>
                child.type === "folder" && child.name === categoryFilter
            ))
      );

      if (categoryMatch) {
        if (categoryMatch.name === categoryFilter) {
          baseStructure = [categoryMatch];
        } else {
          const categoryFolder = categoryMatch.children.find(
            (child) => child.type === "folder" && child.name === categoryFilter
          );
          baseStructure = categoryFolder ? [categoryFolder] : [];
        }
      } else {
        baseStructure = [];
      }
    }

    return baseStructure
      .map((item) => {
        if (item.type === "file") {
          return item.name.toLowerCase().includes(query) ? item : null;
        }
        const filteredChildren = item.children
          ? filterStructure(item.children, query, null)
          : [];

        if (
          categoryFilter &&
          (item.name === categoryFilter ||
            (item.children &&
              item.children.some(
                (child) =>
                  child.type === "folder" && child.name === categoryFilter
              )))
        ) {
          const actualFolderToShow =
            item.name === categoryFilter
              ? item
              : item.children.find(
                  (child) =>
                    child.type === "folder" && child.name === categoryFilter
                );

          if (actualFolderToShow) {
            return { ...actualFolderToShow, children: filteredChildren };
          } else {
            return null;
          }
        } else {
          return filteredChildren.length > 0 ||
            item.name.toLowerCase().includes(query)
            ? { ...item, children: filteredChildren }
            : null;
        }
      })
      .filter(Boolean);
  };

  const structureToRender =
    searchQuery || activeCategory
      ? filterStructure(
          folderStructure,
          searchQuery.toLowerCase(),
          activeCategory
        )
      : folderStructure;

  const renderFolder = (folder, path = "") => {
    const currentPath = path ? `${path}/${folder.name}` : folder.name;
    const isExpanded = expandedFolders[currentPath];

    const forceExpand =
      activeCategory &&
      folder.name !== activeCategory &&
      folder.children &&
      folder.children.some(
        (child) => child.type === "folder" && child.name === activeCategory
      );

    return (
      <div key={currentPath} className="folder-container">
        <div className="folder-item" onClick={() => toggleFolder(currentPath)}>
          <span
            className={`folder-icon ${
              isExpanded || forceExpand ? "expanded" : ""
            }`}
          >
            {isExpanded || forceExpand ? "📂" : "📁"}
          </span>
          <span className="folder-name">{folder.name}</span>
        </div>
        {(isExpanded || forceExpand) && (
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

  const getReadingTime = (wordCount) =>
    `${Math.ceil(wordCount / 200)} min read`;

  const renderCardGrid = () => {
    const displayedPosts = activeCategory
      ? allPosts.filter((post) => post.category === activeCategory)
      : allPosts;

    const searchedAndFilteredPosts = searchQuery
      ? displayedPosts.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : displayedPosts;

    return (
      <div className="blog-card-grid">
        {searchedAndFilteredPosts.map((post) => (
          <div
            key={post.id}
            className="blog-card"
            onClick={() => setSelectedPost(post)}
          >
            <h3>{post.title}</h3>
            <p>{post.preview}</p>
            <span className="reading-time">
              {getReadingTime(post.wordCount)}
            </span>
          </div>
        ))}
        {searchedAndFilteredPosts.length === 0 && (
          <p>
            No posts found matching your criteria in this category or search.
          </p>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="loading-spinner"></div>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  // Get unique categories from the loaded posts
  const categories = Array.from(
    new Set(allPosts.map((post) => post.category))
  ).filter(Boolean);

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
            onClick={() => {
              setSelectedPost(null);
              setActiveCategory(null);
              setSearchQuery("");
              setExpandedFolders({});
            }}
            style={{ cursor: "pointer" }}
          >
            Documentation
          </h3>
          <div className="sidebar-search">
            <input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedPost(null);
              }}
            />
          </div>
          {/* New div for filters */}
          <div className="sidebar-filters">
            <button
              className={`filter-btn ${
                activeCategory === null ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(null);
                setSelectedPost(null);
                setSearchQuery("");
                setExpandedFolders({});
              }}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedPost(null);
                  setSearchQuery("");
                  setExpandedFolders((prev) => {
                    const newState = {};
                    const findAndExpand = (structure, currentPath = "") => {
                      structure.forEach((item) => {
                        const itemPath = currentPath
                          ? `${currentPath}/${item.name}`
                          : item.name;
                        if (item.type === "folder") {
                          if (item.name === category) {
                            newState[itemPath] = true;
                            let parentPath = currentPath;
                            while (parentPath) {
                              newState[parentPath] = true;
                              parentPath = parentPath.substring(
                                0,
                                parentPath.lastIndexOf("/")
                              );
                            }
                          } else if (item.children) {
                            findAndExpand(item.children, itemPath);
                          }
                        }
                      });
                    };
                    findAndExpand(folderStructure);
                    return newState;
                  });
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="folder-structure">
          {structureToRender.map((folder) => renderFolder(folder))}
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
                {selectedPost.category && (
                  <span className="tag">{selectedPost.category}</span>
                )}
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
