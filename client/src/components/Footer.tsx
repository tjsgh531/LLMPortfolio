import React from "react";
import { Github, Linkedin, Twitter, Rss } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationSections = [
    {
      title: "빠른 링크",
      links: [
        { name: "홈", href: "#home" },
        { name: "소개", href: "#about" },
        { name: "프로젝트", href: "#projects" },
        { name: "기술 스택", href: "#skills" }
      ]
    },
    {
      title: "연락하기",
      links: [
        { name: "교육", href: "#education" },
        { name: "연락처", href: "#contact" },
        { name: "이력서 다운로드", href: "#" }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Rss size={20} />, href: "#", label: "Blog" }
  ];

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="mb-8 md:mb-0">
            <h2 className="font-heading font-bold text-2xl mb-2">LLM 개발자 포트폴리오</h2>
            <p className="text-gray-400">AI와 자연어 처리로 더 나은 미래를 만듭니다.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {navigationSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="font-heading font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-heading font-semibold text-lg mb-4">소셜 미디어</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center sm:text-left">
          <p className="text-gray-400">&copy; {currentYear} LLM 개발자 포트폴리오. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
