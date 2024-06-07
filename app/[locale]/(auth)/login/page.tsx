import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { login, signup } from "./actions";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { OAuthButtons } from "./oauth-signin";
import { getTranslations } from "next-intl/server";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();
  const t = await getTranslations("LoginPage");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/blog");
  }

  return (
    <section className="flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{t("signin")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form id="login-form" className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">{t("password")}</Label>
              </div>
              <Input
                minLength={6}
                name="password"
                id="password"
                type="password"
                placeholder="*******"
                required
              />
            </div>
            {searchParams.message && (
              <div className="text-sm font-medium text-destructive">
                {searchParams.message}
              </div>
            )}
            <Button formAction={login} className="w-full">
              {t("signin")}
            </Button>
          </form>
          <OAuthButtons />
          <div className="text-center text-sm">
            {t("do not have an account")}
            <button formAction={signup} form="login-form" className="underline">
              {t("signup")}
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
