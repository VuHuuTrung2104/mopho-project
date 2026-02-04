import styles from "./music.module.css";

const musicList = [
  {
    id: 1,
    title: "Nhạc Chill Quán Café",
    artist: "Mơ Phố Radio",
    image: "/music/chill1.jpg",
  },
  {
    id: 2,
    title: "Acoustic Buổi Sáng",
    artist: "Góc Nhỏ Acoustic",
    image: "/music/chill2.jpg",
  },
  {
    id: 3,
    title: "Lofi Đêm Mưa",
    artist: "Mơ Phố Lofi",
    image: "/music/chill3.jpg",
  },
];

export default function MusicPage() {
  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.banner}>
        <h1>🎵 Âm Nhạc Mơ Phố</h1>
        <p>Thả mình vào những giai điệu chill nhẹ giữa quán cà phê...</p>
      </div>

      {/* Section nổi bật */}
      <h2 className={styles.heading}>🔥 Playlist nổi bật</h2>

      <div className={styles.grid}>
        {musicList.map((song) => (
          <div key={song.id} className={styles.card}>
            <img src={song.image} alt={song.title} />

            <div className={styles.info}>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>

              <div className={styles.actions}>
                <button className={styles.play}>▶ Play</button>
                <button className={styles.like}>♡ Yêu thích</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gợi ý thêm */}
      <div className={styles.more}>
        <h2>🎧 Gợi ý hôm nay</h2>
        <p>
          Bạn có thể phát triển thêm phần: Top trending, album mới, hoặc tích hợp
          Spotify/Youtube Music.
        </p>
      </div>
    </div>
  );
}
