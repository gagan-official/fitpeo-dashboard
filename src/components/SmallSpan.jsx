function SmallSpan({ children, className, ...props }) {
  return (
    <span className={`text-[0.9rem] font-medium ${className ?? ""}`} {...props}>
      {children}
    </span>
  );
}

export default SmallSpan;
