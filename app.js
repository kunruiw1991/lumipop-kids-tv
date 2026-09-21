const VIDEOS = [
  // Channel 1: Lumi-Pop Guardians (Original Veo 3.1 3D Animation)
  {
    id: 'lumipop_mv_full',
    channel: 'lumipop',
    series: 'Lumi-Pop Guardians 3D',
    title: 'Golden Soda Star! (Full 3D Animated Music Video)',
    subtitle: 'Rumi-Bop, Mira-Mel & Zoey-Zing • 124 BPM K-Pop Sing-Along',
    duration: '0:24',
    src: 'videos/lumipop_mv_full.mp4',
    thumb: 'assets/thumbs/lumipop_mv_full.jpg'
  },
  {
    id: 'lumipop_shot1',
    channel: 'lumipop',
    series: 'Lumi-Pop Guardians 3D',
    title: 'Shot 1: Rumi-Bop Star-Shield Temporary Tattoo Power-Up!',
    subtitle: 'Tap the glowing wrist sticker for golden star magic!',
    duration: '0:08',
    src: 'videos/lumipop_shot1.mp4',
    thumb: 'assets/thumbs/lumipop_shot1.jpg'
  },
  {
    id: 'lumipop_shot2',
    channel: 'lumipop',
    series: 'Lumi-Pop Guardians 3D',
    title: 'Shot 2: Golden Soda Star Stage Dance & Grumble-Bunnies!',
    subtitle: '3D concert choreography with glowing soda-pop bubbles',
    duration: '0:08',
    src: 'videos/lumipop_shot2.mp4',
    thumb: 'assets/thumbs/lumipop_shot2.jpg'
  },
  {
    id: 'lumipop_shot3',
    channel: 'lumipop',
    series: 'Lumi-Pop Guardians 3D',
    title: 'Shot 3: Star-Paw Trio Synchronized Choreography!',
    subtitle: 'All 3 magical K-Pop guardians dance & strike a hero pose',
    duration: '0:08',
    src: 'videos/lumipop_shot3.mp4',
    thumb: 'assets/thumbs/lumipop_shot3.jpg'
  },

  // Channel 2: K-Pop: Demon Hunters (Pure Animated Movie Songs)
  {
    id: 'dh_01_soda_pop',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'Saja Boys — "My Little Soda Pop" (Animated Movie MV)',
    subtitle: 'Pure 3D animated movie stage performance',
    duration: '2:40',
    src: 'videos/dh_01_soda_pop.mp4',
    thumb: 'assets/thumbs/dh_01_soda_pop.jpg'
  },
  {
    id: 'dh_02_golden_lyrics',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'HUNTR/X — "GOLDEN" (Official Animated Sing-Along MV)',
    subtitle: 'Rumi, Mira & Zoey golden concert stage anthem',
    duration: '3:15',
    src: 'videos/dh_02_golden_lyrics.mp4',
    thumb: 'assets/thumbs/dh_02_golden_lyrics.jpg'
  },
  {
    id: 'dh_03_takedown_finale',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'HUNTR/X — "Golden + TAKEDOWN" Finale Concert Stage',
    subtitle: 'Pure 3D animated finale stage choreography',
    duration: '3:42',
    src: 'videos/dh_03_takedown_finale.mp4',
    thumb: 'assets/thumbs/dh_03_takedown_finale.jpg'
  },
  {
    id: 'dh_04_what_it_sounds_like',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'HUNTR/X — "What It Sounds Like" (Animated Movie MV)',
    subtitle: 'Vocal harmony & glowing skybridge animation',
    duration: '4:29',
    src: 'videos/dh_04_what_it_sounds_like.mp4',
    thumb: 'assets/thumbs/dh_04_what_it_sounds_like.jpg'
  },
  {
    id: 'dh_05_your_idol_stage',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'Saja Boys — "Your Idol" (Animated Concert Stage)',
    subtitle: 'Rival boyband synchronized stage performance',
    duration: '1:54',
    src: 'videos/dh_05_your_idol_stage.mp4',
    thumb: 'assets/thumbs/dh_05_your_idol_stage.jpg'
  },
  {
    id: 'dh_06_your_idol_cut',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'Saja Boys — "Your Idol" (Pure 3D Choreography Cut)',
    subtitle: 'High-energy animated dance formation',
    duration: '1:58',
    src: 'videos/dh_06_your_idol_cut.mp4',
    thumb: 'assets/thumbs/dh_06_your_idol_cut.jpg'
  },
  {
    id: 'dh_07_soda_pop_cut',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'Saja Boys — "Soda Pop" (Pure Animated Dance Cut)',
    subtitle: 'Pastel soda-pop bubbles & choreography cut',
    duration: '2:40',
    src: 'videos/dh_07_soda_pop_cut.mp4',
    thumb: 'assets/thumbs/dh_07_soda_pop_cut.jpg'
  },
  {
    id: 'dh_08_golden_takedown',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'HUNTR/X — "Golden & Take Down" Medley Animation',
    subtitle: 'Back-to-back animated movie concert medley',
    duration: '3:51',
    src: 'videos/dh_08_golden_takedown.mp4',
    thumb: 'assets/thumbs/dh_08_golden_takedown.jpg'
  },
  {
    id: 'dh_09_highlight',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'HUNTR/X — Animated Movie Highlight Clip',
    subtitle: 'Expressive 3D character animation showcase',
    duration: '0:55',
    src: 'videos/dh_09_highlight.mp4',
    thumb: 'assets/thumbs/dh_09_highlight.jpg'
  },
  {
    id: 'dh_10_all_songs',
    channel: 'demonhunters',
    series: 'K-Pop: Demon Hunters',
    title: 'K-Pop: Demon Hunters — All Animated Movie Songs Medley',
    subtitle: 'Full animated movie song compilation',
    duration: '4:10',
    src: 'videos/dh_10_all_songs.mp4',
    thumb: 'assets/thumbs/dh_10_all_songs.jpg'
  }
];

let currentChannel = 'all';
let currentVideoIndex = 0;
let loopSingleSong = true;

const videoEl = document.getElementById('main-video');
const nowTagEl = document.getElementById('now-playing-tag');
const nowTitleEl = document.getElementById('now-playing-title');
const cardsGridEl = document.getElementById('video-cards-grid');
const playBtnTextEl = document.getElementById('play-btn-label');
const playBtnEmojiEl = document.getElementById('play-btn-emoji');
const loopBtnEl = document.getElementById('btn-loop');
const theaterMainGrid = document.getElementById('theater-main-grid');
const stickerSection = document.getElementById('sticker-book-section');
const introVoiceAudio = new Audio('assets/intro_voice.wav');

function spawnSparkles(x, y, count = 12) {
  const layer = document.getElementById('sparkle-layer');
  const icons = ['⭐', '✨', '🫧', '💖', '🎵', '🌟', '🐾'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'floating-sparkle';
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    const dx = (Math.random() - 0.5) * 220;
    el.style.left = `${x + (Math.random() - 0.5) * 40}px`;
    el.style.top = `${y + (Math.random() - 0.5) * 40}px`;
    el.style.setProperty('--dx', `${dx}px`);
    layer.appendChild(el);
    setTimeout(() => el.remove(), 1350);
  }
}

document.addEventListener('pointerdown', (e) => {
  if (e.target.closest('button, .video-card, .sticker-card, .brand-badge')) {
    spawnSparkles(e.clientX, e.clientY, 10);
  }
});

function getFilteredVideos() {
  if (currentChannel === 'lumipop') {
    return VIDEOS.filter(v => v.channel === 'lumipop');
  }
  if (currentChannel === 'demonhunters') {
    return VIDEOS.filter(v => v.channel === 'demonhunters');
  }
  return VIDEOS;
}

function renderPlaylist() {
  const list = getFilteredVideos();
  cardsGridEl.innerHTML = '';
  const activeVid = VIDEOS[currentVideoIndex];

  list.forEach((v) => {
    const globalIdx = VIDEOS.findIndex(item => item.id === v.id);
    const isPlaying = globalIdx === currentVideoIndex;
    const card = document.createElement('div');
    card.className = `video-card ${isPlaying ? 'active-playing' : ''}`;
    card.onclick = () => selectAndPlayVideo(globalIdx);

    const pillClass = v.channel === 'demonhunters' ? 'card-series-pill dh-pill' : 'card-series-pill';
    card.innerHTML = `
      <div class="thumb-box">
        <img src="${v.thumb}" alt="${v.title}" loading="lazy" />
        <span class="thumb-badge">${v.duration}</span>
      </div>
      <div class="card-meta">
        <span class="${pillClass}">${v.series}</span>
        <div class="card-title">${v.title}</div>
        <div class="card-subtitle">${v.subtitle}</div>
      </div>
      <div class="card-play-pill">${isPlaying ? '🎵' : '▶'}</div>
    `;
    cardsGridEl.appendChild(card);
  });
}

function selectAndPlayVideo(index, autoPlay = true) {
  currentVideoIndex = (index + VIDEOS.length) % VIDEOS.length;
  const v = VIDEOS[currentVideoIndex];
  videoEl.src = v.src;
  videoEl.poster = v.thumb;
  videoEl.loop = loopSingleSong;
  nowTagEl.textContent = `🌟 ${v.series} • (${currentVideoIndex + 1} of ${VIDEOS.length})`;
  nowTitleEl.textContent = v.title;
  renderPlaylist();

  if (autoPlay) {
    videoEl.play().catch(() => {});
  }
}

function switchChannel(channel) {
  currentChannel = channel;
  document.getElementById('tab-all').className = 'tab-btn ' + (channel === 'all' ? 'active-lumipop' : '');
  document.getElementById('tab-lumipop').className = 'tab-btn ' + (channel === 'lumipop' ? 'active-lumipop' : '');
  document.getElementById('tab-dh').className = 'tab-btn ' + (channel === 'demonhunters' ? 'active-demonhunters' : '');
  document.getElementById('tab-stickers').className = 'tab-btn ' + (channel === 'stickers' ? 'active-stickers' : '');

  if (channel === 'stickers') {
    theaterMainGrid.style.display = 'none';
    stickerSection.classList.add('visible');
  } else {
    theaterMainGrid.style.display = 'grid';
    stickerSection.classList.remove('visible');
    const filtered = getFilteredVideos();
    if (filtered.length > 0) {
      const firstGlobalIdx = VIDEOS.findIndex(item => item.id === filtered[0].id);
      selectAndPlayVideo(firstGlobalIdx, true);
    } else {
      renderPlaylist();
    }
  }
}

function togglePlayPause() {
  if (videoEl.paused) {
    videoEl.play().catch(() => {});
  } else {
    videoEl.pause();
  }
}

function playNextVideo() {
  selectAndPlayVideo(currentVideoIndex + 1, true);
}

function playPrevVideo() {
  selectAndPlayVideo(currentVideoIndex - 1, true);
}

function toggleLoopMode() {
  loopSingleSong = !loopSingleSong;
  videoEl.loop = loopSingleSong;
  if (loopSingleSong) {
    loopBtnEl.classList.add('loop-active');
    loopBtnEl.querySelector('.ctrl-label').textContent = 'Repeat: ON';
  } else {
    loopBtnEl.classList.remove('loop-active');
    loopBtnEl.querySelector('.ctrl-label').textContent = 'Auto-Next';
  }
}

function triggerMagicTattooPower() {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  spawnSparkles(cx, cy, 28);
  introVoiceAudio.currentTime = 0;
  introVoiceAudio.play().catch(() => {});
  // Jump to Shot 1 or Full MV if in stickers mode
  if (currentChannel === 'stickers') {
    switchChannel('lumipop');
  }
}

function enteriPadFullscreen() {
  if (videoEl.webkitEnterFullscreen) {
    videoEl.webkitEnterFullscreen();
  } else if (videoEl.requestFullscreen) {
    videoEl.requestFullscreen();
  }
}

videoEl.addEventListener('play', () => {
  playBtnEmojiEl.textContent = '⏸️';
  playBtnTextEl.textContent = 'Pause';
});

videoEl.addEventListener('pause', () => {
  playBtnEmojiEl.textContent = '▶️';
  playBtnTextEl.textContent = 'Play!';
});

videoEl.addEventListener('ended', () => {
  if (!loopSingleSong) {
    playNextVideo();
  }
});

// Initialize on page load
selectAndPlayVideo(0, false);
