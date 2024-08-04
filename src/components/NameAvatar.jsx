export default function NameAvatar({ src, name, className, imgClassName }) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <img
        className={`rounded-full h-9 ${imgClassName ?? ""}`}
        src={src ?? "assets/user.jpg"}
        alt="user image"
      />
      {name ?? "Gagandeep Singh"}
    </div>
  );
}
