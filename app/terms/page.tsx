// BAN BREAKER/app/terms/page.tsx

import Link from 'next/link';

export default function TermsPage() {
  return (
    // Using a base dark theme that aligns with your globals.css
    <div className="min-h-screen px-4 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 font-orbitron text-4xl font-bold glow">
          Terms of Service for BanBreaker
        </h1>
        
        <div className="space-y-6 text-gray-300">
          <p>
            Welcome to BanBreaker, a service provided by HEAVSTAL TECH™. By accessing or using our unban appeal tool ("the Service"), you agree to be bound by the following terms and conditions ("Terms").
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-white">1. Use of the Service</h2>
          <p>
            BanBreaker is a tool designed to help users draft and send unban appeals for messaging platforms like WhatsApp. You agree to use the Service for lawful and good-faith purposes only. You are strictly prohibited from using the Service if your account was banned for illegal activities or severe violations of platform policies.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-white">2. No Guarantee of Success</h2>
          <p>
            The Service provides professionally crafted templates and AI-driven assistance to improve the quality of your appeal. However, **HEAVSTAL TECH™ does not guarantee that your account or group will be unbanned.** The final decision rests solely with the platform's support and moderation teams (e.g., WhatsApp). You use this Service at your own risk.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-white">3. Intellectual Property</h2>
          <p>
            All content, designs, logos, appeal templates, and the "BanBreaker" name are the property of HEAVSTAL TECH™. Unauthorized reproduction or distribution is prohibited. You retain full ownership of the personal information (e.g., your phone number) you provide to use the Service.
          </p>
          
          <h2 className="pt-4 text-2xl font-semibold text-white">4. AI Assistant (Jeden)</h2>
          <p>
            Our AI assistant, Jeden, provides guidance based on the data you provide. This guidance should not be considered legal advice. The AI's suggestions are intended to help you structure your appeal, but the responsibility for the final content of your appeal is yours alone.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-white">5. Limitation of Liability</h2>
          <p>
            HEAVSTAL TECH™ is not liable for any direct or indirect damage, negative consequences, or data loss resulting from the use or inability to use our Service. This includes, but is not limited to, the permanent loss of your account, group, or associated data following your appeal. You are solely responsible for your interactions with the platform's support teams.
          </p>

          <h2 className="pt-4 text-2xl font-semibold text-white">6. Modifications to Terms</h2>
          <p>
            HEAVSTAL TECH™ reserves the right to modify these Terms at any time. We will post the revised terms on this page. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
          </p>

          <p className="pt-8 text-sm italic text-gray-400">
            If you do not agree with these terms, please do not use the Service.
          </p>

          <Link href="/" className="mt-8 inline-block font-semibold text-blue-400 hover:underline">
            &larr; Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
