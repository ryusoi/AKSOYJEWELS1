// Global High-Performance Video Preloader for Aksoy Jewelry
// Pre-warms video buffers on application start so all videos play instantly upon entering viewport.

export const ALL_APP_VIDEOS = [
  '/videos/gold_header.mp4',
  '/videos/aksoy_logo_hd.mp4',
  '/videos/craft_aksoy.mp4',
  '/videos/blue_ring_aksoy.mp4',
  '/videos/turquoise_aksoy.mp4',
  '/videos/pink_aksoy.mp4',
  '/videos/gold_ring_aksoy.mp4',
  '/videos/pink_flower_aksoy_1.mp4'
];

class VideoPreloadManager {
  private preloadedVideos: Map<string, HTMLVideoElement> = new Map();
  private isInitialized = false;

  public init() {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;

    // Use requestIdleCallback or immediate timeout to start background preloading without blocking main thread
    const startPreload = () => {
      ALL_APP_VIDEOS.forEach((videoUrl) => {
        try {
          // Method 1: Create hidden detached video element to trigger browser media pipeline caching
          const video = document.createElement('video');
          video.preload = 'auto';
          video.muted = true;
          video.playsInline = true;
          video.src = videoUrl;
          video.load();

          this.preloadedVideos.set(videoUrl, video);

          // Method 2: Fetch initial chunk (Range header) for fast browser disk & memory cache warming
          fetch(videoUrl, {
            headers: { Range: 'bytes=0-1048575' }, // Fetch first 1MB of video container + moov atom
            mode: 'cors',
            cache: 'force-cache'
          }).catch(() => {
            // Ignore fetch errors if range request is unsupported
          });
        } catch {
          // Graceful fallback
        }
      });
    };

    if ('requestIdleCallback' in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(startPreload);
    } else {
      setTimeout(startPreload, 100);
    }
  }
}

export const videoPreloadManager = new VideoPreloadManager();
