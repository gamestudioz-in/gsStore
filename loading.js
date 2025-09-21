// Loading Skeleton JavaScript Functions
function showLoadingSkeleton() {
    // Hide main content
    const mainContent = document.querySelector('body > *:not(script)');
    if (mainContent) {
        document.body.classList.add('content-hidden');
    }

    // Create and show skeleton
    const skeletonHTML = `
        <div id="loadingSkeleton" class="loading-skeleton">
            <header class="bg-white border-b border-gray-200">
                <div class="max-w-6xl mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <div class="skeleton w-8 h-8 rounded-lg"></div>
                            <div class="skeleton skeleton-header-text w-24"></div>
                        </div>
                        <div class="skeleton skeleton-search"></div>
                    </div>
                </div>
            </header>

            <main class="max-w-6xl mx-auto px-4 py-6">
                <div class="mb-6">
                    <div class="skeleton skeleton-title"></div>
                    <div class="skeleton skeleton-subtitle"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    ${Array(10).fill().map(() => `
                        <div class="skeleton-card">
                            <div class="skeleton skeleton-image"></div>
                            <div class="skeleton skeleton-card-title"></div>
                            <div class="skeleton skeleton-card-subtitle"></div>
                            <div class="skeleton skeleton-card-details"></div>
                        </div>
                    `).join('')}
                </div>
            </main>
        </div>
    `;

    // Insert skeleton before body content
    document.body.insertAdjacentHTML('afterbegin', skeletonHTML);
}

function hideLoadingSkeleton() {
    const skeleton = document.getElementById('loadingSkeleton');
    if (skeleton) {
        skeleton.remove();
    }

    // Show main content with fade in
    document.body.classList.remove('content-hidden');
    document.body.classList.add('content-visible');
}

// Initialize loading on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show skeleton immediately
    showLoadingSkeleton();

    // Simulate loading time (adjust as needed)
    setTimeout(() => {
        hideLoadingSkeleton();
    }, 2000); // 2 seconds loading time
});

// Optional: Show skeleton during dynamic content loading
function showSkeletonForGrid() {
    const gameGrid = document.getElementById('gameGrid');
    if (gameGrid) {
        gameGrid.innerHTML = Array(10).fill().map(() => `
            <div class="skeleton-card">
                <div class="skeleton skeleton-image"></div>
                <div class="skeleton skeleton-card-title"></div>
                <div class="skeleton skeleton-card-subtitle"></div>
                <div class="skeleton skeleton-card-details"></div>
            </div>
        `).join('');
    }
}