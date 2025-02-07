// PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy"> {/* Add a class for styling */}
      <h1>Privacy Policy</h1>

      <p>Effective Date: [Date]</p>

      <p>[Your App Name] ("we," "us," or "our") is committed to protecting the privacy of its users, especially concerning sensitive health information. This Privacy Policy explains how we collect, use, and share information about you when you use our mobile application (the "App").</p>

      <h2>Information We Collect</h2>

      <p>We may collect the following types of information:</p>

      <ul>
        <li><b>Personal Information:</b> Name, contact information (email, phone number, address), date of birth, gender.</li>
        <li><b>Health Information:</b> Prescription information (if applicable), medical conditions, allergies, medications you are currently taking, past medical history (if provided), delivery address (which may reveal health-related needs).</li>
        <li><b>Payment Information:</b> Payment card details (processed securely by our payment processor; we do not store your full card details).</li>
        <li><b>Usage Information:</b> App usage data, order history, search queries, IP address, device information, location data (only when necessary for delivery tracking and with your explicit consent).</li>
        <li><b>[Other types of information you collect, e.g., customer service interactions]</b></li>
      </ul>

      <h2>How We Use Your Information</h2>

      <p>We may use your information for the following purposes:</p>

      <ul>
        <li><b>Providing Services:</b> Processing orders, delivering medications, providing customer support.</li>
        <li><b>Personalization:</b> Personalizing your experience, recommending products based on your past orders (with your consent).</li>
        <li><b>Communication:</b> Contacting you regarding your orders, deliveries, or important updates.</li>
        <li><b>Legal Compliance:</b> Complying with applicable laws and regulations related to pharmacy practice and data privacy.</li>
        <li><b>Improving Services:</b> Analyzing usage data to improve our App and services.</li>
        <li><b>[Other purposes, e.g., research (anonymized and aggregated)]</b></li>
      </ul>

      <h2>How We Share Your Information</h2>

      <p>We may share your information with the following third parties:</p>

      <ul>
        <li><b>Pharmacies:</b> Sharing prescription information with licensed pharmacies to fulfill your orders.</li>
        <li><b>Delivery Partners:</b> Sharing delivery address and contact information with delivery personnel to deliver your medications.</li>
        <li><b>Payment Processors:</b> Sharing payment information with secure payment processors.</li>
        <li><b>Service Providers:</b> Sharing information with service providers who assist us with IT, customer support, and other services (under strict confidentiality agreements).</li>
        <li><b>Legal Authorities:</b> Sharing information if required by law or legal process.</li>
        <li><b>[Other third parties, e.g., healthcare providers (with your consent)]</b></li>
      </ul>

      <h2>Your Choices</h2>

      <p>You have the following choices regarding your information:</p>

      <ul>
        <li><b>Access and Correction:</b> You may access and update your personal information through the App.</li>
        <li><b>Opt-out:</b> You may opt-out of marketing communications.</li>
        <li><b>Data Deletion:</b> You may request deletion of your account and data (subject to legal and regulatory requirements for record-keeping).</li>
      </ul>

      <h2>Security</h2>

      <p>We use industry-standard security measures to protect your information, including encryption and access controls. However, no data transmission over the Internet is 100% secure.</p>

      <h2>HIPAA Compliance (If Applicable)</h2>

      <p>[If your app handles protected health information (PHI) as defined by HIPAA, include a section detailing your compliance efforts. This is critical.]</p>

      <h2>Changes to this Privacy Policy</h2>

      <p>We may update this Privacy Policy from time to time. We will notify you of any changes through the App or by other means.</p>

      <h2>Contact Us</h2>

      <p>If you have any questions about this Privacy Policy, please contact us at: [Your Contact Information]</p>
    </div>
  );
};

export default PrivacyPolicy;