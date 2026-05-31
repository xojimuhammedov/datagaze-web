import { useTranslation } from "react-i18next";

const PrivacyHero = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 items-center py-12 lg:py-40">
          <h1 className="text-4xl lg:text-6xl font-medium">{t("privacy_policy.hero_title")}</h1>
          <p className="w-full lg:w-175 text-center text-base lg:text-xl text-muted-foreground">
            {t("privacy_policy.hero_subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-10 text-base lg:text-xl text-muted-foreground w-full lg:w-250 mx-auto font-medium pb-10 lg:pb-35">
          <p>{t("privacy_policy.introduction_title")}</p>
          <p>
            {t("privacy_policy.introduction_text")}
          </p>
          <p>{t("privacy_policy.collect_title")}</p>
          <p>
            {t("privacy_policy.collect_text")}
          </p>
          <p>{t("privacy_policy.use_title")}</p>
          <p>{t("privacy_policy.use_text")}</p>
          <ul className="list-disc list-outside ml-5 space-y-1 font-sans">
            <li>{t("privacy_policy.use_bullet1")}</li>
            <li>
              {t("privacy_policy.use_bullet2")}
            </li>
            <li>{t("privacy_policy.use_bullet3")}</li>
            <li>{t("privacy_policy.use_bullet4")}</li>
            <li>
              {t("privacy_policy.use_bullet5")}
            </li>
          </ul>
          <p>{t("privacy_policy.security_title")}</p>
          <p>
            {t("privacy_policy.security_text")}
          </p>
          <p>{t("privacy_policy.sharing_title")}</p>
          <p>
            {t("privacy_policy.sharing_text")}
          </p>
          <p>{t("privacy_policy.rights_title")}</p>

          <p>
            {" "}
            {t("privacy_policy.rights_text")}
          </p>

          <p>{t("privacy_policy.cookies_title")}</p>

          <p>
            {t("privacy_policy.cookies_text")}
          </p>

          <p>{t("privacy_policy.changes_title")}</p>

          <p>
            {t("privacy_policy.changes_text")}
          </p>

          <p>{t("privacy_policy.contact_title")}</p>

          <p>
            {t("privacy_policy.contact_text")}
          </p>
          <p>
            {t("privacy_policy.summary_text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;
