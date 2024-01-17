import React from 'react'
import Layout from './../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <h1 className='text-center'>Superstore-360 Privacy Policy</h1>
      <p className='text-center'>Last updated: January 17, 2024</p>
      <div>
      <h2>Introduction</h2>
<p>Superstore-360 is committed to protecting the privacy of our customers and visitors. This Privacy Policy describes the information we collect, how we use it, and your choices regarding your personal information.</p>

<h2 className='text-center'>Information We Collect</h2>
<h3>Personal Information:</h3>
<p>We collect personal information you provide voluntarily, such as:</p>
<ul>
  <li>Account information: name, email address, shipping and billing addresses, phone number, password</li>
  <li>Order information: product details, purchase history, order tracking information</li>
</ul>
<h3>Automatic Information:</h3>
<p>We automatically collect information about your device and browsing activity, such as:</p>
<ul>
  <li>Device information: IP address, browser type, operating system, device model</li>
  <li>Browsing information: pages visited, time spent on pages, clicks, search queries</li>
  <li>Cookies and similar technologies: We use cookies and similar technologies to track your browsing activity and preferences. You can control your cookie settings through your browser.</li>
</ul>

<h2>How We Use Your Information</h2>
<p>We use your information for the following purposes:</p>
<ul>
  <li>To fulfill your orders and provide customer service</li>
  <li>To personalize your shopping experience</li>
  <li>To send you marketing and promotional materials</li>
  <li>To improve our website and services</li>
  <li>To comply with legal requirements</li>
</ul>
<h2>Your Choices</h2>
<p>You have the following choices regarding your personal information:</p>
<ul>
  <li>You can access and update your account information at any time.</li>
  <li>You can request to delete your personal information.</li>
</ul>

<h2>Security</h2>
<p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>
<h2>Changes to this Policy:</h2>
<p>We may update this Privacy Policy from time to time. We will post any changes on this page. We encourage you to review this Privacy Policy periodically for the latest information.</p>
      </div>

    </Layout>
  )
}

export default Policy