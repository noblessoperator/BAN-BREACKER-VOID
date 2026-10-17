import Link from 'next/link';

const Footer = () => {
  const productName = "BanBreaker"; 

  return (
    <footer className="w-full text-center p-4 mt-8 absolute bottom-0">
      <p className="text-gray-400 text-sm">
       © HEAVSTAL TECH™ || All Rights Reserved
      </p>
      <p className="text-gray-500 text-xs mt-1">
        By Using {productName} you agree to our{' '}
        <Link href="/terms" className="underline hover:text-blue-400">
          terms
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="underline hover:text-blue-400">
          privacy policy
        </Link>{' '}
        of usage.
      </p>
    </footer>
  );
};

export default Footer;