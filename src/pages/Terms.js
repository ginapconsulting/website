import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {FooterOne, HeaderOne} from '../containers';

const Terms = () => (
  <Fragment>
    <Seo title="Terms of Service" />
    <HeaderOne />
    <Breadcrumb pageName="Terms of Service" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2>Terms of Service</h2>
            <p><strong>Effective Date:</strong> September 24, 2025</p>
            <p>These Terms of Service ("Terms") govern your access to and use of the services and products provided by GINAP Consulting Ltd ("GINAP Consulting", "we", "us", or "our"). By using our website or engaging our services, you agree to these Terms.</p>

            <h4>1. Services</h4>
            <p>We provide digital consulting services and technology solutions including software development, AI and machine learning tools, cloud-based applications, analytics platforms, and related training and advisory services.</p>

            <h4>2. Accounts and Eligibility</h4>
            <p>You must be authorized to act on behalf of your organization. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</p>

            <h4>3. Pricing and Payment via Paddle</h4>
            <p>All prices are in USD unless stated otherwise. We use Paddle as our Merchant of Record to process payments and manage invoicing, subscriptions, and taxes. Your purchase is subject to Paddle's buyer terms and privacy practices.</p>

            <h4>4. Taxes</h4>
            <p>Applicable taxes (including VAT/GST/Sales Tax) may be calculated and collected by Paddle depending on your location and the nature of the services.</p>

            <h4>5. Refunds</h4>
            <p>Our <a href="/refund-policy">Refund Policy</a> explains when refunds may be issued. For billing errors or duplicate charges, contact us at <a href="mailto:hello@ginapconsulting.com">hello@ginapconsulting.com</a>.</p>

            <h4>6. Intellectual Property</h4>
            <p>Unless otherwise agreed in a statement of work, we retain ownership of our pre-existing IP, tools, accelerators, and methodologies. Project-specific deliverables may be licensed or assigned as agreed in writing.</p>

            <h4>7. Confidentiality</h4>
            <p>Each party will protect the other's confidential information with at least reasonable care and use it only for the purposes of the engagement.</p>

            <h4>8. Warranties and Disclaimers</h4>
            <p>Services are provided on an "as is" basis. We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</p>

            <h4>9. Limitation of Liability</h4>
            <p>To the maximum extent permitted by law, neither party will be liable for indirect, incidental, special, consequential, or punitive damages, nor for lost profits or revenues. Our total liability for any claim will not exceed the fees paid for the services giving rise to the claim in the 12 months preceding the event.</p>

            <h4>10. Termination</h4>
            <p>Either party may terminate for material breach if not cured within 30 days of written notice. Upon termination, you will pay for services rendered through the termination date.</p>

            <h4>11. Governing Law</h4>
            <p>These Terms are governed by the laws of Nigeria, without regard to conflict of law principles. Venue and jurisdiction shall be in courts located in Nigeria.</p>

            <h4>12. Changes to Terms</h4>
            <p>We may update these Terms from time to time. Changes are effective when posted on this page. If material, we will provide reasonable notice.</p>

            <h4>13. Contact</h4>
            <p>Questions about these Terms? Contact <a href="mailto:hello@ginapconsulting.com">hello@ginapconsulting.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Terms;



