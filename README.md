<div align="center">
  <!-- You can create a logo and place it here -->
  <img src="https://files.catbox.moe/xvi38o.jpg" alt="BanBreaker Logo" width="150"/> 
  <h1>BanBreaker</h1>
  <p>
    A premium, powerful tool by <strong>HEAVSTAL TECH™</strong> to help you effectively appeal WhatsApp account and group bans.
  </p>
  <p><em>Restore your access with intelligently crafted, high-success-rate appeals.</em></p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind-CSS-teal?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Groq-AI-yellow?style=for-the-badge" alt="Groq AI">
    <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" alt="Vercel">
  </p>
</div>

---

## ✨ Features

-   ⚡ **Multi-Tier Appeal System**: Dedicated workflows for regular account bans, group bans, and legally-focused permanent ban appeals.
-   📚 **Curated Templates**: Access a library of high-success-rate appeal templates for various scenarios.
-   🤖 **AI-Powered Assistant (Jeden)**: Get custom-generated appeals by describing your situation or uploading a screenshot of the ban message.
-   👁️ **Screenshot Analysis**: The AI uses Tesseract.js to read text directly from your ban screenshots for a more accurate appeal.
-   💾 **Local Appeal History**: All your sent appeals are logged securely in your browser's local storage for your reference.
-   🎨 **Dynamic Theming**: Switch between Dark Blue, Dark Yellow, and Dark Red themes to suit your style.
-   📱 **Fully Responsive**: A clean, modern UI that works perfectly on both desktop and mobile devices.

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI Engine**: [Groq](https://groq.com/) (for Llama 3.1)
-   **Image Recognition (OCR)**: [Tesseract.js](https://tesseract.projectnaptha.com/)
-   **Deployment**: [Vercel](https://vercel.com/)

---

## ⚙️ Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or later)
-   npm or yarn
-   A [Groq](https://groq.com/) API Key for the AI Chatbot.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/BanBreaker.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd BanBreaker
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

For the AI Assistant to work, you need to provide your Groq API key.

1.  Create a new file named `.env.local` in the root of your project.
2.  Add your API key to this file:
    ```
    GROQ_API_KEY=gsk_YourSecretGroqApiKeyHere
    ```

### Run the Development Server

Start the local development server with this command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 🚀 Deployment

This app is optimized for deployment on [Vercel](https://vercel.com/).

1.  Push your code to a GitHub repository.
2.  Import the repository into Vercel.
3.  **Important**: In your Vercel project settings, go to **Settings > Environment Variables** and add your `GROQ_API_KEY` with its value.
4.  Deploy!

---

## 📜 License

This project is distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  <p>Built with ❤️ by <strong>HEAVSTAL TECH™</strong></p>
</div>