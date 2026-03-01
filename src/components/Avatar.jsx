import avatarImg from "./../jesin_avatar.jpg"

export default function Avatar() {
  return (
    <div>
      <img
      src={avatarImg}
      alt="Jesinthan"
      style={{
        width: 460, height: 460, borderRadius: "50%",
        objectFit: "cover",
        border: "4px solid #fff",
        boxShadow: "0 8px 32px rgba(14,165,233,0.18)",
        flexShrink: 0,
      }}
    />
    </div>
  );
}
