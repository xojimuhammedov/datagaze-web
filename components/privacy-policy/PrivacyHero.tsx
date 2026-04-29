

const PrivacyHero = () => {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 items-center py-40">
          <h1 className="text-6xl font-medium">Privacy and Policy</h1>
          <p className="w-175 text-center text-[20px] text-muted-foreground">
            Your Privacy, Our Priority.
          </p>
        </div>

        <div className="flex flex-col gap-10 text-[22px] text-muted-foreground w-250 mx-auto font-medium pb-35">
          <p>Introduction</p>
          <p>
            At Datagaze, we are deeply committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy and
            Policy page outlines how we collect, use, and safeguard your data
            when you engage with our website and services.
          </p>
          <p>Information We Collect</p>
          <p>
            We may collect personal information that you voluntarily provide to
            us, such as your name, email address, phone number, and other
            details relevant to our services. Additionally, we may automatically
            collect certain information when you visit our website, including
            your IP address, browser type, and browsing behavior.
          </p>
          <p>How We Use Your Information</p>
          <p>The information we collect is used to:</p>
          <ul className="list-disc list-outside ml-5 space-y-1  font-sans">
            <li>Provide and improve our services.</li>
            <li>
              Communicate with you about your inquiries, requests, or
              transactions.
            </li>
            <li>Personalize your experience on our website.</li>
            <li>Ensure the security and integrity of our systems.</li>
            <li>
              Comply with legal obligations and prevent fraudulent activities.
            </li>
          </ul>
          <p>Data Security</p>
          <p>
            Datagaze takes the security of your personal information seriously.
            We implement a variety of security measures to maintain the safety
            of your data, including encryption, access controls, and regular
            security audits.
          </p>
          <p>Sharing Your Information</p>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties, except as required by law or as
            necessary to provide our services. We may share your information
            with trusted third-party service providers who assist us in
            operating our website and conducting our business, as long as they
            agree to keep this information confidential.
          </p>
          <p>Your Rights</p>

          <p>
            {" "}
            You have the right to access, correct, or delete your personal
            information. If you wish to exercise these rights, please contact us
            at [contact email].
          </p>

          <p>Cookies and Tracking Technologies</p>

          <p>
            We use cookies and similar tracking technologies to enhance your
            browsing experience and collect information about how you use our
            website. You can choose to disable cookies through your browser
            settings, but this may affect your ability to use certain features
            of our website.
          </p>

          <p>Changes to This Policy</p>

          <p>
            Datagaze reserves the right to update this Privacy and Policy page
            at any time. Any changes will be posted on this page, and we
            encourage you to review it periodically.
          </p>

          <p>Contact Us</p>

          <p>
            If you have any questions or concerns about our Privacy and Policy,
            please contact us at info@datagaze.uz.
          </p>
          <p>
            This content should provide a clear and comprehensive overview of
            your privacy practices while keeping the tone professional and
            user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;
