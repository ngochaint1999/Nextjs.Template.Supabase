import { useTranslations } from "next-intl";
export default function NotFound() {
  const t = useTranslations("NotFoundPage");
  return (
    <html>
      <body className="text-center">
        <h1 className="mt-10 font-semibold">{t("title")}</h1>
        <p>{t("description")}</p>
      </body>
    </html>
  );
}
