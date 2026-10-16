import LegalPage, { EmailLink } from '../components/LegalPage';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { business, meta } from '../data/site';

// Copy reproduced verbatim from the original /privacy-policy page.
export default function PrivacyPolicyPage() {
  useDocumentMeta(meta.privacy);
  const email = <EmailLink email={business.email} />;

  return (
    <LegalPage title="Privacy Policy" subtitle="How we collect, use, and protect your information.">
      <h2>Privacy Policy</h2>
      <p>
        This <strong>privacy policy</strong> was created to let you know what information we collect from you, what we
        do with it, and to assure you that your information will be respected on our website owned and operated by MVA
        All Insurance Shop (referred to herein as “Provider”, the “Site”, “we” or “us”). The Provider attempts to protect
        your privacy to the maximum extent possible.
      </p>
      <p>
        We currently offer users the option of participating in online marketing campaigns to request quotes on products
        including but not limited to insurance and automotive products (referred to herein as “Services”). By using the
        Site and the Services, you consent to the following terms.
      </p>
      <p>
        YOUR VISITATION, USE, AND REGISTRATION ON THIS SITE MEAN THAT YOU ACCEPT THE PRACTICES SET FORTH IN THIS POLICY.
        WE RESERVE THE RIGHT TO MAKE CHANGES TO THE POLICY AT ANY TIME.
      </p>

      <h3>1. What information do we collect?</h3>
      <p>
        We collect several different types of information from you including personal information when you register
        with us and when you use our Services. We may combine this information with information we obtain from our
        business partners or other companies.
      </p>
      <p>
        We do not accept registrations from persons under the age of eighteen. In compliance with the Children’s Online
        Privacy Protection Act (COPPA), the Site is not directed at or designed to attract children.
      </p>
      <p>
        As is true of most web sites, we gather certain information automatically and store it in log files. This
        information includes Internet protocol (IP) addresses, browser type, Internet service provider (ISP),
        referring/exit pages, operating system, date/time stamp, and clickstream data.
      </p>
      <p>
        Technologies such as cookies, beacons, tags and scripts are used by MVA All Insurance Shop and our marketing
        partners, affiliates, or analytics or online service customer support providers.
      </p>

      <h3>2. What do we do with the information we collect?</h3>
      <p>
        Without limiting the foregoing, by providing your personal information on the Site, you agree that such act
        constitutes an inquiry and/or application for purposes of the Amended Telemarketing Sales Rule (16 CFR §310 et
        seq.) and applicable state do-not-call regulations.
      </p>

      <h3>3. With whom do we share information?</h3>
      <p>
        We will share your personal information with third parties only in the ways that are described in this privacy
        policy. We do not sell your personal information to third parties.
      </p>

      <h3>4. Access to your account</h3>
      <p>
        If your personal information changes, or if you no longer desire our service, you may delete/remove it by
        emailing our Customer Support at {email}.
      </p>

      <h3>5. OPT OUT</h3>
      <p>
        By submitting your information to us, you are consenting to receive marketing communications from Provider and
        its third-party marketing partners. To opt out, send an email to {email} with “opt out” in the subject heading.
      </p>

      <h3>6. Data Retention</h3>
      <p>
        We will retain your information for as long as your account is active or as needed to provide you the Services,
        comply with our legal obligations, resolve disputes, and enforce our agreements.
      </p>

      <h3>7. Other websites</h3>
      <p>
        Our Site may contain links to other websites. We cannot be responsible for their content or for personal
        information you may choose to share with them.
      </p>

      <h3>8. Security</h3>
      <p>
        Your privacy is important to us and we take commercially reasonable measures to protect the security of the
        personal information we collect both during transmission and once we receive it. No method of transmission over
        the Internet is 100% secure, however. If you have any questions about security on our Web site, you can contact
        us at {email}.
      </p>

      <h3>9. Notice of changes</h3>
      <p>
        We may update this privacy policy to reflect changes to our information practices. We encourage you to
        periodically review this page for the latest information on our privacy practices.
      </p>

      <h3>10. Your California Privacy Rights</h3>
      <p>
        California law provides California residents with specific privacy rights under the CCPA. If you are a resident
        of California and would like to exercise one of your rights, please contact us at {email}.
      </p>
    </LegalPage>
  );
}
