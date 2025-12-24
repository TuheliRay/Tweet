export default function App() {
  return (
    <div className="tweet-list">
      <img
        src="https://xsgames.co/randomusers/avatar.php?g=male"
        className="thumbnail"
        alt="avatar"
      />

      <div className="content">
        <div className="header">
          <span className="name">John Doe</span>
          <span className="handle">@johndoe</span>
          <span className="dot">·</span>
          <span className="date">Dec 25</span>
        </div>

        <p className="text">
          I got my wife a fridge for Christmas. I can't wait to see her face light up when she opens it.
        </p>

        <div className="actions">
          <span>💬 1,094</span>
          <span>🔁 5</span>
          <span>❤️ 8,402</span>
          <span>📤</span>
        </div>
      </div>
    </div>
  );
}
