import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="my-10 fixed bottom-0 left-[50%] translate-x-[-50%]">
      <p className="text-center">{t("copyright")}</p>
    </div>
  );
}
