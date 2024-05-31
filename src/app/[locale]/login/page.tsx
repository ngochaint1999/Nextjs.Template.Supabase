import { useTranslations } from "next-intl";
import { login, signup } from "./actions";
export default function LoginPage() {
  const t = useTranslations("LoginPage");
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>{t("signin")}</button>
      <button formAction={signup}>{t("signup")}</button>
    </form>
  );
}
