function Card({ children, className, heading, ...restProps }) {
  const pad = "1.3rem";
  return (
    <div
      style={heading ? { paddingRight: pad, paddingLeft: pad } : {}}
      className={`card bg-[--compsBg] rounded-md p-4 relative ${className}`}
      {...restProps}
    >
      {heading && <h3 className="text-2xl font-semibold">{heading}</h3>}
      {children}
    </div>
  );
}

export default Card;
