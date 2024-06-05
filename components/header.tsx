import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import LocalSwitcher from "@/components/locale-switcher";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { signOut } from "@/app/[locale]/login/actions";
import { useTranslations } from "next-intl";

export default async function Header() {
  const supabase = await createClient();
  const t = await getTranslations("Navigation");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Supabase</span>
          </a>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LocalSwitcher />
          {user !== null ? (
            <form action={signOut} className="flex items-center gap-2">
              <p>{user.email}</p>
              <Button>{t("signout")}</Button>
            </form>
          ) : (
            <Button asChild>
              <Link href="/login">{t("signin")}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
