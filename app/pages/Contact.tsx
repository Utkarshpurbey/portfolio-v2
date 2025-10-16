import React, { useState, useMemo, useCallback, memo } from "react";
import CodeHighlighter from "../components/CodeHighlighter";
import SidePanel from "../components/SidePanel";
import HamburgerItem from "../components/HamburgerItem";
import { useSelector } from "react-redux";
import { IRootState } from "../Slice/store";
import { FaEnvelope, FaPhone, FaExternalLinkAlt, FaYoutube, FaInstagram, FaTwitch } from "react-icons/fa";

// Memoized ContactsSidebar component to prevent unnecessary re-renders
const ContactsSidebar = memo(() => (
  <div className="animate-slideInFromLeft">
    <HamburgerItem title={"contacts"} isOpen={false}>
      <div className="py-4 space-y-2">
        <div className="flex items-center space-x-2 text-sm">
          <FaEnvelope size={12}  />
          <span>utkarshpurbey@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <FaPhone size={12}  />
          <span>+916379990285</span>
        </div>
      </div>
    </HamburgerItem>

    <HamburgerItem title={"find-me-also-in"} isOpen={false}>
      <div className="py-4 space-y-2">
        <div className="flex items-center space-x-2 text-sm ide-hover cursor-pointer">
          <FaExternalLinkAlt size={10}  />
          <span className="-300 hover:text-white transition-colors duration-300">YouTube channel</span>
        </div>
        <div className="flex items-center space-x-2 text-sm ide-hover cursor-pointer">
          <FaExternalLinkAlt size={10}  />
          <span className="-300 hover:text-white transition-colors duration-300">GuruShots profile</span>
        </div>
        <div className="flex items-center space-x-2 text-sm ide-hover cursor-pointer">
          <FaExternalLinkAlt size={10}  />
          <span className="-300 hover:text-white transition-colors duration-300">Instagram account</span>
        </div>
        <div className="flex items-center space-x-2 text-sm ide-hover cursor-pointer">
          <FaExternalLinkAlt size={10}  />
          <span className="-300 hover:text-white transition-colors duration-300">Twitch profile</span>
        </div>
      </div>
    </HamburgerItem>
  </div>
));

ContactsSidebar.displayName = 'ContactsSidebar';

// Memoized ContactForm component to prevent unnecessary re-renders
const ContactForm = memo(({ formData, handleInputChange, handleSubmit }: {
  formData: { name: string; email: string; message: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) => (
  <div className="flex-1 flex items-center justify-center p-4 animate-slideInFromLeft">
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label className="block text-sm mb-1">_name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full bg-transparent border border-borderColor px-2  text-white focus:outline-none focus:border-primaryOrange py-1 rounded-lg"
        />
      </div>
      
      <div>
        <label className="block text-sm mb-1">_email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full bg-transparent border border-borderColor px-2 text-white focus:outline-none focus:border-primaryOrange py-1 rounded-lg"
        />
      </div>
      
      <div>
        <label className="block text-sm mb-1">_message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={6}
          className="w-full bg-transparent border border-borderColor px-2 py-1 text-white focus:outline-none focus:border-primaryOrange resize-none rounded-lg"
        />
      </div>
      
      <button
        type="submit"
        className="bg-primaryOrange text-primary px-4 py-2 rounded hover:bg-opacity-80 transition-colors duration-300"
      >
        submit-message
      </button>
    </form>
  </div>
));

ContactForm.displayName = 'ContactForm';

const Contact = () => {
  const { isMenuOpen, isMobile } = useSelector((state: IRootState) => state.vitalInfo);
  const [formData, setFormData] = useState({
    name: "Binod",
    email: "",
    message: ""
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  }, [formData]);

  const codeString = useMemo(() => `const button = document.querySelector('#sendBtn');
const message = {
  name: "${formData.name}",
  email: "${formData.email}",
  message: "${formData.message}",
  date: "${new Date().toDateString()}"
}

button.addEventListener('click', () => {
  form.send(message);
});`, [formData]);

  return (
    <div className="flex animate-fadeInIDE md:flex-row flex-col h-full">
      {!isMenuOpen && (
        <>
          <SidePanel width={20}>
            <ContactsSidebar />
          </SidePanel>

          <div className="flex-1 flex md:flex-row flex-col">
            {/* Contact Form Section */}
            <ContactForm 
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />

            {/* Separator */}
            <div className="hidden md:block w-px bg-borderColor"></div>

            {/* Code Editor Section - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 items-center justify-center animate-slideInFromRight">
              <div className="w-full h-full">
                <CodeHighlighter
                  code={codeString}
                  language="javascript"
                  theme="default"
                  showLineNumbers={true}
                  style={{ height: "100%" }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
