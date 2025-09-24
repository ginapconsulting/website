import React, {Fragment} from 'react';
import {Breadcrumb, ScrollTopBtn, Seo} from '../components';
import {FooterOne, HeaderOne} from '../containers';

const Refund = () => (
  <Fragment>
    <Seo title="Refund Policy" />
    <HeaderOne />
    <Breadcrumb pageName="Refund Policy" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2>Refund Policy</h2>
            <p><strong>Effective Date:</strong> September 24, 2025</p>
            <p>We want you to be confident in purchasing from GINAP Consulting Ltd. This policy explains when refunds may be issued for digital consulting services and technology solutions.</p>

            <h4>1. General Policy</h4>
            <ul>
              <li>Due to the nature of consulting and digital deliverables, completed work is generally non-refundable.</li>
              <li>If you believe a charge is incorrect or was made in error, contact us within 14 days.</li>
            </ul>

            <h4>2. Eligible Refund Scenarios</h4>
            <ul>
              <li>Duplicate charges or billing errors</li>
              <li>Failure to deliver agreed-upon services as described in a signed SOW</li>
              <li>Inability to access a paid digital product due to a platform issue we control</li>
            </ul>

            <h4>3. Subscriptions</h4>
            <p>For monthly plans, you may cancel at any time to avoid future charges. Fees already paid for the current billing period are non-refundable unless required by law.</p>

            <h4>4. How to Request a Refund</h4>
            <p>Email <a href="mailto:hello@ginapconsulting.com">hello@ginapconsulting.com</a> with your company name, invoice number, purchase email, and a description of the issue.</p>

            <h4>5. Payments via Paddle</h4>
            <p>Payments are processed by Paddle, our Merchant of Record. Refunds, where applicable, will be issued through Paddle to your original payment method subject to Paddle's buyer terms and timelines.</p>

            <h4>6. Contact</h4>
            <p>For refund questions, contact <a href="mailto:hello@ginapconsulting.com">hello@ginapconsulting.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Refund;



