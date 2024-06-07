"use client";
import { Button } from "@/components/ui/button";
import { Provider } from "@supabase/supabase-js";
import { Github, Facebook, Chrome } from "lucide-react";
import { oAuthSignIn } from "./actions";
import { useTranslations } from "next-intl";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const t = useTranslations("LoginPage");
  const oAuthProviders: OAuthProvider[] = [
    {
      name: "github",
      displayName: "GitHub",
      icon: <Github className="size-5" />,
    },
    {
      name: "facebook",
      displayName: "Facebook",
      icon: <Facebook className="size-5" />,
    },
    {
      name: "google",
      displayName: "Google",
      icon: <Chrome className="size-5" />,
    },
  ];

  return oAuthProviders.map((provider) => (
    <Button
      className="w-full flex items-center justify-center gap-2"
      variant="outline"
      onClick={async () => {
        await oAuthSignIn(provider.name);
      }}
    >
      {provider.icon}
      {t("loginWith")} {provider.displayName}
    </Button>
  ));
}
