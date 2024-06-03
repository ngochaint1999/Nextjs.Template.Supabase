"use client";
import { Button } from "@/components/ui/button";
import { Provider } from "@supabase/supabase-js";
import { Github } from "lucide-react";
import { oAuthSignIn } from "./actions";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: "github",
      displayName: "GitHub",
      icon: <Github className="size-5" />,
    },
  ];

  return oAuthProviders.map((provider, index) => (
    <Button
      key={index}
      variant="outline"
      className="w-full flex items-center justify-center gap-2"
      onClick={async () => {
        await oAuthSignIn(provider.name);
      }}
    >
      {provider.icon}
      <span>Login with {provider.displayName}</span>
    </Button>
  ));
}
