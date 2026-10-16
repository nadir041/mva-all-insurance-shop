import LegalPage, { EmailLink } from '../components/LegalPage';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { business, meta } from '../data/site';

// Copy reproduced verbatim from the original /terms page.
export default function TermsPage() {
  useDocumentMeta(meta.terms);

  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our services."
      uppercaseHeadings
    >
      <h2>Terms &amp; Conditions</h2>
      <p>
        The MVA All Insurance Shop Terms and Conditions (“Terms”) is a legal agreement between you and MVA All Insurance
        Shop (referred to herein as “MVA All Insurance Shop,” “Company”), governing your use of the Service. By accessing
        the MVA All Insurance Shop website and using the Service, you are agreeing to comply with and be bound by these
        Terms.
      </p>
      <p>
        YOU AGREE THAT BY USING THIS SERVICE YOU ARE AT LEAST 18 YEARS OF AGE AND YOU ARE LEGALLY ABLE TO ENTER INTO A
        CONTRACT. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THIS WEBSITE.
      </p>

      <h3>Services</h3>
      <p>
        MVA All Insurance Shop provides users with access to legal and medical referral services related to motor
        vehicle accident claims. Users may also participate in advertising campaigns, take quizzes and surveys, and use
        various services and products provided by MVA All Insurance Shop.
      </p>

      <h3>Termination</h3>
      <p>
        MVA All Insurance Shop may terminate a participant’s use of the Services if the participant has not observed
        these Terms and Conditions or for any other reasons. The participant agrees that MVA All Insurance Shop may
        delete registration data and all related information as well as any data used by Third-Party Services.
      </p>

      <h3>Dealings with Merchants; Links</h3>
      <p>
        The Service contains advertisements, offers, or other links to websites of third parties that we do not control.
        MVA All Insurance Shop is not responsible or liable for the availability or accuracy of such sites or the
        content, products, or services available from such sites.
      </p>

      <h3>Consent to Future Communications</h3>
      <p>
        When participants use the Services, they agree that MVA All Insurance Shop may contact them with future
        communications, including without limitation, email marketing, telephone marketing, and other forms of direct
        marketing. Such communications may be transmitted by automatic telephone calls, email offers, or any other method
        of communication.
      </p>

      <h3>Registration Requirements</h3>
      <p>
        Participants attest that any personal information collected through the Services is correct and complete. If
        MVA All Insurance Shop determines that the registered information is not accurate or complete, then MVA All
        Insurance Shop is entitled to delete the participant’s data and prohibit the participant’s further use of the
        Services.
      </p>

      <h3>Disclaimer of Warranties</h3>
      <p>
        THE SERVICES ARE PROVIDED “AS IS” AND UNDER THESE TERMS AND CONDITIONS, MVA ALL INSURANCE SHOP IS NOT SUBJECT TO
        WARRANTIES, EITHER IMPLIED OR EXPRESSLY STATED, INCLUDING IMPLIED WARRANTIES WITH REGARD TO SUITABILITY,
        MERCHANTABILITY, OR FITNESS FOR A SPECIFIC PURPOSE.
      </p>

      <h3>Limitation of Liability</h3>
      <p>
        MVA ALL INSURANCE SHOP WILL NOT BE LIABLE FOR ANY INCIDENTAL, INDIRECT, CONSEQUENTIAL, OR EXEMPLARY DAMAGES,
        INCLUDING BUT NOT LIMITED TO DAMAGES TO COMPUTER HARDWARE, SOFTWARE FAILURES, DATA FAILURES, LOSS OF PROFITS, OR
        DAMAGE TO GOODWILL.
      </p>

      <h3>Arbitration of Disputes</h3>
      <p>
        ANY CLAIM, DISPUTE, OR CONTROVERSY BETWEEN YOU AND US ARISING FROM OR RELATING TO THESE TERMS SHALL BE RESOLVED
        EXCLUSIVELY AND FINALLY BY BINDING ARBITRATION. Arbitration proceedings shall be governed by the Commercial
        Arbitration Rules of the American Arbitration Association.
      </p>

      <h3>General</h3>
      <p>
        This Agreement shall be governed by and construed in accordance with the laws of the state of New York without
        regard to the conflict of laws provisions thereof. If you have any questions, please contact us at{' '}
        <EmailLink email={business.email} />.
      </p>
    </LegalPage>
  );
}
