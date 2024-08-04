function UpDown({ down, className }) {
  const classNameVar = down
    ? `hike relative ml-[1.3rem] before:absolute before:-left-5 before:border-8 before:border-transparent before:border-b-[--percentDown] text-[--percentDown] before:-scale-y-100 before:bottom-0`
    : `hike relative ml-[1.3rem] before:absolute before:-left-5 before:border-8 before:border-transparent before:border-b-[--percentUp] text-[--percentUp]`;
  return <div className={`${classNameVar} ${className ?? ""}`}>3%</div>;
}

export default UpDown;
