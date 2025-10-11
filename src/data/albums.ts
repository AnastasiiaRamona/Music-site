const coverSrc1 = '/assets/covers/friend-of-mine_2_11zon.webp';
const coverSrc2 = '/assets/covers/you_6_11zon.webp';
const coverSrc3 = '/assets/covers/unsolved-problem_5_11zon.webp';
const coverSrc4 = '/assets/covers/album_9_11zon.webp';
const coverSrc5 = '/assets/covers/dont-look-down_8_11zon.webp';
const coverSrc6 = '/assets/covers/console_7_11zon.webp';
const coverSrc7 = '/assets/covers/the-first-time_4_11zon.webp';
const coverSrc8 = '/assets/covers/luminance_1_11zon.webp';
const coverSrc9 = '/assets/covers/rondo_3_11zon.webp';
const coverSrc10 = '/assets/covers/distant-melodies.webp';
const coverSrc11 = '/assets/covers/the-last-puzzle_page-0001-min.webp';
const coverSrc12 = '/assets/covers/Jacket-denim.webp';
const coverSrc13 = '/assets/covers/awake-and-alive.jpg';
const coverSrc14 = '/assets/covers/skyglitch.webp';
const coverSrc15 = '/assets/covers/Tropical-Lemonade_11zon.webp';
const coverSrc16 = '/assets/covers/the-white-city-s-dance.webp';
const coverSrc17 = '/assets/covers/to-simulants-with-love.webp';
const coverSrc18 = '/assets/covers/The-Art-of-Rebellion.webp';
const coverSrc19 = '/assets/covers/the-remastered-collection.webp';
const coverSrc20 = '/assets/covers/Twenty-Eight-Past Four.webp';
const image = '/assets/image.webp';
const appleMusicSrc = '/assets/apple-music.webp';
const spotifySrc = '/assets/spotify.webp';
const amazonSrc = '/assets/amazon.webp';
const telegramSrc = '/assets/telegram-icon.webp';
const youTubeSrc = '/assets/youtube-icon.webp';
const instagramSrc = '/assets/instagram-icon.webp';
const backgroundSrc2 = '/assets/background-2.webp';
const backgroundSrc3 = '/assets/background-4.webp';
const backgroundSrc4 = '/assets/background.jpg';
const backgroundSrc5 = '/assets/background-3.webp';

export const images = [
  coverSrc1,
  coverSrc2,
  coverSrc3,
  coverSrc4,
  coverSrc5,
  coverSrc6,
  coverSrc7,
  coverSrc8,
  coverSrc9,
  coverSrc10,
  coverSrc11,
  coverSrc12,
  coverSrc13,
  coverSrc14,
  coverSrc15,
  coverSrc16,
  image,
  appleMusicSrc,
  spotifySrc,
  amazonSrc,
  telegramSrc,
  youTubeSrc,
  instagramSrc,
  backgroundSrc2,
  backgroundSrc3,
  backgroundSrc4,
  backgroundSrc5,
];

export const albums = [
  {
    albumId: 'twenty-eight-past-four',
    coverSrc: coverSrc20,
    title: 'Twenty-Eight Past Four',
    audioSrc: '/audios/twenty-eight-past-four.opus',
    appleMusicLink: 'https://music.apple.com/us/album/twenty-eight-past-four-single/1836226480',
    spotifyLink: 'https://open.spotify.com/track/6f5Q2m8mpqoxwr4ufw5CDk?si=72ac5d3ae2b74cc5',
    youtubeLink: 'https://www.youtube.com/watch?v=6v8FdZhZ4z8',
    amazonLink:
      'https://amazon.com/music/player/albums/B0FP334JVP?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_4TQYSD5xUwhuCYf6td8D545gE',
  },
  {
    albumId: 'the-remastered-collection',
    coverSrc: coverSrc19,
    title: 'The Remastered Collection',
    isAlbum: true,
    tracks: [
      {
        trackId: 'jacket-denim',
        title: 'Jacket Denim',
        audioSrc: '/audios/jacket-Denim.opus',
        coverSrc: coverSrc12, // Individual cover for this track
      },
      {
        trackId: 'dont-look-down',
        title: "Don't Look Down (The Journey Never Ends)",
        audioSrc: '/audios/you-should-not/1. don_t-look-down.opus',
        coverSrc: coverSrc5, // Individual cover for this track
      },
      {
        trackId: 'the-white-city-s-dance',
        title: `The White City's Dance`,
        audioSrc: '/audios/the-white-city_s-dance.opus',
        coverSrc: coverSrc16, // Individual cover for this track
      },
      {
        trackId: 'console-log-you-will-hear-the-voice-of-reason',
        title: "console.log('You will hear the voice of reason')",
        audioSrc: '/audios/you-should-not/3. console.log.opus',
        coverSrc: coverSrc6, // Individual cover for this track
      },
      {
        trackId: 'friend-of-mine',
        title: 'Friend of Mine',
        audioSrc: '/audios/friend-of-mine.opus',
        coverSrc: coverSrc1, // Individual cover for this track
      },
    ],
    appleMusicLink: 'https://music.apple.com/us/album/the-remastered-collection-ep/1829676969',
    spotifyLink: 'https://open.spotify.com/album/7rwLlPuNaKIFHc6VoWRaXl?si=mHhb2T3BSnCO6Q6_-EcmwA',
    youtubeLink: 'https://www.youtube.com/watch?v=MXlyeXoNhAk',
    amazonLink:
      'https://music.amazon.com/albums/B0FKBMGH8B?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_gR7ZyAKGcOLrnXnv9d8fRPMfM',
  },
  {
    albumId: 'the-art-of-rebellion',
    coverSrc: coverSrc18,
    title: 'The Art of Rebellion',
    audioSrc: '/audios/the-art-of-rebellion.opus',
    appleMusicLink: 'https://music.apple.com/us/song/the-art-of-rebellion/1822143361',
    spotifyLink: 'https://open.spotify.com/track/3gubxAlboj9QY8p2CUmKCV?si=02c25f41807c44b6',
    youtubeLink: 'https://www.youtube.com/watch?v=nxTxNi88uVQ',
    amazonLink:
      'https://amazon.com/music/player/tracks/B0FF3HPL6K?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_uanfPlUrGnVLl5y9eFpuDULEO',
  },
  {
    albumId: 'to-simulants-with-love',
    coverSrc: coverSrc17,
    title: 'To Simulants, with Love',
    audioSrc: '/audios/to-simulants-with-love.opus',
    appleMusicLink: 'https://music.apple.com/us/song/to-simulants-with-love/1819341969',
    spotifyLink: 'https://open.spotify.com/track/0Y2sTT4gqzRR3jS75n728N?si=37dff4a38c1c49b4',
    youtubeLink: 'https://www.youtube.com/watch?v=OPH9QYIAChs',
    amazonLink:
      'https://amazon.com/music/player/albums/B0FCDHR4HR?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_XiRFKvHTGahXSeGqg4tfivI5u',
  },
  {
    albumId: 'the-white-city-s-dance',
    coverSrc: coverSrc16,
    title: `The White City's Dance`,
    audioSrc: '/audios/the-white-city_s-dance.opus',
    appleMusicLink: 'https://music.apple.com/us/album/the-white-citys-dance-single/1798050325',
    spotifyLink: 'https://open.spotify.com/track/6d5jlLV2fFwkMjAjxPfdgN?si=dee1f499c8d04eb8',
    youtubeLink: 'https://www.youtube.com/watch?v=0TVaGchFiAM',
    amazonLink:
      'https://music.apple.com/us/album/the-white-citys-dance-single/1798050325',
  },
  {
    albumId: 'tropical-lemonade',
    coverSrc: coverSrc15,
    title: 'Tropical Lemonade',
    audioSrc: '/audios/tropical-lemonade.opus',
    appleMusicLink: 'https://music.apple.com/us/album/tropical-lemonade/1791435321?i=1791435327',
    spotifyLink: 'https://open.spotify.com/album/6tkEpAjA7ZFddOPWrN69UV?si=MlUzV_oZTBuLAHDgZZOt8w',
    youtubeLink: 'https://www.youtube.com/watch?v=geuKULViku4',
    amazonLink:
      'https://amazon.com/music/player/tracks/B0DTGWF7W8?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_8tdTGmlGb3SCsCHzbijQW07bA',
  },
  {
    albumId: 'skyglitch',
    coverSrc: coverSrc14,
    title: 'Skyglitch',
    audioSrc: '/audios/skyglitch.opus',
    appleMusicLink: 'https://music.apple.com/ru/album/skyglitch/1784440250?i=1784440254',
    spotifyLink: 'https://open.spotify.com/album/44C4r6BYwQsEnxrLqWlfBJ?si=4pfAYBJzREGERlavy-gTRw',
    youtubeLink: 'https://www.youtube.com/watch?v=v5IZktSMhcc',
    amazonLink:
      'https://amazon.com/music/player/albums/B0DQ1CMRDN?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_B2zZR4bmnsBuMO5BtcxoSYLka',
  },
  {
    albumId: 'awake-and-alive',
    coverSrc: coverSrc13,
    title: 'Awake & Alive',
    audioSrc: '/audios/awake-and-alive.opus',
    appleMusicLink: 'https://music.apple.com/ru/album/awake-alive/1783133647?i=1783133650',
    spotifyLink: 'https://open.spotify.com/track/0k3zJ9Kv0ZatfvObiRMJmN?si=f868456320b84aa8',
    youtubeLink: 'https://www.youtube.com/watch?v=KgRRJNzONHU',
    amazonLink:
      'https://amazon.com/music/player/albums/B0DPJ6DMV4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_xSkLLTNOIpyHRXn3IP0kwOKix',
  },
  {
    albumId: 'jacket-denim',
    coverSrc: coverSrc12,
    title: 'Jacket Denim',
    audioSrc: '/audios/jacket-Denim.opus',
    appleMusicLink: 'https://music.apple.com/ru/album/jacket-denim/1776427593?i=1776427596',
    spotifyLink: 'https://open.spotify.com/track/6hFVHLij1GACixbBhr8zMW?si=f36092d3007144a1',
    youtubeLink: 'https://www.youtube.com/watch?v=HbU9yPWFWeM',
    amazonLink:
      'https://amazon.com/music/player/albums/B0DL43TWLL?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_iH9V5JGaysVmlkWrIBuwKB1cD',
  },
  {
    albumId: 'the-last-puzzle',
    coverSrc: coverSrc11,
    title: 'The Last Puzzle',
    audioSrc: '/audios/the-last-puzzle.opus',
    appleMusicLink: 'https://music.apple.com/ru/album/the-last-puzzle/1772101087?i=1772101370',
    spotifyLink: 'https://open.spotify.com/album/3CWccCdAiROxGIV2wRbxXx?si=AHPc-QXoS7e7Te115gFtPg',
    youtubeLink: 'https://www.youtube.com/watch?v=tzb_NJIxY00',
    amazonLink:
      'https://amazon.com/music/player/tracks/B0DJFYH7HQ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_mJdNLqkogDnSGHYBH4pB76Sbt',
  },
  {
    albumId: 'distant-melodies',
    coverSrc: coverSrc10,
    title: 'Distant Melodies',
    audioSrc: '/audios/distant-melodies.opus',
    appleMusicLink: 'https://music.apple.com/ru/album/distant-melodies-single/1756027382',
    spotifyLink: 'https://open.spotify.com/track/178i6OksNV3YHH58iqBPVC?si=9a3968dc20574f41',
    youtubeLink: 'https://www.youtube.com/watch?v=ySYcoEfrl90',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0D91H2NBK',
  },
  {
    albumId: 'friend-of-mine',
    coverSrc: coverSrc1,
    title: 'Friend of Mine',
    audioSrc: '/audios/friend-of-mine.opus',
    appleMusicLink: 'https://music.apple.com/us/album/friend-of-mine-single/1748733009',
    spotifyLink: 'https://open.spotify.com/album/2oqiVrOzXVzuALzr2WUZBN?si=Zmw8ZMgrQVqwFK7f3kwtKg',
    youtubeLink: 'https://www.youtube.com/watch?v=dLrnlyDI8Gg2p_KwbatAU97USQ8',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0D5CXFSYP',
  },
  {
    albumId: 'you',
    coverSrc: coverSrc2,
    title: 'You',
    audioSrc: '/audios/you.opus',
    appleMusicLink: 'https://music.apple.com/us/album/you-single/1742230053',
    spotifyLink: 'https://open.spotify.com/track/4fiydi4rtZNYELCmoLK10j?si=d1fc7c7f05cc478c',
    youtubeLink: 'https://www.youtube.com/watch?v=_ToJ1QrCDuQ',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0D26GYG57',
  },
  {
    albumId: 'unsolved-problem',
    coverSrc: coverSrc3,
    title: 'Unsolved Problem',
    audioSrc: '/audios/unsolved-problem.opus',
    appleMusicLink: 'https://music.apple.com/ru/album/unsolved-problem-single/1737744319',
    spotifyLink: 'https://open.spotify.com/track/6V4FnJwIBtFeZkqgNbGOFg?si=8cdf6750ae7d46f7',
    youtubeLink: 'https://www.youtube.com/watch?v=RvMWOWhwfws',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0CYZPL11N',
  },
  {
    albumId: 'you-shouldnt-let-one-thing-be-the-meaning-of-your-life',
    coverSrc: coverSrc4,
    title: "You Shouldn't Let One Thing Be the Meaning of Your Life",
    isAlbum: true,
    tracks: [
      {
        trackId: 'dont-look-down',
        title: "Don't Look Down (The Journey Never Ends)",
        audioSrc: '/audios/you-should-not/1. don_t-look-down.opus',
        coverSrc: coverSrc5, // Individual cover for this track
      },
      {
        trackId: 'the-first-time-simply',
        title: 'The First Time Simply',
        audioSrc: '/audios/you-should-not/2. the-first-time-simply.opus',
        coverSrc: coverSrc7, // Individual cover for this track
      },
      {
        trackId: 'console-log-you-will-hear-the-voice-of-reason',
        title: "console.log('You will hear the voice of reason')",
        audioSrc: '/audios/you-should-not/3. console.log.opus',
        coverSrc: coverSrc6, // Individual cover for this track
      },
      {
        trackId: 'seas-song',
        title: "Sea's Song",
        audioSrc: '/audios/you-should-not/4. sea\'s-song.opus',
      },
      {
        trackId: 'rondo-avventura-fantasy',
        title: 'Rondò Avventura Fantasy',
        audioSrc: '/audios/you-should-not/5. rondo.opus',
        coverSrc: coverSrc9, // Individual cover for this track
      },
      {
        trackId: 'want-to-change-my-name',
        title: 'Хочу изменить свое имя',
        audioSrc: '/audios/you-should-not/6. хочу-изменить-свое-имя.opus',
      },
      {
        trackId: 'selfless-but-capricious',
        title: 'Бескорыстны но капризны',
        audioSrc: '/audios/you-should-not/7. бескорыстны-но-капризны.opus',
      },
      {
        trackId: 'luminance',
        title: 'Luminance',
        audioSrc: '/audios/you-should-not/8. luminance.opus',
        coverSrc: coverSrc8, // Individual cover for this track
      },
      {
        trackId: 'new-world',
        title: 'New World',
        audioSrc: '/audios/you-should-not/9. new-world.opus',
      },
      {
        trackId: 'stop-me-now',
        title: 'Stop Me Now',
        audioSrc: '/audios/you-should-not/10. stop-me-now.opus',
      },
    ],
    appleMusicLink: 'http://itunes.apple.com/album/id/1711577197',
    spotifyLink: 'https://open.spotify.com/album/6R1iTqqYgTvWOZ3FYIqfUA?si=9yoat6bkRXWmt5rAILCwCQg',
    youtubeLink: 'https://www.youtube.com/watch?v=45Sa4AA9WwI',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0CKXQBH1H',
  },
  {
    albumId: 'dont-look-down',
    coverSrc: coverSrc5,
    title: "Don't Look Down (The Journey Never Ends)",
    audioSrc: '/audios/you-should-not/1. don_t-look-down.opus',
    appleMusicLink: 'http://itunes.apple.com/album/id/1707820334',
    spotifyLink: 'https://open.spotify.com/track/74vPNJB3azxz6v09vblsb6?si=67c3541e3dd14d0a',
    youtubeLink: 'https://www.youtube.com/watch?v=15sGmrwl3SA',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0CJ8ZT2TS',
  },
  {
    albumId: 'console-log-you-will-hear-the-voice-of-reason',
    coverSrc: coverSrc6,
    title: "console.log('You will hear the voice of reason')",
    audioSrc: '/audios/you-should-not/3. console.log.opus',
    appleMusicLink: 'http://itunes.apple.com/album/id/1695674135',
    spotifyLink: 'https://open.spotify.com/track/1n6r57nYDpcNBNkNsQ1nlV?si=2ad689e557a74918',
    youtubeLink: 'https://www.youtube.com/watch?v=Ro3Dppj_314w-6W497rHHe-PjBS',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0CB333RST',
  },
  {
    albumId: 'the-first-time-simply',
    coverSrc: coverSrc7,
    title: 'The First Time Simply',
    audioSrc: '/audios/you-should-not/2. the-first-time-simply.opus',
    appleMusicLink: 'http://itunes.apple.com/album/id/1690552406',
    spotifyLink: 'https://open.spotify.com/track/4Pvov8t5xV192lSgAVq5uP?si=7a86ae54fe204e04',
    youtubeLink: 'https://www.youtube.com/watch?v=bIs_lXtiJ3I',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0C6TJ2595',
  },
  {
    albumId: 'luminance',
    coverSrc: coverSrc8,
    title: 'Luminance',
    audioSrc: '/audios/you-should-not/8. luminance.opus',
    appleMusicLink: 'http://itunes.apple.com/album/id/1685252464',
    spotifyLink: 'https://open.spotify.com/track/7c0sxysQ53MpV9d6OvAfiI?si=4c89de827f724e68',
    youtubeLink: 'https://www.youtube.com/watch?v=61W0OCEsq-UISzE-MBhHhoasteG',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0C3WJQSNN',
  },
  {
    albumId: 'rondo-avventura-fantasy',
    coverSrc: coverSrc9,
    title: 'Rondò Avventura Fantasy',
    audioSrc: '/audios/you-should-not/5. rondo.opus',
    appleMusicLink: 'http://itunes.apple.com/album/id/1681087270',
    spotifyLink: 'https://open.spotify.com/album/5rM52lPHOg8fnVRYuudySj?si=9WsfUUw9SOa_NeXiE2OL1Q',
    youtubeLink: 'https://www.youtube.com/watch?v=6xTkf3dpqWI',
    amazonLink: 'https://www.amazon.com/music/player/albums/B0C1P1MQQY',
  },
];

export default function getTheLatestRelease() {
  return albums[0];
}