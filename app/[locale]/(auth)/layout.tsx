interface AuthLayoutProps {
  children: React.ReactNode;
}
export default async function AuthLayout({
  children,
}: Readonly<AuthLayoutProps>) {
  return <div className="mt-20">{children}</div>;
}
