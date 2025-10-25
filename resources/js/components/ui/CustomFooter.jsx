import {
  Footer,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  FooterCopyright,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "@/components/logo";

export default function CustomFooter() {
  return (
    <Footer
      container
      className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 
                 text-gray-800 dark:text-gray-200 shadow-[0_-2px_8px_rgba(0,0,0,0.05)] 
                 dark:shadow-[0_-2px_8px_rgba(255,255,255,0.05)] 
                 transition-all duration-500"
    >
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:grid-cols-1">
          <div>
            <Logo className="h-36 mr-2 opacity-90 hover:opacity-100 transition-opacity" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:mt-6 sm:grid-cols-3 sm:gap-6">
            {/* About Section */}
            <div>
              <FooterTitle title="About" className="text-gray-900 dark:text-white font-semibold" />
              <FooterLinkGroup col>
                <FooterLink
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Our Company
                </FooterLink>
                <FooterLink
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Services
                </FooterLink>
              </FooterLinkGroup>
            </div>

            {/* Follow Us Section */}
            <div>
              <FooterTitle title="Follow Us" className="text-gray-900 dark:text-white font-semibold" />
              <FooterLinkGroup col>
                <FooterLink
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Github
                </FooterLink>
                <FooterLink
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Discord
                </FooterLink>
              </FooterLinkGroup>
            </div>

            {/* Legal Section */}
            <div>
              <FooterTitle title="Legal" className="text-gray-900 dark:text-white font-semibold" />
              <FooterLinkGroup col>
                <FooterLink
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </FooterLink>
                <FooterLink
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="MyApp™"
            year={new Date().getFullYear()}
            className="text-gray-700 dark:text-gray-400"
          />

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://www.linkedin.com/in/loay-ghanem-00472b2b6/"
              icon={BsFacebook}
              className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            />
            <FooterIcon
              href="https://www.linkedin.com/in/loay-ghanem-00472b2b6/"
              icon={BsInstagram}
              className="text-gray-700 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition-colors duration-300"
            />
            <FooterIcon
              href="https://www.linkedin.com/in/loay-ghanem-00472b2b6/"
              icon={BsTwitter}
              className="text-gray-700 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-colors duration-300"
            />
            <FooterIcon
              href="https://www.linkedin.com/in/loay-ghanem-00472b2b6/"
              icon={BsGithub}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
            />
            <FooterIcon
              href="https://www.linkedin.com/in/loay-ghanem-00472b2b6/"
              icon={BsDribbble}
              className="text-gray-700 hover:text-pink-400 dark:text-gray-400 dark:hover:text-pink-300 transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
