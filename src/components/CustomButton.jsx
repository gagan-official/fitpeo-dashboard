export default function CustomButton({ elementName, children, className, ...props }) {
    const Element = elementName ?? "button"
  return (
    <Element
      className={`cursor-pointer bg-[--iconsBg] text-lg p-2 rounded-full ${className ?? ""}`}
      {...props}
    >
      {children}
    </Element>
  );
}
