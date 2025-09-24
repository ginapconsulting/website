import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {FooterOne, HeaderOne} from '../containers';

const Privacy = () => (
  <Fragment>
    <Seo title="Privacy Policy" />
    <HeaderOne />
    <Breadcrumb pageName="Privacy Policy" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2>Privacy Policy</h2>
            <p><strong>Effective Date:</strong> September 24, 2025</p>
            <p>GINAP Consulting Ltd ("GINAP Consulting", "we", "us", or "our") respects your privacy. This policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>

            <h4>1. Data Controller</h4>
            <p>GINAP Consulting Ltd, RC: 7070569. Contact: <a href="mailto:hello@ginapconsulting.com">hello@ginapconsulting.com</a>.</p>

            <h4>2. Information We Collect</h4>
            <ul>
              <li>Contact details: name, email, phone, company, role</li>
              <li>Account and usage data related to our services</li>
              <li>Billing information processed by Paddle (we do not store full card data)</li>
              <li>Support communications and feedback</li>
              <li>Cookies and similar technologies (see Section 7)</li>
            </ul>

            <h4>3. How We Use Information</h4>
            <ul>
              <li>Provide, maintain, and improve our consulting and technology services</li>
              <li>Process orders, subscriptions, and payments via Paddle</li>
              <li>Communicate with you about updates, security alerts, and support</li>
              <li>Comply with legal obligations and enforce our agreements</li>
            </ul>

            <h4>4. Legal Bases</h4>
            <p>We process personal data based on consent, contract performance, legitimate interests, and legal obligations, as applicable.</p>

            <h4>5. Sharing and Disclosure</h4>
            <p>We share information with trusted service providers such as Paddle (payments/Merchant of Record), hosting, analytics, and support tools, under appropriate data protection agreements. We may disclose information to comply with law or protect rights.</p>

            <h4>6. International Transfers</h4>
            <p>Your information may be transferred to and processed in countries outside your own. We use appropriate safeguards where required.</p>

            <h4>7. Cookies</h4>
            <p>We use cookies to operate and improve the site. You can control cookies via your browser settings. Some features may not function without cookies.</p>

            <h4>8. Data Retention</h4>
            <p>We retain information only as long as necessary to provide services, comply with our legal obligations, resolve disputes, and enforce agreements.</p>

            <h4>9. Security</h4>
            <p>We implement administrative, technical, and physical safeguards appropriate to the risk. No method of transmission or storage is 100% secure.</p>

            <h4>10. Your Rights</h4>
            <p>Depending on your location, you may have rights to access, correct, delete, or port your data, or object to/limit processing. To exercise rights, contact us at <a href="mailto:hello@ginapconsulting.com">hello@ginapconsulting.com</a>.</p>

            <h4>11. Third-Party Links</h4>
            <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>

            <h4>12. Changes</h4>
            <p>We may update this policy periodically. We will post the updated version and revise the effective date.</p>

            <h4>13. Contact</h4>
            <p>Questions about this policy? Contact <a href="mailto:hello@ginapconsulting.com">hello@ginapconsulting.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Privacy;



