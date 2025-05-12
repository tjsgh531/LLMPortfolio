import React from "react";
import { useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  linkUrl: string;
  githubUrl: string;
};

const Projects: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  const joinUrl = (base: string, path: string) =>
    `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

  const [, setLocation] = useLocation();

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "AI 뉴스 크롤러 & 블로그 생성기",
      description:
        "인공지능 뉴스를 자동으로 크롤링하여 수집하고, 해당 뉴스를 기반으로 최신 트렌드를 반영한 블로그 글을 자동 생성하는 시스템입니다.",
      image: "images/projects/ai-news-crawler.png",
      technologies: ["Python", "OpenAI API", "Selenium", "BeautifulSoup", "PostgreSQL"],
      linkUrl: "project/news-crawler",
      githubUrl: "https://github.com/tjsgh531/AI_news_automatic_blog_generator",
    },
    {
      id: 2,
      title: "KRX 금융 언어 모델 대회",
      description:
        "KRX와 원라인AI가 공동 개발한 'KRX-Bench'로 평가받는 금융 특화 언어 모델 개발 대회에 참가했습니다. SFT, DAPT, QLoRA 기술을 활용해 Qwen2-7B-it 모델을 향상시켜 예선 2위, 본선 13위를 달성했습니다.",
      image: "images/projects/model-performance.png",
      technologies: ["Qwen2-7B-Instruct", "SFT", "DAPT", "QLoRA", "Adapting LLM", "PyTorch"],
      linkUrl: "project/krx-prediction",
      githubUrl: "https://github.com/tjsgh531/finance_llm_with_krx?tab=readme-ov-file",
    },
    {
      id: 3,
      title: "과학 질의 응답 챗봇 구현",
      description:
        "과학 지식에 특화된 질의응답 챗봇 시스템. 사용자의 과학 관련 질문에 정확하고 신뢰할 수 있는 답변을 제공합니다.",
      image: "images/projects/document-summarizer.png",
      technologies: ["Python", "Elasticsearch", "Faiss", "GPT-4o", "FastAPI"],
      linkUrl: "project/document-summarizer",
      githubUrl: "https://github.com/tjsgh531",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl text-primary-900 text-center mb-6">
          프로젝트
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          LLM과 AI를 활용한 개인 및 협업 프로젝트들입니다. 혼자서 개발한 경험과 팀 환경에서 함께 문제를 해결한 경험을 모두 보여드립니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="project-card overflow-hidden h-full flex flex-col rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg cursor-pointer"
                onClick={() => (window.location.href = joinUrl(base, project.linkUrl))}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={joinUrl(base, project.image)}
                    alt={`${project.title} 스크린샷`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <h3 className="font-heading font-semibold text-xl text-primary-900">
                    {project.title}
                  </h3>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-primary-100 text-primary-700 hover:bg-primary-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0 justify-between">
                  <a
                    href={joinUrl(base, project.linkUrl)}
                    className="text-primary-500 hover:text-primary-700 font-medium flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>자세히 보기</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-600 hover:text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <SiGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
