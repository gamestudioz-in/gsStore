// -------------------- Data --------------------
const games = [
  // ... keep your exact games array as-is (unchanged) ...
  // I’m including it here verbatim to keep this file self-contained:
  {
    id: 1,
    name: "Brian Lara Cricket 21",
    slug: "brian-lara-cricket-21",
    developer: "Game Studioz",
    logo: "logos/blc21.jpg",
    rating: 4.6,
    downloads: "30K+",
    size: "211.65 MB",
    version: "1.0",
    language: "English",
    price: "FREE",
    category: "Sports",
    age: "7+",
    requirements: "ppsspp emulator is required.",
    updatedOn: "Jan 16, 2021",
    featureImage: "screenshots/blc21/featured.jpg",
    description: "Download Brian Lara Cricket 21 For Android PPSSPP Emulator. It's a New MOD patch of Brian Lara Cricket 07 developed by GAME Studioz.<br>1. REALISTIC JERSEYS & BATPACKS - In this Patch you will get Real Jersey of All International Cricket Teams with their sponsors & Real Bats Designed with real Stickers. <br>2. BRIGHT GRAPHICS - you will get HD Graphics Experience in the Game with NO LAG. <br>3. NEW GROUND & PITCH - New realistic Cricket Ground Experience & HD Designed Pitch.<br>4. All New Exciting Crowd with 4,6 and Out Banners.<br> 5. New AdBoards & PitchAds.<br>6. NEW BOUNDARY LINE - Now you will get new 3D boundary line with New Design.<br>7. RENOVATED 3D STADIUMS - Stadiums Are Renovated & Re-textured by the GAME Studioz Team. <br>8. TWO NEW IPL TEAMS - Mumbai Indians and Chennai Super Kings.<br>9. Updated Squads - Now You will Get All New Players.<br>10. Realistic Faces - New Realistic Faces of New Players. ",
    youtubeVideo: "olbXiXzjMG0",
    screenshots: [
      "screenshots/blc21/1.png",
      "screenshots/blc21/featured.jpg",
      "screenshots/blc21/2.jpg",
      "screenshots/blc21/3.jpg",
      "screenshots/blc21/4.jpg"
    ],
    versionHistory: [
      { version: "1.0", date: "Jan 16, 2021", changes: ["initial release."] }
    ],
    fileType: "ZIP File",
    primaryDownloadText: "BLC21 Game",
    alternateDownloadText: "BLC21 Game (Mirror)",
    downloadNote: "1) Download from any one of the link. 2) Extract and run with PPSSPP emulator.",
    isPasswordProtected: false,
    passwordNote: "",
    passwordVideoLink: "",
    primaryDownload: "https://www.mediafire.com/file/68gds7i93wx3lex/Brain_Lara_Cricket_21_By_Game_Studioz.zip/file",
    alternateDownload: "https://www.mediafire.com/file/68gds7i93wx3lex/Brain_Lara_Cricket_21_By_Game_Studioz.zip/file"
  },
  {
    id: 2,
    name: "KBC Champions",
    slug: "kbc-champions",
    developer: "Game Studioz",
    logo: "logos/kbc24.png",
    rating: 4.5,
    downloads: "5K+",
    size: "35.44 MB",
    version: "1.3",
    language: "English",
    price: "FREE",
    category: "Trivia",
    age: "7+",
    requirements: "Android 7.0+ required",
    updatedOn: "Dec 12, 2024",
    featureImage: "screenshots/kbc24/featured.jpg",
    description: "Play the most realistic Kaun Banega Crorepati game based on the hit TV game show! Put your knowledge to the test by answering increasingly difficult trivia questions. Play through hundreds of new questions or real questions that contestants faced on the show. Use your lifelines wisely to climb the money tree and win the grand prize!<br><b>Do you have what it takes to become a CROREPATI?</b><br><b>KBC CHAMPIONS FEATURES:</b><br>1. Play through hundreds of challenging questions modernised for 2024!<br>2. Try Champions Mode to play real questions contestants faced on the show. How well can you do against their scores?<br>3. Use your lifelines to give yourself the best chances of winning. Phone a friend, ask the audience, use a 50:50!<br>4. Compete on the leaderboards to showcase your quizzing skills against other players!<br>5. Experience the original, suspense-building music, and BIG B's Voice from the series!<br>6. Play on the realistic set from the TV show, simulated in 3D! Feel the drama as the pressure builds. Completely ad-free for seamless, uninterrupted gameplay.",
    youtubeVideo: "vNDnseNVx1I",
    screenshots: [
      "screenshots/kbc24/featured.jpg",
      "screenshots/kbc24/2.jpg",
      "screenshots/kbc24/3.jpg",
      "screenshots/kbc24/4.jpg",
      "screenshots/kbc24/5.jpg",
      "screenshots/kbc24/6.jpg",
      "screenshots/kbc24/7.jpg"
    ],
    versionHistory: [
      { version: "1.3", date: "Dec 12, 2024", changes: ["Main Menu UI Overhaul for Enhanced Navigation and Visual Clarity", "Integrated New Store Module (Includes Bikes, Cars, Apartments) with Coin-Based Economy System", "Refined Question Dataset for Improved Accuracy and Engagement", "Performance and Stability Optimizations Across Core Game Modules", "Resolved Minor UI/UX and Functional Bugs"] },
      { version: "1.2", date: "Nov 24, 2024", changes: ["App Expired Error Message Fixed", "Game Platform Changed (Slight Increase in Game Size)", "Splash Screen Removed", "Fixed Critical Memory Leaks", "Question Fixes and Improvements", "Stability Enhancements"] },
      { version: "1.1", date: "Oct 23, 2024", changes: ["Super Sandook: Added 100+ new questions", "110+ New Questions in Hot Seat Mode", "New Studio Graphics in Classic Mode", "If you answer incorrectly, The correct answer of that question is now displayed", "Added SKIP Button for Big B's SuperSawaal Introduction", "Question Fixes and Improvements", "Stability Enhancements"] },
      { version: "1.0", date: "Sep 12, 2024", changes: ["initial release."] }
    ],
    fileType: "APK File",
    primaryDownloadText: "KBC Champions",
    alternateDownloadText: "KBC Champions[mirror]",
    downloadNote: "Download from any one of the link.",
    isPasswordProtected: false,
    passwordNote: "",
    passwordVideoLink: "",
    primaryDownload: "https://www.mediafire.com/file/j7nz1daaammen8i/KBC_Champions_%255B1.3%255D.apk/file",
    alternateDownload: "https://mega.nz/file/PFFEBSpJ#WEyjx8_1Q_ujs3bWV4m6O1INlhld5G01F64Z6hdKCPE"
  },
  {
    id: 3,
    name: "WWE 2K21 MOD SVR11",
    slug: "wwe-2k21-mod-svr11",
    developer: "Game Studioz",
    logo: "logos/2k21.jpg",
    rating: 4.0,
    downloads: "5K+",
    size: "251 MB",
    version: "1.0",
    language: "English",
    price: "FREE",
    category: "Sports",
    age: "10+",
    requirements: "PPSSPP emulator required.",
    updatedOn: "Jan 16, 2021",
    featureImage: "screenshots/2k21/featured.jpg",
    description: "Download WWE 2K21 For Android PPSSPP Emulator. It's a New MOD patch of WWE SVR 11 developed by GAME Studioz & 360 Modding Co.<br><b>GAME FEATURES INFO: </b><br>1 - All New Wrestlers with latest Attires.<br>2 - All New Arenas.<br>3 - Well Designed Arenas.<br>4 - Fixed Universe Mode.<br>5 - Improved Camera Cuts.<br>6 - All New Virtual Crowd.<br>7 - Updated UI.<br>8 - 60 FPS Gameplay.",
    youtubeVideo: "HuonUjcurbg",
    screenshots: [
      "screenshots/2k21/1.jpg",
      "screenshots/2k21/featured.jpg",
      "screenshots/2k21/2.jpg",
      "screenshots/2k21/3.jpg"
    ],
    versionHistory: [
      { version: "1.0", date: "Jan 16, 2021", changes: ["Initial Release."] },
    ],
    fileType: "ZIP File",
    primaryDownloadText: "SVR 11 ISO FILE",
    alternateDownloadText: "WWE 2K21 TEXTURES",
    downloadNote: "1) Download both the game files. 2) Extract and run with PPSSPP emulator",
    isPasswordProtected: true,
    passwordNote: "Password protected archive - Check video for password",
    passwordVideoLink: "https://youtu.be/HuonUjcurbg?feature=shared",
    primaryDownload: "https://www.mediafire.com/file/m1ohmht3txm6854/SVR_11_FOR_WWE_2K21.7z/file",
    alternateDownload: "https://www.mediafire.com/file/v9di653w0jd80bf/WWE_2K21_Textures_Pack_by_Game_Studioz.zip/file"
  },
  {
    id: 4,
    name: "Brian Lara Cricket 20",
    slug: "brian-lara-cricket-20",
    developer: "Game Studioz",
    logo: "logos/blc20.png",
    rating: 4.6,
    downloads: "30K+",
    size: "211 MB",
    version: "1.0",
    language: "English",
    price: "FREE",
    category: "Sports",
    age: "7+",
    requirements: "ppsspp emulator is required.",
    updatedOn: "Jul 8, 2020",
    featureImage: "screenshots/blc20/featured.png",
    description: "Download Brain Lara Cricket 20 For Android PPSSPP Emulator. It's a New MOD patch of Brain Lara Cricket 07 developed by GAME Studioz.<br><b>GAME FEATURES:</b><br>1 - REALISTIC JERSEYS & BATPACKS - In this game you will get Real Jersey of All International Cricket Teams with their sponsors & Real Bats Designed with real Stickers.<br>2 - BRIGHT GRAPHICS - you will get HD Graphics Experience in the Game with NO LAG.<br>3. NEW GROUND & PITCH - New realistic Cricket Ground Experience & HD Designed Pitch.<br>4 - FIREWORKS - Fireworks After Match winning Celebrations.<br>5 - New AdBoards & PitchAds.<br>6 - NEW BOUNDARY LINE - Now you will get new 3D boundary line with New Design.<br>7 - RENOVATED 3D STADIUMS - Stadiums Are Renovated & Re-textured by the GAME Studioz Team.<br>8 - NEW SCOREBOARD, OVERLAYS & UPDATED UI.<br>9 - NEW STADIUMS - London and Kolkata.<br>10 - Two NEW VIP TEAMS - LegendsXI and AssociateXI & More Surprises!",
    youtubeVideo: "z1P1jbQmP7g",
    screenshots: [
      "screenshots/blc20/1.jpg",
      "screenshots/blc20/featured.png",
      "screenshots/blc20/2.png",
      "screenshots/blc20/3.png",
      "screenshots/blc20/4.png"
    ],
    versionHistory: [
      { version: "1.0", date: "Jul 8, 2020", changes: ["initial release."] }
    ],
    fileType: "ZIP File",
    primaryDownloadText: "BLC20 Game",
    alternateDownloadText: "Speed Fix File",
    downloadNote: "1) Download both the game files. 2) Extract and run with PPSSPP emulator",
    isPasswordProtected: false,
    passwordNote: "",
    passwordVideoLink: "",
    primaryDownload: "https://www.mediafire.com/file/up35n0lyvgnqvub/BRAIN_LARA_CRICKET_20%255BBETA%255D_By_GAME_Studioz.zip/file",
    alternateDownload: "https://www.mediafire.com/file/9lajyuipco54c3d/CRASH_FIX_SET%2528LOW_END_DEVICE%2529.zip/file"
  }
];

// -------------------- State --------------------
let currentGame = null;
let showingAllVersions = false;
let userSelectedRating = 0;

// -------------------- Boot --------------------
document.addEventListener('DOMContentLoaded', function () {
  renderGames(games); // Render all games initially
  setupScrollAnimations();
  setupRatingInteractions();
  initRouting(); // hash routing, safe for GitHub Pages
});

// -------------------- Assets --------------------
// Always use explicit relative paths; no need to compute repo base on GitHub Pages
function getAssetPath(relativePath) {
  // Check if path is already a full URL (http or https)
  if (/^https?:\/\//.test(relativePath)) {
    return relativePath;
  }
  return `./${relativePath}`; // ensures ./logos/... ./screenshots/... from index root
}

// -------------------- Hash Router --------------------
function initRouting() {
  // Back/forward navigation
  window.addEventListener('hashchange', handleRoute);
  // Back button in modal
  const backBtn = document.getElementById('backButton');
  if (backBtn) backBtn.addEventListener('click', () => navigateToHome());

  // Initial route
  handleRoute();
}

function handleRoute() {
  // Patterns: "#/game/<slug>" or no hash for home
  const hash = window.location.hash || '';
  const parts = hash.replace(/^#\/?/, '').split('/'); // e.g., ["game","slug"]
  const route = parts[0];
  const param = parts[1];

  if (route === 'game' && param) {
    const slug = decodeURIComponent(param);
    const game = games.find(g => g.slug === slug);
    if (game) {
      openModal(game, { skipUpdateURL: true }); // already on desired URL
      return;
    }
    // Invalid slug -> go home
    navigateToHome();
    return;
  }

  // Home route
  closeModal({ silent: true }); // ensure modal closed without changing URL again
}

function navigateToGame(game) {
  const newHash = `#/game/${encodeURIComponent(game.slug)}`;
  if (window.location.hash !== newHash) {
    window.location.hash = newHash;
  }
  document.title = `${game.name} - Game Studioz Store`;
}

function navigateToHome() {
  if (window.location.hash) {
    // This triggers hashchange -> handleRoute will close modal
    window.location.hash = '';
  } else {
    // Already home, ensure UI
    closeModal({ silent: true });
  }
  document.title = 'Game Studioz Store';
}

// -------------------- YouTube helper --------------------
function extractYouTubeID(url) {
  if (!url) return null;
  // If it's already an 11-char ID
  if (url.length === 11 && !url.includes('/') && !url.includes('=')) return url;
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|[?&]v=)([^#&?]{11}).*/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

// -------------------- Render list --------------------
function renderGames(gamesToRender) {
  const gameGrid = document.getElementById('gameGrid');
  if (!gameGrid) return;
  
  // Fade out old cards
  Array.from(gameGrid.children).forEach((card, index) => {
    card.style.animationDelay = `${index * 0.02}s`;
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
  });

  // After fade-out, replace HTML and fade in new cards
  setTimeout(() => {
    gameGrid.innerHTML = '';
    gamesToRender.forEach((game, index) => {
      const gameCard = createGameCard(game);
      gameCard.style.animationDelay = `${index * 0.08}s`;
      gameGrid.appendChild(gameCard);
      // Trigger fade-in animation
      setTimeout(() => gameCard.classList.add('animate-fadeInUp', 'opacity-100'), 20);
    });
  }, 200); // Wait for fade-out
}


function createGameCard(game) {
  const card = document.createElement('div');
  // MODIFIED: Use new dark-theme classes from index.html
  card.className = 'game-card card-hover cursor-pointer opacity-0 transition-all duration-300'; 
  card.onclick = () => {
    openModal(game);
  };

  // MODIFIED: Use new dark-theme HTML structure
  card.innerHTML = `
    <img src="${getAssetPath(game.featureImage)}" alt="${game.name}" class="w-full h-40 object-cover">
    <div class="p-4">
      <div class="flex items-start space-x-3">
        <img src="${getAssetPath(game.logo)}" alt="${game.name} Logo" class="app-logo flex-shrink-0">
        <div>
          <h4 class="font-bold text-lg text-brand-text-primary mb-1 truncate">${game.name}</h4>
          <p class="text-sm text-brand-text-secondary mb-2">${game.developer}</p>
          <div class="flex items-center text-sm">
            <span class="text-yellow-400 mr-1"><i class="fas fa-star"></i></span>
            <span class="font-medium text-brand-text-secondary">${game.rating}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  return card;
}


function generateStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
  if (hasHalfStar) stars += '<i class="fas fa-star-half-alt"></i>';

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
  return stars;
}

// -------------------- Modal/detail --------------------
function openModal(game, opts = {}) {
  currentGame = game;
  showingAllVersions = false;

  // Update URL to deep link (unless routing invoked us)
  if (!opts.skipUpdateURL) {
    navigateToGame(game);
  }

  // Populate modal content
  document.getElementById('modalLogo').src = getAssetPath(game.logo);
  document.getElementById('modalLogo').alt = `${game.name} Logo`;
  document.getElementById('modalTitle').textContent = game.name;
  document.getElementById('modalDeveloper').textContent = game.developer;
  document.getElementById('modalRatingNum').textContent = game.rating;
  document.getElementById('modalRating').innerHTML = generateStars(game.rating);
  document.getElementById('modalDownloads').textContent = game.downloads;
  document.getElementById('modalAge').textContent = game.age;
  document.getElementById('modalRequirements').textContent = game.requirements;
  document.getElementById('modalDescription').innerHTML = game.description;
  document.getElementById('modalSize').textContent = game.size;
  document.getElementById('modalSizeDetail').textContent = game.size;
  document.getElementById('modalVersion').textContent = game.version;
  document.getElementById('modalCategory').textContent = game.category;
  document.getElementById('modalDownloadsDetail').textContent = game.downloads;
  document.getElementById('modalLanguage').textContent = game.language;
  document.getElementById('modalPrice').textContent = game.price;
  document.getElementById('modalUpdated').textContent = game.updatedOn;

  // Feedback game name
  document.getElementById('feedbackGameName').value = game.name;

  // YouTube
  const videoId = extractYouTubeID(game.youtubeVideo);
  if (videoId) {
    document.getElementById('youtubeVideoSection').style.display = 'block';
    document.getElementById('youtubeVideo').src = `https://www.youtube.com/embed/${videoId}`;
  } else {
    document.getElementById('youtubeVideoSection').style.display = 'none';
    document.getElementById('youtubeVideo').src = '';
  }

  // Screenshots
  const screenshotsContainer = document.getElementById('modalScreenshots');
  screenshotsContainer.innerHTML = '';
  game.screenshots.forEach((screenshot, index) => {
    const img = document.createElement('img');
    img.src = getAssetPath(screenshot);
    img.className = 'screenshot-image flex-shrink-0';
    img.alt = `${game.name} Screenshot ${index + 1}`;
    screenshotsContainer.appendChild(img);
  });

  // Version history
  populateVersionHistory();

  // Show modal
  const appModal = document.getElementById('appModal');
  appModal.classList.add('active');
  appModal.scrollTop = 0; // Scroll to top
  document.body.style.overflow = 'hidden';

  // Animate sections
  setTimeout(() => {
    // Animate sections
    const sections = appModal.querySelectorAll('.section-animate');
    sections.forEach(sec => sec.classList.remove('visible')); // Reset
    setTimeout(() => {
      sections.forEach((sec, index) => {
        setTimeout(() => sec.classList.add('visible'), index * 100);
      });
    }, 100); // Stagger animation
  }, 100);
}

function populateVersionHistory() {
  const versionContainer = document.getElementById('versionHistory');
  const seeMoreBtn = document.getElementById('seeMoreVersions');
  if (!versionContainer || !seeMoreBtn) return;
  
  versionContainer.innerHTML = '';

  const versionsToShow = showingAllVersions ? currentGame.versionHistory : currentGame.versionHistory.slice(0, 3);

  versionsToShow.forEach((version) => {
    const versionDiv = document.createElement('div');
    // MODIFIED: Use dark theme classes
    versionDiv.className = 'border-l-4 border-brand-accent pl-4 pb-4 last:pb-0'; 
    versionDiv.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold text-brand-text-primary">Version ${version.version}</span>
        <span class="text-brand-text-secondary text-sm">${version.date}</span>
      </div>
      <ul class="text-brand-text-secondary text-sm space-y-1">
        ${version.changes.map(change => `<li>• ${change}</li>`).join('')}
      </ul>
    `;
    versionContainer.appendChild(versionDiv);
  });

  if (currentGame.versionHistory.length > 3) {
    seeMoreBtn.classList.remove('hidden');
    seeMoreBtn.innerHTML = showingAllVersions
      ? '<i class="fas fa-chevron-up mr-1"></i>Show Less'
      : '<i class="fas fa-chevron-down mr-1"></i>See More Versions';
  } else {
    seeMoreBtn.classList.add('hidden');
  }
}

// Make this function global
window.toggleVersionHistory = () => {
  showingAllVersions = !showingAllVersions;
  populateVersionHistory();
}

function closeModal(options = {}) {
  const modal = document.getElementById('appModal');
  if (!modal || !modal.classList.contains('active')) return; // Already closed

  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  currentGame = null;
  showingAllVersions = false;
  userSelectedRating = 0;
  resetRatingStars();

  // Clear feedback form
  document.getElementById('feedbackGameName').value = '';
  document.getElementById('feedbackName').value = '';
  document.getElementById('feedbackEmail').value = '';
  document.getElementById('feedbackMessage').value = '';
  document.getElementById('feedbackType').selectedIndex = 0;

  // Only change URL if not called from router path change
  if (!options.silent) {
    navigateToHome();
  }

  // Clear video src to stop playback when closing
  const iframe = document.getElementById('youtubeVideo');
  if (iframe) iframe.src = '';
}

// -------------------- Download modal --------------------
// Make global
window.showDownloadModal = () => {
  if (!currentGame) return;

  // MODIFIED: Use localStorage
  const isSubscribed = localStorage.getItem('gs_store_subscribed') === 'true';

  if (!isSubscribed) {
    showSubscribeModal(); // Show subscribe modal first
    return;
  }

  // If already subscribed, show download modal
  document.getElementById('downloadAppName').textContent = currentGame.name;
  document.getElementById('downloadSize').textContent = currentGame.size;
  document.getElementById('downloadVersion').textContent = `v${currentGame.version}`;
  document.getElementById('downloadFileType').textContent = currentGame.fileType;
  document.getElementById('downloadNote').textContent = currentGame.downloadNote;

  const passwordSection = document.getElementById('passwordSection');
  if (currentGame.isPasswordProtected) {
    passwordSection.style.display = 'block';
    document.getElementById('passwordNote').textContent = currentGame.passwordNote;
    document.getElementById('passwordVideoLink').href = currentGame.passwordVideoLink;
  } else {
    passwordSection.style.display = 'none';
  }

  document.getElementById('primaryDownloadBtn').innerHTML = `
    <i class="fas fa-download"></i>
    <span>${currentGame.primaryDownloadText}</span>
  `;
  document.getElementById('alternateDownloadBtn').innerHTML = `
    <i class="fas fa-server"></i>
    <span>${currentGame.alternateDownloadText}</span>
  `;

  document.getElementById('downloadModal').classList.add('active');
}

// Make global
window.closeDownloadModal = () => {
  document.getElementById('downloadModal').classList.remove('active');
}

// Make global
window.handleDownload = (type) => {
  // MODIFIED: Check localStorage again
  const isSubscribed = localStorage.getItem('gs_store_subscribed') === 'true';

  if (!isSubscribed) {
    closeDownloadModal();
    setTimeout(() => showSubscribeModal(), 200);
    return;
  }

  const downloadUrl = type === 'primary' ? currentGame.primaryDownload : currentGame.alternateDownload;
  window.open(downloadUrl, '_blank');
  closeDownloadModal();
}

// -------------------- Subscribe modal --------------------
function showSubscribeModal() {
  document.getElementById('subscribeModal').classList.add('active');
}

// Make global
window.closeSubscribeModal = () => {
  document.getElementById('subscribeModal').classList.remove('active');
}

// Make global
window.subscribe = () => {
  const youtubeChannelUrl = 'https://youtube.com/@gamestudioz?feature=shared';
  const youtubeAppUrl = 'https://youtube.com/@gamestudioz?feature=shared';

  // MODIFIED: Use localStorage
  localStorage.setItem('gs_store_subscribed', 'true');
  closeSubscribeModal();

  const link = document.createElement('a');
  link.href = youtubeAppUrl;
  link.style.display = 'none';
  document.body.appendChild(link);

  try {
    link.click();
    setTimeout(() => {
      // Fallback for browsers that block app URLs
      if(!document.hidden) {
         window.open(youtubeChannelUrl, '_blank');
      }
    }, 1000);
  } catch (e) {
    window.open(youtubeChannelUrl, '_blank');
  } finally {
    document.body.removeChild(link);
  }

  setTimeout(() => {
    // We can't use alert, so just log it and open the modal
    console.log('Thanks for visiting our YouTube channel! You can now download games.');
    showDownloadModal(); // Automatically open download modal after "subscribing"
  }, 2000);
}

// -------------------- Feedback (Gmail) --------------------
// Make global
window.sendFeedback = () => {
  if (!currentGame) {
    console.error('Open a game first to send feedback.');
    return;
  }

  const gameName = document.getElementById('feedbackGameName').value.trim();
  const userName = document.getElementById('feedbackName').value.trim();
  const userEmail = document.getElementById('feedbackEmail').value.trim();
  const feedbackType = document.getElementById('feedbackType').value;
  const message = document.getElementById('feedbackMessage').value.trim();

  if (!userName) {
    console.error('Please enter your name!');
    document.getElementById('feedbackName').focus();
    return;
  }
  if (!message) {
    console.error('Please enter your feedback message!');
    document.getElementById('feedbackMessage').focus();
    return;
  }

  const developerEmail = 'contact.gamestudioz@gmail.com';
  const subject = `Game Feedback: ${gameName} - ${feedbackType.charAt(0).toUpperCase() + feedbackType.slice(1)}`;
  const emailBody = `Hello Game Studioz Team,

I hope this email finds you well. I would like to share my feedback about one of your games.

GAME DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Game Name: ${gameName}
Developer: ${currentGame.developer}
Version: ${currentGame.version}
Category: ${currentGame.category}

FEEDBACK DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Feedback Type: ${feedbackType.charAt(0).toUpperCase() + feedbackType.slice(1)}
From: ${userName}${userEmail ? ' (' + userEmail + ')' : ''}

MESSAGE:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for creating amazing games! Looking forward to your response.

Best regards,
${userName}

---
This feedback was sent via GS Store App
Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

  // Compose URLs
  const mailtoUrl = `mailto:${encodeURIComponent(developerEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(developerEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  // Simple approach: open mailto link, and fallback to web Gmail if it fails
  try {
      window.location.href = mailtoUrl;
      setTimeout(() => {
          console.log('Opening your email app to send feedback...');
      }, 300);
  } catch (e) {
      // Fallback to web
      window.open(gmailWebUrl, '_blank');
  }

  // Clear form
  document.getElementById('feedbackName').value = '';
  document.getElementById('feedbackEmail').value = '';
  document.getElementById('feedbackMessage').value = '';
  document.getElementById('feedbackType').selectedIndex = 0;
}

// -------------------- Rating --------------------
function setupRatingInteractions() {
  const stars = document.querySelectorAll('#userRating .star-interactive');
  const ratingText = document.getElementById('ratingText');
  if(!ratingText) return;

  stars.forEach((star, index) => {
    star.addEventListener('mouseenter', () => {
      highlightStars(index + 1);
      updateRatingText(index + 1);
    });

    star.addEventListener('click', () => {
      userSelectedRating = index + 1;
      highlightStars(userSelectedRating);
      updateRatingText(userSelectedRating);
    });
  });

  const container = document.getElementById('userRating');
  if (container) {
    container.addEventListener('mouseleave', () => {
      if (userSelectedRating > 0) {
        highlightStars(userSelectedRating);
        updateRatingText(userSelectedRating);
      } else {
        resetRatingStars();
      }
    });
  }
}

function highlightStars(rating) {
  const stars = document.querySelectorAll('#userRating .star-interactive');
  stars.forEach((star, index) => {
    if (index < rating) star.classList.add('active');
    else star.classList.remove('active');
  });
}

function resetRatingStars() {
  const stars = document.querySelectorAll('#userRating .star-interactive');
  stars.forEach(star => star.classList.remove('active'));
  const ratingText = document.getElementById('ratingText');
  if (ratingText) ratingText.textContent = '';
  userSelectedRating = 0;
}

function updateRatingText(rating) {
  const ratingTexts = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very Good', 5: 'Excellent' };
  const ratingText = document.getElementById('ratingText');
  if (ratingText) ratingText.textContent = ratingTexts[rating] || '';
}

// Make global
window.submitRating = () => {
  if (!currentGame) {
    console.error('Open a game first to rate.');
    return;
  }
  if (userSelectedRating === 0) {
    console.error('Please select a rating first!');
    return;
  }
  console.log(`🌟 Thank you for rating ${currentGame.name} with ${userSelectedRating} star${userSelectedRating > 1 ? 's' : ''}!`);
  resetRatingStars();
}

// -------------------- Animations --------------------
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.1, rootMargin: '0px' });

  // Animate sections in modal
  document.querySelectorAll('#appModal .section-animate').forEach(section => {
    section.classList.remove('visible'); // Reset on open
    observer.observe(section);
  });
  
  // Animate sections on main page
  document.querySelectorAll('main .animate-fadeInUp').forEach(section => {
    observer.observe(section);
  });
}

// -------------------- Global interactions --------------------
// Close modals when clicking outside
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal') && e.target.classList.contains('fixed')) {
    if (e.target.id === 'downloadModal') closeDownloadModal();
    if (e.target.id === 'subscribeModal') closeSubscribeModal();
  }
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const searchContainer = document.querySelector('.search-container');

if (searchInput) {
  searchInput.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    
    // Filter games
    const filteredGames = games.filter(game =>
      game.name.toLowerCase().includes(searchTerm) ||
      game.developer.toLowerCase().includes(searchTerm) ||
      game.category.toLowerCase().includes(searchTerm)
    );
    
    // Re-render the grid with the filtered games
    renderGames(filteredGames);

    // --- Suggestion Box Logic ---
    if (searchTerm.length > 0 && filteredGames.length > 0) {
      searchSuggestions.innerHTML = '';
      filteredGames.slice(0, 5).forEach(game => { // Show top 5 suggestions
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.textContent = game.name;
        item.onclick = (e) => {
          e.stopPropagation(); // Prevent click from closing box immediately
          openModal(game);
          searchInput.value = '';
          searchSuggestions.style.display = 'none';
        };
        searchSuggestions.appendChild(item);
      });
      searchSuggestions.style.display = 'block';
    } else {
      searchSuggestions.style.display = 'none';
    }
  });

  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (searchContainer && !searchContainer.contains(e.target)) {
      searchSuggestions.style.display = 'none';
    }
  });
}


// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (document.getElementById('subscribeModal').classList.contains('active')) closeSubscribeModal();
    else if (document.getElementById('downloadModal').classList.contains('active')) closeDownloadModal();
    else if (document.getElementById('appModal').classList.contains('active')) navigateToHome(); // triggers hashchange -> close
  }
});


