// BAN BREAKER/app/privacy/page.tsx

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    // Using a base dark theme that aligns with your globals.css
    <div className="min-h-screen px-4 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 font-orbitron text-4xl font-bold glow">
          Privacy Policy for BanBreaker
        </h1>
        
        <div className="space-y-6 text-gray-300">
          <p>
            Welcome to BanBreaker, a service provided by HEAVSTAL TECH™. Your privacy and the security of your information are of the utmost importance to us. This Privacy Policy explains how we handle your data when you use our unban appeal services.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-white">1. Data We Handle and Why</h2>
          <p>
            We are committed to handling the minimum amount of data necessary to provide our service effectively. Here’s what we process:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Phone Numbers & Group Links:</strong> We require this information to correctly populate the appeal templates you choose. This is the core functionality of the tool.
            </li>
            <li>
              <strong>Appeal Descriptions & Uploaded Images:</strong> When you use our AI Assistant ("Jeden"), the text you provide and the images (screenshots) you upload are used to generate a custom, relevant appeal.
            </li>
          </ul>

          <h2 className="pt-4 text-2xl font-semibold text-white">2. How We Process Your Data</h2>
          <p>
            Understanding the flow of your data is key to trusting our service.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Ephemeral Server Processing:</strong> We are committed to your privacy. The information you provide (numbers, text, and images) is processed on our servers ephemerally. **We do not store your phone number, appeal text, or uploaded images on our servers after your request is complete.** The data exists only long enough to generate the response and is then discarded.
            </li>
            <li>
               <strong>Local Storage for Appeal History:</strong> BanBreaker uses your browser's `localStorage` to save a log of the appeals you've sent. This data is stored **exclusively on your own device** and is never transmitted to our servers. You have full control over this history and can clear it at any time from within the app or by clearing your browser's cache.
            </li>
          </ul>

          <h2 className="pt-4 text-2xl font-semibold text-white">3. Third-Party Services</h2>
          <p>
            To provide advanced features, we utilize a specialized third-party service:
          </p>
           <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Groq AI:</strong> To power our AI Assistant (Jeden), the text you provide (or the text extracted from your uploaded image) is sent to the Groq API to generate a response. We do not send your phone number or the image file itself to Groq. We encourage you to review <a href="https://wow.groq.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Groq's Privacy Policy</a>.
            </li>
          </ul>


          <h2 className="pt-4 text-2xl font-semibold text-white">4. Data Security</h2>
          <p>
            We use industry-standard security measures, including secure HTTPS connections for all data transmission, to protect your information while it is being processed. However, no online tool is 100% secure, and we advise against submitting any sensitive personal information not directly required for your appeal.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-white">5. Children's Privacy</h2>
          <p>
            BanBreaker is not intended for use by individuals under the age of 13. We do not knowingly collect any data from children.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-white">6. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>

          <p className="pt-8 text-sm italic text-gray-400">
            By using BanBreaker, you acknowledge and agree to this privacy policy.
          </p>

          <Link href="/" className="mt-8 inline-block font-semibold text-blue-400 hover:underline">
            &larr; Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
