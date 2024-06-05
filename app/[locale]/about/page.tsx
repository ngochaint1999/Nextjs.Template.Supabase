import { useEffect } from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <section className="p-3 pt-6 max-w-2xl w-full flex flex-col gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {t("title")}
      </h1>
    </section>
  );
}
