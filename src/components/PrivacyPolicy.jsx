import React from 'react'
import "../assets/css/Policy.css"

function PrivacyPolicy() {
  return (
    <div className="container">
      <h1 className="policyHD">PRIVACY POLICY</h1>

      <div className="mb-5">
        <h2 className="subHdpolicy">Introduction</h2>
        <p className="para">
          Welcome to EduChamp! Your privacy is of paramount importance to us.
          This Privacy Policy outlines how we collect, use, and protect your
          information when you visit and use our website{" "}
          <a href="https://educhampreact.betamxpertz.xyz/">
            https://educhampreact.betamxpertz.xyz/
          </a>{" "}
          (the "Site"). By accessing or using the Site, you agree to the terms
          outlined in this policy.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="subHdpolicy">Information We Collect</h2>

        <h5>Personal Information</h5>
        <p className="para">
          We may collect personal information that you provide to us directly,
          such as:
        </p>
        <ul className="para">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Billing Information</li>
          <li>Other Identifiable Information</li>
        </ul>

        <h5>Non-Personal Information</h5>
        <p className="para">
          We also collect non-personal information that your browser sends
          whenever you visit our Site. This includes:
        </p>
        <ul className="para">
          <li>IP Address</li>
          <li>Browser Type</li>
          <li>Pages Visited</li>
          <li>Time and Date of Visit</li>
          <li>Time Spent on Pages</li>
        </ul>
      </div>

      <div className="mb-5">
        <h2 className="subHdpolicy">How We Use Your Information</h2>
        <p className="para">
          We use the information we collect for various purposes, including to:
        </p>
        <ul className="para" >
          <li>
            Provide and Maintain Services: Ensure the functionality and
            performance of our Site.
          </li>
          <li>
            Improve Our Services: Analyze user behavior to enhance our
            offerings.
          </li>
          <li>
            Communicate with You: Send updates, newsletters, and other
            information that may be of interest to you.
          </li>
          <li>Manage Payments: Process transactions and manage billing.</li>
          <li>
            Ensure Security: Detect and prevent fraudulent activities and
            enhance the security of our Site.
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <h2 className="subHdpolicy">Cookies and Tracking Technologies</h2>
        <p className="para">
          We use cookies and similar tracking technologies to monitor activity
          on our Site and store certain information. Cookies are files with a
          small amount of data that may include an anonymous unique identifier.
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our Site.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="subHdpolicy">Data Security</h2>
        <p className="para">
          The security of your data is important to us, but remember that no
          method of transmission over the internet or method of electronic
          storage is 100% secure. We strive to use commercially acceptable means
          to protect your personal data but cannot guarantee its absolute
          security.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="subHdpolicy">Third-Party Services</h2>
        <p className="para">
          We may employ third-party companies and individuals to facilitate our
          Site ("Service Providers"), provide the Site on our behalf, perform
          Site-related services, or assist us in analyzing how our Site is used.
          These third parties have access to your personal information only to
          perform these tasks on our behalf and are obligated not to disclose or
          use it for any other purpose.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="subHdpolicy">Links to Other Sites</h2>
        <p className="para">
          Our Site may contain links to other sites that are not operated by us.
          If you click on a third-party link, you will be directed to that
          third-party’s site.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy