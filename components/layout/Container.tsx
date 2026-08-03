interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
      {children}
    </div>
  );
}