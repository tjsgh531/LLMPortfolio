import React from "react";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

// 프로젝트 데이터 인터페이스
interface ProjectData {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
  image: string;
  technologies: string[];
  githubUrl: string;
}

// 프로젝트 데이터 - 실제 프로젝트에 맞게 업데이트
const projectsData: Record<string, ProjectData> = {
  "news-crawler": {
    id: 1,
    title: "AI 뉴스 크롤러 & 블로그 생성기",
    description: "인공지능 뉴스를 자동으로 크롤링하여 수집하고, 해당 뉴스를 기반으로 최신 트렌드를 반영한 블로그 글을 자동 생성하는 시스템입니다.",
    fullDescription: "인공지능과 관련된 최신 뉴스를 자동으로 수집하고 분석하여 블로그 포스트를 자동으로 생성하는 시스템을 개발했습니다. Selenium과 BeautifulSoup을 활용하여 주요 기술 뉴스 사이트에서 AI 관련 기사를 크롤링하고, OpenAI API를 활용하여 해당 내용을 바탕으로 고품질의 블로그 콘텐츠를 생성합니다. PostgreSQL 데이터베이스를 활용하여 크롤링한 데이터와 생성된 콘텐츠를 효율적으로 관리합니다.",
    features: [
      "AI 뉴스 자동 크롤링 및 수집",
      "OpenAI API를 활용한 블로그 콘텐츠 자동 생성",
      "PostgreSQL 데이터베이스를 활용한 데이터 관리",
      "중복 콘텐츠 방지 및 품질 관리 시스템",
      "정기적인 스케줄링을 통한 자동 실행"
    ],
    challenges: [
      "수많은 인공지능 관련 기사 중에서 유의미하고 핵심적인 정보를 추출하는 알고리즘 구현",
      "PostgreSQL을 활용한 효율적인 기사 데이터 관리 및 중복 방지 시스템 구축",
      "사용자에게 도움이 되는 고품질 콘텐츠 생성을 위한 정교한 프롬프트 엔지니어링 기법 적용",
      "지속적인 유지보수와 확장이 용이한 객체지향 설계를 통한 자동화 시스템 구현"
    ],
    image: "/images/projects/news-crawler.png",
    technologies: ["Python", "OpenAI API", "Selenium", "BeautifulSoup", "PostgreSQL"],
    githubUrl: "https://github.com/tjsgh531/AI_news_automatic_blog_generator"
  }
};

const ProjectDetail: React.FC = () => {
  const [location, setLocation] = useLocation();
  
  // URL에서 프로젝트 ID 추출
  const projectId = location.split("/")[2];
  const project = projectsData[projectId];
  
  // 프로젝트를 찾지 못한 경우
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
        <Button onClick={() => setLocation("/")} className="mt-4">
          홈으로 돌아가기
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        onClick={() => setLocation("/")}
        className="mb-8 flex items-center text-primary-500 hover:text-primary-700"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>돌아가기</span>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-4xl font-bold text-primary-900 mb-6">{project.title}</h1>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img
                src={project.image}
                alt={`${project.title} 스크린샷`}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">프로젝트 개요</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">주요 기능</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              {project.features?.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">기술적 도전과제</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              {project.challenges?.map((challenge, index) => (
                <li key={index} className="text-gray-700">
                  {challenge}
                </li>
              ))}
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">구현 방법</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className="font-heading text-xl font-semibold text-primary-800 mb-3">데이터 수집 파이프라인</h3>
                <p className="text-gray-700 mb-3">
                  Selenium과 BeautifulSoup을 결합하여 여러 AI 뉴스 사이트에서 데이터를 수집합니다. 크롬 드라이버를 통해 동적 콘텐츠도 처리할 수 있도록 구현했습니다.
                </p>
                <div className="bg-gray-800 rounded-md p-3 text-gray-100 text-sm font-mono overflow-x-auto">
                  <pre>{'async def crawl_news():\n    driver = webdriver.Chrome()\n    urls = [\'https://aisite1.com\', \'https://aisite2.com\']\n    for url in urls:\n        driver.get(url)\n        soup = BeautifulSoup(driver.page_source, \'html.parser\')\n        articles = soup.find_all(\'article\', class_=\'news-item\')'}</pre>
                </div>
              </div>
              
              <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className="font-heading text-xl font-semibold text-primary-800 mb-3">데이터베이스 모델링</h3>
                <p className="text-gray-700 mb-3">
                  PostgreSQL에 효율적인 데이터 저장을 위해 정규화된 스키마를 설계했습니다. 뉴스 컨텐츠, 메타데이터, 생성된 블로그 사이의 관계를 명확히 정의했습니다.
                </p>
                <div className="bg-gray-800 rounded-md p-3 text-gray-100 text-sm font-mono overflow-x-auto">
                  <pre>{'CREATE TABLE articles (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    content TEXT NOT NULL,\n    url VARCHAR(255) UNIQUE NOT NULL,\n    published_date TIMESTAMP NOT NULL,\n    source_id INTEGER REFERENCES sources(id)\n);\n\nCREATE TABLE generated_blogs (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    content TEXT NOT NULL,\n    created_at TIMESTAMP DEFAULT NOW(),\n    article_id INTEGER REFERENCES articles(id)\n);'}</pre>
                </div>
              </div>
              
              <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className="font-heading text-xl font-semibold text-primary-800 mb-3">OpenAI API 활용 및 프롬프트 설계</h3>
                <p className="text-gray-700 mb-3">
                  GPT 모델이 고품질 블로그 포스트를 생성하도록 세심하게 프롬프트를 설계했습니다. 컨텍스트 제공, 스타일 가이드, 출력 형식을 포함한 정교한 프롬프트 엔지니어링을 적용했습니다.
                </p>
                <div className="bg-gray-800 rounded-md p-3 text-gray-100 text-sm font-mono overflow-x-auto">
                  <pre>{'def generate_blog_post(article):\n    prompt = f"""\n    다음 AI 뉴스 기사를 바탕으로 전문적이면서도 이해하기 쉬운 블로그 글을 작성해주세요:\n    제목: {article.title}\n    내용: {article.content}\n    \n    다음 지침을 따라주세요:\n    1. 전문 용어를 설명하며 진행하세요.\n    2. 기술의 잠재적 영향을 분석하세요.\n    3. 실제 적용 사례를 포함하세요.\n    4. 3개의 소제목으로 구성하세요.\n    """\n    \n    response = openai.ChatCompletion.create(\n        model="gpt-4",\n        messages=[{"role": "system", "content": "당신은 AI 기술 전문 작가입니다."},\n                 {"role": "user", "content": prompt}],\n        temperature=0.7,\n        max_tokens=1500\n    )\n    \n    return response.choices[0].message["content"]'}</pre>
                </div>
              </div>
              
              <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className="font-heading text-xl font-semibold text-primary-800 mb-3">객체지향 설계 및 자동화</h3>
                <p className="text-gray-700 mb-3">
                  유지보수와 확장이 용이하도록 모듈화된 객체지향 구조로 시스템을 설계했습니다. 스케줄러를 통한 자동화로 정기적인 뉴스 수집 및 블로그 생성이 가능합니다.
                </p>
                <div className="bg-gray-800 rounded-md p-3 text-gray-100 text-sm font-mono overflow-x-auto">
                  <pre>{'class NewsCrawler:\n    def __init__(self, config):\n        self.sources = config["sources"]\n        self.db_manager = DatabaseManager(config["database"])\n        self.content_analyzer = ContentAnalyzer()\n    \n    def run(self):\n        for source in self.sources:\n            articles = self._crawl_source(source)\n            filtered_articles = self.content_analyzer.filter_relevant(articles)\n            self.db_manager.save_articles(filtered_articles)\n\nclass BlogGenerator:\n    def __init__(self, config):\n        self.db_manager = DatabaseManager(config["database"])\n        self.ai_client = OpenAIClient(config["api_key"])\n    \n    def generate_from_latest(self, count=5):\n        articles = self.db_manager.get_latest_articles(count)\n        for article in articles:\n            blog_content = self.ai_client.generate_blog(article)\n            self.db_manager.save_blog(article.id, blog_content)\n\n# 자동화 스케줄러 설정\ndef schedule_jobs():\n    scheduler = BlockingScheduler()\n    crawler = NewsCrawler(config)\n    generator = BlogGenerator(config)\n    \n    scheduler.add_job(crawler.run, "interval", hours=6)\n    scheduler.add_job(generator.generate_from_latest, "interval", hours=8)\n    scheduler.start()'}</pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 sticky top-24"
          >
            <h3 className="font-heading text-xl font-semibold text-primary-800 mb-4">사용 기술</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-primary-100 text-primary-700 hover:bg-primary-200">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <h3 className="font-heading text-xl font-semibold text-primary-800 mb-4">프로젝트 링크</h3>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors w-full justify-center mb-2"
            >
              <SiGithub className="mr-2 h-5 w-5" />
              GitHub 저장소 방문하기
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;