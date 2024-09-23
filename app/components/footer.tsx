import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-gray-200 py-12 px-8 sm:px-16">
      <div className="flex flex-wrap justify-between gap-8">
        {/* Legal Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Legal</h2>
          <ul className="list-none">
            <li>
              <a href="/tos" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/impressum" className="hover:underline">
                Impressum
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Social</h2>
          <ul className="list-none">
            <li>
              <a
                href="https://github.com/Aldoraz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Image
                  aria-hidden
                  src="/images/github.svg"
                  alt="Github logo"
                  width={16}
                  height={16}
                />
                Github
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@romide.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Image
                  aria-hidden
                  src="/images/email.svg"
                  alt="Email icon"
                  width={16}
                  height={16}
                />
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8">
        © {new Date().getFullYear()} Romide. All rights reserved.
      </div>
    </footer>
  );
}

