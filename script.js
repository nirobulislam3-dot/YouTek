/* ===== Sample Video Data ===== */
const videos = [
  {
    id: "4r7wHMg5Yjg",
    title: "The Crazy Nastyass Honey Badger (original narration by Randall)",
    channel: "czg123",
    views: "১০.৮ কোটি",
    date: "১২ বছর আগে",
    duration: "৩:২১",
    category: "animals",
    description: "Honey badger don't care. Honey badger don't give a shit. Classic nature documentary narration with attitude.",
    isShort: false,
    trending: true
  },
  {
    id: "XeFxdkaFzRA",
    title: "True Facts About The Owl",
    channel: "Ze Frank",
    views: "২ কোটি",
    date: "১১ বছর আগে",
    duration: "৪:২১",
    category: "animals",
    description: "True Facts about the Owl. Hilarious and educational facts about owls presented in Ze Frank's unique style.",
    isShort: false,
    trending: true
  },
  {
    id: "F5FEj9U-CJM",
    title: "True Facts About The Mantis Shrimp",
    channel: "Ze Frank",
    views: "১.৬ কোটি",
    date: "১১ বছর আগে",
    duration: "৪:০১",
    category: "animals",
    description: "The mantis shrimp punches with the force of a .22 caliber bullet. True Facts about this incredible creature.",
    isShort: false,
    trending: false
  },
  {
    id: "Z-BbpaNXbxg",
    title: "True Facts About The Angler Fish",
    channel: "Ze Frank",
    views: "২.৩ কোটি",
    date: "১১ বছর আগে",
    duration: "২:০০",
    category: "animals",
    description: "Deep sea angler fish facts that will blow your mind. Another classic from Ze Frank.",
    isShort: false,
    trending: false
  },
  {
    id: "EQ1HKCYJM5U",
    title: "Funny Talking Animals | Walk On The Wild Side - BBC",
    channel: "BBC",
    views: "৩ কোটি",
    date: "১০ বছর আগে",
    duration: "২:২০",
    category: "funny",
    description: "Animals that talk! Hilarious BBC comedy sketch with talking wildlife.",
    isShort: false,
    trending: true
  },
  {
    id: "xaPepCVepCg",
    title: "Funny talking animals: Alan!.. Alan!.. Steve!",
    channel: "BBC",
    views: "৩.৪ কোটি",
    date: "১০ বছর আগে",
    duration: "১:১৬",
    category: "funny",
    description: "The classic Alan! Alan! Steve! talking animals sketch from BBC's Walk on the Wild Side.",
    isShort: false,
    trending: true
  },
  {
    id: "Bf5TgVRGND4",
    title: "Nature Rx Part 1",
    channel: "Nature Rx",
    views: "৩৯ লাখ",
    date: "৮ বছর আগে",
    duration: "১:৩৩",
    category: "nature",
    description: "A short and beautiful dose of nature to calm your mind. Perfect for stress relief.",
    isShort: false,
    trending: false
  },
  {
    id: "Hm3JodBR-vs",
    title: "Neature Walk - Episode 1",
    channel: "vicscrappyvideos",
    views: "১.৯ কোটি",
    date: "১২ বছর আগে",
    duration: "২:৪৭",
    category: "funny",
    description: "A hilarious parody nature walk with unique commentary and observations.",
    isShort: false,
    trending: false
  },
  {
    id: "o2kXhevOwkg",
    title: "If Mario Games Had Nature Documentaries",
    channel: "Dorkly",
    views: "১৭ লাখ",
    date: "৯ বছর আগে",
    duration: "১:৩২",
    category: "funny",
    description: "What if Mario games were narrated like nature documentaries? Pure comedy gold.",
    isShort: false,
    trending: false
  },
  {
    id: "Q1zbgd6xpGQ",
    title: "True Facts About The Dung Beetle",
    channel: "Ze Frank",
    views: "৮২ লাখ",
    date: "১১ বছর আগে",
    duration: "২:৩৬",
    category: "animals",
    description: "Everything you never wanted to know about dung beetles, presented with humor.",
    isShort: false,
    trending: false
  },
  // Shorts (using same style vertical feel, though YouTube shorts embed works)
  {
    id: "u5CQ-fsp_hg",
    title: "Squirrels use their tails for balance and communication 🐿️",
    channel: "Natural Habitat Shorts",
    views: "১ কোটি",
    date: "২ বছর আগে",
    duration: "০:১৯",
    category: "animals",
    description: "Amazing fact about squirrels and their tails!",
    isShort: true,
    trending: true
  },
  {
    id: "Wt9rfWTyUs4",
    title: "Bats use echolocation to find things they can’t see 🦇",
    channel: "Natural Habitat Shorts",
    views: "১.৪ কোটি",
    date: "২ বছর আগে",
    duration: "০:২৭",
    category: "animals",
    description: "How bats navigate in the dark using sound.",
    isShort: true,
    trending: true
  },
  {
    id: "Oly8f4h5C78",
    title: "Chipmunks have cheek pouches used to store food 🥜",
    channel: "Natural Habitat Shorts",
    views: "৪.৩ কোটি",
    date: "২ বছর আগে",
    duration: "০:২৫",
    category: "animals",
    description: "Cute chipmunk fact about their famous cheek pouches.",
    isShort: true,
    trending: true
  },
  {
    id: "OvD30K-KN3k",
    title: "Axolotls can regrow limbs, brain and heart!",
    channel: "Natural Habitat Shorts",
    views: "১২.৬ কোটি",
    date: "১ বছর আগে",
    duration: "০:৪৬",
    category: "science",
    description: "Incredible regenerative ability of the axolotl salamander.",
    isShort: true,
    trending: true
  },
  {
    id: "EMlBfpO1DDo",
    title: "Honey Badgers can sleep off venomous snake bites",
    channel: "Natural Habitat Shorts",
    views: "১২.২ কোটি",
    date: "১ বছর আগে",
    duration: "১:০০",
    category: "animals",
    description: "Why honey badgers are so tough against snake venom.",
    isShort: true,
    trending: false
  }
];

/* ===== State ===== */
let currentSection = "home";
let currentFilter = "all";
let currentVideo = null;
let likedVideos = JSON.parse(localStorage.getItem("nirbul_liked") || "[]");
let historyVideos = JSON.parse(localStorage.getItem("nirbul_history") || "[]");
let isDark = localStorage.getItem("nirbul_theme") === "dark";

/* ===== DOM Elements ===== */
const videoGrid = document.getElementById("videoGrid");
const trendingGrid = document.getElementById("trendingGrid");
const shortsContainer = document.getElementById("shortsContainer");
const searchGrid = document.getElementById("searchGrid");
const libraryGrid = document.getElementById("libraryGrid");
const relatedGrid = document.getElementById("relatedGrid");
const searchInput = document.getElementById("searchInput");
const toast = document.getElementById("toast");

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("themeBtn").innerHTML = '<i class="fas fa-sun"></i>';
  }

  renderHomeVideos();
  renderTrending();
  renderShorts();
  setupEventListeners();
});

/* ===== Render Functions ===== */
function getThumbnail(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function createVideoCard(video) {
  return `
    <div class="video-card" data-id="${video.id}">
      <div class="thumbnail-wrapper">
        <img src="${getThumbnail(video.id)}" alt="${video.title}" loading="lazy">
        <span class="duration">${video.duration}</span>
      </div>
      <div class="video-details">
        <h3 class="video-title">${video.title}</h3>
        <p class="video-channel">${video.channel}</p>
        <p class="video-stats">${video.views} ভিউ • ${video.date}</p>
      </div>
    </div>
  `;
}

function createRelatedCard(video) {
  return `
    <div class="related-card" data-id="${video.id}">
      <div class="related-thumb">
        <img src="${getThumbnail(video.id)}" alt="${video.title}" loading="lazy">
      </div>
      <div class="related-info">
        <h3 class="video-title">${video.title}</h3>
        <p class="video-channel">${video.channel}</p>
        <p class="video-stats">${video.views} ভিউ</p>
      </div>
    </div>
  `;
}

function createShortCard(video) {
  return `
    <div class="short-card" data-id="${video.id}">
      <img src="${getThumbnail(video.id)}" alt="${video.title}" loading="lazy">
      <div class="short-play-icon"><i class="fas fa-play"></i></div>
      <div class="short-overlay">
        <h3 class="short-title">${video.title}</h3>
        <p class="short-channel">${video.channel} • ${video.views} ভিউ</p>
      </div>
    </div>
  `;
}

function renderHomeVideos(filter = "all") {
  currentFilter = filter;
  let list = videos.filter(v => !v.isShort);
  if (filter !== "all") {
    list = list.filter(v => v.category === filter);
  }
  videoGrid.innerHTML = list.length
    ? list.map(createVideoCard).join("")
    : `<div class="empty-state"><i class="fas fa-video-slash"></i><p>কোনো ভিডিও পাওয়া যায়নি</p></div>`;
}

function renderTrending() {
  const list = videos.filter(v => v.trending && !v.isShort);
  trendingGrid.innerHTML = list.map(createVideoCard).join("");
}

function renderShorts() {
  const list = videos.filter(v => v.isShort);
  shortsContainer.innerHTML = list.map(createShortCard).join("");
}

function renderSearch(query) {
  const q = query.toLowerCase().trim();
  const list = videos.filter(v =>
    v.title.toLowerCase().includes(q) ||
    v.channel.toLowerCase().includes(q) ||
    v.category.toLowerCase().includes(q)
  );
  document.getElementById("searchQuery").textContent = query;
  searchGrid.innerHTML = list.length
    ? list.map(createVideoCard).join("")
    : `<div class="empty-state"><i class="fas fa-search"></i><p>কোনো ফলাফল পাওয়া যায়নি</p></div>`;
}

function renderLibrary(type = "history") {
  let list = [];
  if (type === "history") {
    list = historyVideos.map(id => videos.find(v => v.id === id)).filter(Boolean);
  } else if (type === "liked") {
    list = likedVideos.map(id => videos.find(v => v.id === id)).filter(Boolean);
  }
  libraryGrid.innerHTML = list.length
    ? list.map(createVideoCard).join("")
    : `<div class="empty-state"><i class="fas fa-folder-open"></i><p>এখনো কোনো ভিডিও নেই</p></div>`;
}

/* ===== Navigation ===== */
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(sectionId + "Section").classList.add("active");

  document.querySelectorAll(".nav-item").forEach(n => {
    n.classList.toggle("active", n.dataset.section === sectionId);
  });

  currentSection = sectionId;
  document.body.classList.toggle("watching", sectionId === "watch");

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ===== Watch Video ===== */
function playVideo(id) {
  const video = videos.find(v => v.id === id);
  if (!video) return;

  currentVideo = video;

  // Add to history
  historyVideos = [id, ...historyVideos.filter(h => h !== id)].slice(0, 50);
  localStorage.setItem("nirbul_history", JSON.stringify(historyVideos));

  // Player
  const player = document.getElementById("videoPlayer");
  player.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0"
      title="${video.title}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;

  // Info
  document.getElementById("watchTitle").textContent = video.title;
  document.getElementById("watchViews").textContent = video.views + " ভিউ";
  document.getElementById("watchDate").textContent = video.date;
  document.getElementById("watchChannel").textContent = video.channel;
  document.getElementById("watchDescription").textContent = video.description;
  document.getElementById("channelAvatar").textContent = video.channel.charAt(0).toUpperCase();

  // Like button state
  const likeBtn = document.getElementById("likeBtn");
  if (likedVideos.includes(id)) {
    likeBtn.classList.add("active");
    likeBtn.innerHTML = '<i class="fas fa-thumbs-up"></i> <span>লাইক করা</span>';
  } else {
    likeBtn.classList.remove("active");
    likeBtn.innerHTML = '<i class="fas fa-thumbs-up"></i> <span>লাইক</span>';
  }

  // Related
  const related = videos
    .filter(v => v.id !== id && (v.category === video.category || v.isShort === video.isShort))
    .slice(0, 8);
  relatedGrid.innerHTML = related.map(createRelatedCard).join("");

  showSection("watch");
}

/* ===== Toast ===== */
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

/* ===== Event Listeners ===== */
function setupEventListeners() {
  // Bottom nav
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
      showSection(btn.dataset.section);
    });
  });

  // Logo → Home
  document.getElementById("logoBtn").addEventListener("click", (e) => {
    e.preventDefault();
    showSection("home");
    renderHomeVideos("all");
    document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.filter === "all"));
  });

  // Search
  document.getElementById("searchBtn").addEventListener("click", doSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") doSearch();
  });

  function doSearch() {
    const q = searchInput.value.trim();
    if (!q) return;
    renderSearch(q);
    showSection("search");
  }

  // Filter chips
  document.getElementById("filterChips").addEventListener("click", (e) => {
    if (e.target.classList.contains("chip")) {
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      e.target.classList.add("active");
      renderHomeVideos(e.target.dataset.filter);
    }
  });

  // Categories
  document.getElementById("categoriesGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".category-card");
    if (card) {
      const cat = card.dataset.cat;
      showSection("home");
      document.querySelectorAll(".chip").forEach(c => {
        c.classList.toggle("active", c.dataset.filter === cat);
      });
      renderHomeVideos(cat);
    }
  });

  // Video cards click (event delegation)
  document.getElementById("mainContent").addEventListener("click", (e) => {
    const card = e.target.closest(".video-card, .related-card, .short-card");
    if (card && card.dataset.id) {
      playVideo(card.dataset.id);
    }
  });

  // Theme toggle
  document.getElementById("themeBtn").addEventListener("click", () => {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.getElementById("themeBtn").innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("nirbul_theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      document.getElementById("themeBtn").innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("nirbul_theme", "light");
    }
  });

  // Profile (no real login)
  document.getElementById("profileBtn").addEventListener("click", () => {
    showToast("লগইন ফিচার নেই — এটি একটি ডেমো অ্যাপ");
  });

  // Subscribe
  document.getElementById("subscribeBtn").addEventListener("click", function () {
    this.classList.toggle("subscribed");
    if (this.classList.contains("subscribed")) {
      this.textContent = "সাবস্ক্রাইব করা হয়েছে";
      showToast("সাবস্ক্রাইব করা হয়েছে (ডেমো)");
    } else {
      this.textContent = "সাবস্ক্রাইব";
      showToast("আনসাবস্ক্রাইব করা হয়েছে");
    }
  });

  // Like
  document.getElementById("likeBtn").addEventListener("click", function () {
    if (!currentVideo) return;
    const id = currentVideo.id;
    if (likedVideos.includes(id)) {
      likedVideos = likedVideos.filter(l => l !== id);
      this.classList.remove("active");
      this.innerHTML = '<i class="fas fa-thumbs-up"></i> <span>লাইক</span>';
      showToast("লাইক সরানো হয়েছে");
    } else {
      likedVideos.push(id);
      this.classList.add("active");
      this.innerHTML = '<i class="fas fa-thumbs-up"></i> <span>লাইক করা</span>';
      showToast("লাইক করা হয়েছে");
    }
    localStorage.setItem("nirbul_liked", JSON.stringify(likedVideos));
  });

  // Dislike
  document.getElementById("dislikeBtn").addEventListener("click", () => {
    showToast("ডিসলাইক করা হয়েছে (ডেমো)");
  });

  // Share
  document.getElementById("shareBtn").addEventListener("click", async () => {
    if (!currentVideo) return;
    const url = `https://www.youtube.com/watch?v=${currentVideo.id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentVideo.title,
          text: currentVideo.title,
          url: url
        });
      } catch (err) {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(url).then(() => {
        showToast("লিংক কপি করা হয়েছে!");
      });
    }
  });

  // Save
  document.getElementById("saveBtn").addEventListener("click", () => {
    showToast("ভিডিও সেভ করা হয়েছে (ডেমো)");
  });

  // Library buttons
  document.getElementById("historyBtn").addEventListener("click", () => {
    renderLibrary("history");
  });
  document.getElementById("likedBtn").addEventListener("click", () => {
    renderLibrary("liked");
  });
}
