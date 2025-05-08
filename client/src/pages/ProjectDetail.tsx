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
    image: "/images/projects/ai-news-crawler.png",
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
                  Selenium과 BeautifulSoup을 결합하여 AI 타임즈 같은 AI 뉴스 사이트에서 데이터를 수집합니다. 헤드리스 모드 크롬 드라이버를 통해 동적 콘텐츠도 처리할 수 있으며, 주요 AI 기업 관련 뉴스를 필터링하도록 구현했습니다.
                </p>
                <div className="bg-gray-800 rounded-md p-3 text-gray-100 text-sm font-mono overflow-x-auto">
                  <pre>
                    <span className="code-keyword">class</span> <span className="code-class">AITimesCrawler</span>:
                    <br />    <span className="code-keyword">def</span> <span className="code-function">__init__</span>(<span className="code-variable">self</span>):
                    <br />        <span className="code-variable">self</span>.<span className="code-property">results</span> = []
                    <br />        <span className="code-variable">options</span> = <span className="code-class">Options</span>()
                    <br />        <span className="code-variable">options</span>.<span className="code-function">add_argument</span>(<span className="code-string">"--headless"</span>)
                    <br />        <span className="code-variable">options</span>.<span className="code-function">add_argument</span>(<span className="code-string">"--no-sandbox"</span>)
                    <br />        <span className="code-variable">self</span>.<span className="code-property">driver</span> = <span className="code-variable">webdriver</span>.<span className="code-class">Chrome</span>(<span className="code-property">options</span>=<span className="code-variable">options</span>)
                    <br />        
                    <br />    <span className="code-keyword">def</span> <span className="code-function">crawl</span>(<span className="code-variable">self</span>, <span className="code-variable">max_pages</span>=<span className="code-number">3</span>):
                    <br />        <span className="code-keyword">for</span> <span className="code-variable">page_num</span> <span className="code-keyword">in</span> <span className="code-function">range</span>(<span className="code-number">1</span>, <span className="code-variable">max_pages</span> + <span className="code-number">1</span>):
                    <br />            <span className="code-variable">url</span> = <span className="code-string">"https://www.aitimes.com/news/articleList.html?page="</span> + <span className="code-function">str</span>(<span className="code-variable">page_num</span>)
                    <br />            <span className="code-variable">self</span>.<span className="code-property">driver</span>.<span className="code-function">get</span>(<span className="code-variable">url</span>)
                    <br />            <span className="code-variable">time</span>.<span className="code-function">sleep</span>(<span className="code-number">2</span>)
                    <br />            
                    <br />            <span className="code-keyword">try</span>:
                    <br />                <span className="code-variable">ul</span> = <span className="code-variable">self</span>.<span className="code-property">driver</span>.<span className="code-function">find_element</span>(<span className="code-class">By</span>.<span className="code-property">CSS_SELECTOR</span>, <span className="code-string">"ul.type2"</span>)
                    <br />                <span className="code-variable">li_list</span> = <span className="code-variable">ul</span>.<span className="code-function">find_elements</span>(<span className="code-class">By</span>.<span className="code-property">TAG_NAME</span>, <span className="code-string">"li"</span>)
                    <br />                
                    <br />                <span className="code-keyword">for</span> <span className="code-variable">li</span> <span className="code-keyword">in</span> <span className="code-variable">li_list</span>:
                    <br />                    <span className="code-variable">title_tag</span> = <span className="code-variable">li</span>.<span className="code-function">find_element</span>(<span className="code-class">By</span>.<span className="code-property">CSS_SELECTOR</span>, <span className="code-string">"h4.titles a"</span>)
                    <br />                    <span className="code-variable">title</span> = <span className="code-variable">title_tag</span>.<span className="code-property">text</span>.<span className="code-function">strip</span>()
                    <br />                    <span className="code-variable">link</span> = <span className="code-variable">title_tag</span>.<span className="code-function">get_attribute</span>(<span className="code-string">"href"</span>)
                    <br />                    <span className="code-comment"># ... 기사 메타데이터 추출 로직 ...</span>
                    <br />            <span className="code-keyword">except</span> <span className="code-class">Exception</span> <span className="code-keyword">as</span> <span className="code-variable">e</span>:
                    <br />                <span className="code-function">print</span>(<span className="code-string">"❌ 기사 목록 수집 실패:"</span>, <span className="code-variable">e</span>)
                    <br />        
                    <br />        <span className="code-keyword">return</span> <span className="code-variable">pd</span>.<span className="code-class">DataFrame</span>(<span className="code-variable">self</span>.<span className="code-property">results</span>)
                    <br />        
                    <br />    <span className="code-keyword">def</span> <span className="code-function">extract_articles_with_known_companies</span>(<span className="code-variable">self</span>, <span className="code-variable">df</span>):
                    <br />        <span className="code-comment"># 주요 AI 기업 필터링 로직</span>
                    <br />        <span className="code-comment"># AI_COMPANY_ALIASES 딕셔너리를 통해 기업명 매핑</span>
                    <br />        <span className="code-comment"># ...</span>
                  </pre>
                </div>
              </div>
              
              <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className="font-heading text-xl font-semibold text-primary-800 mb-3">데이터베이스 모델링</h3>
                <p className="text-gray-700 mb-3">
                  PostgreSQL을 활용하여 기업별로 동적으로 테이블을 생성하는 유연한 데이터베이스 구조를 설계했습니다. 환경변수를 통한 안전한 데이터베이스 연결과 함께 테이블 정규화, 중복 방지를 위한 제약 조건, 그리고 자동화된 에러 처리 시스템을 구현했습니다.
                </p>
                <div className="bg-gray-800 rounded-md p-3 text-gray-100 text-sm font-mono overflow-x-auto">
                  <pre>
                    <span className="code-keyword">import</span> <span className="code-variable">os</span>
                    <br /><span className="code-keyword">import</span> <span className="code-variable">psycopg2</span>
                    <br /><span className="code-keyword">from</span> <span className="code-variable">dotenv</span> <span className="code-keyword">import</span> <span className="code-variable">load_dotenv</span>
                    <br />
                    <br /><span className="code-keyword">class</span> <span className="code-class">PostgresDBManager</span>:
                    <br />    <span className="code-keyword">def</span> <span className="code-function">__init__</span>(<span className="code-variable">self</span>):
                    <br />        <span className="code-variable">load_dotenv</span>()
                    <br />        <span className="code-variable">self</span>.<span className="code-property">conn</span> = <span className="code-variable">psycopg2</span>.<span className="code-function">connect</span>(
                    <br />            <span className="code-property">host</span>=<span className="code-variable">os</span>.<span className="code-function">getenv</span>(<span className="code-string">"DB_HOST"</span>),
                    <br />            <span className="code-property">port</span>=<span className="code-variable">os</span>.<span className="code-function">getenv</span>(<span className="code-string">"DB_PORT"</span>),
                    <br />            <span className="code-property">dbname</span>=<span className="code-variable">os</span>.<span className="code-function">getenv</span>(<span className="code-string">"DB_NAME"</span>),
                    <br />            <span className="code-property">user</span>=<span className="code-variable">os</span>.<span className="code-function">getenv</span>(<span className="code-string">"DB_USER"</span>),
                    <br />            <span className="code-property">password</span>=<span className="code-variable">os</span>.<span className="code-function">getenv</span>(<span className="code-string">"DB_PASSWORD"</span>)
                    <br />        )
                    <br />        <span className="code-variable">self</span>.<span className="code-property">cur</span> = <span className="code-variable">self</span>.<span className="code-property">conn</span>.<span className="code-function">cursor</span>()
                    <br />        <span className="code-function">print</span>(<span className="code-string">"✅ PostgreSQL 연결 성공"</span>)
                    <br />
                    <br />    <span className="code-keyword">def</span> <span className="code-function">_normalize_name</span>(<span className="code-variable">self</span>, <span className="code-variable">name</span>):
                    <br />        <span className="code-keyword">return</span> <span className="code-variable">name</span>.<span className="code-function">lower</span>().<span className="code-function">replace</span>(<span className="code-string">" "</span>, <span className="code-string">"_"</span>).<span className="code-function">replace</span>(<span className="code-string">"-"</span>, <span className="code-string">"_"</span>)
                    <br />
                    <br />    <span className="code-keyword">def</span> <span className="code-function">create_company_table</span>(<span className="code-variable">self</span>, <span className="code-variable">company_name</span>):
                    <br />        <span className="code-variable">table_name</span> = <span className="code-variable">self</span>.<span className="code-function">_normalize_name</span>(<span className="code-variable">company_name</span>) + <span className="code-string">"_articles"</span>
                    <br />        <span className="code-variable">query</span> = <span className="code-string">"CREATE TABLE IF NOT EXISTS "</span> + <span className="code-variable">table_name</span> + <span className="code-string">" (id SERIAL PRIMARY KEY, title TEXT, url TEXT UNIQUE, content TEXT, published_at DATE, used BOOLEAN DEFAULT FALSE);"</span>
                    <br />        <span className="code-variable">self</span>.<span className="code-property">cur</span>.<span className="code-function">execute</span>(<span className="code-variable">query</span>)
                    <br />        <span className="code-variable">self</span>.<span className="code-property">conn</span>.<span className="code-function">commit</span>()
                    <br />        <span className="code-keyword">return</span> <span className="code-variable">table_name</span>
                    <br />
                    <br />    <span className="code-keyword">def</span> <span className="code-function">insert_article_to_company_table</span>(<span className="code-variable">self</span>, <span className="code-variable">company_name</span>, <span className="code-variable">title</span>, <span className="code-variable">url</span>, <span className="code-variable">content</span>, <span className="code-variable">published_at</span>):
                    <br />        <span className="code-variable">table_name</span> = <span className="code-variable">self</span>.<span className="code-function">create_company_table</span>(<span className="code-variable">company_name</span>)
                    <br />        <span className="code-keyword">try</span>:
                    <br />            <span className="code-variable">query</span> = <span className="code-string">"INSERT INTO "</span> + <span className="code-variable">table_name</span> + <span className="code-string">" (title, url, content, published_at) VALUES (%s, %s, %s, %s) ON CONFLICT (url) DO NOTHING;"</span>
                    <br />            <span className="code-variable">self</span>.<span className="code-property">cur</span>.<span className="code-function">execute</span>(<span className="code-variable">query</span>, (<span className="code-variable">title</span>, <span className="code-variable">url</span>, <span className="code-variable">content</span>, <span className="code-variable">published_at</span>))
                    <br />            <span className="code-variable">self</span>.<span className="code-property">conn</span>.<span className="code-function">commit</span>()
                    <br />            
                    <br />            <span className="code-keyword">if</span> <span className="code-variable">self</span>.<span className="code-property">cur</span>.<span className="code-property">rowcount</span> <span className="code-comment">/*is greater than*/</span> <span className="code-number">0</span>:
                    <br />                <span className="code-function">print</span>(<span className="code-string">"✅ 새 기사가 저장되었습니다"</span>)
                    <br />                <span className="code-keyword">return</span> <span className="code-boolean">True</span>
                    <br />            <span className="code-keyword">else</span>:
                    <br />                <span className="code-function">print</span>(<span className="code-string">"⚠️ 이미 존재하는 기사입니다"</span>)
                    <br />                <span className="code-keyword">return</span> <span className="code-boolean">False</span>
                    <br />                
                    <br />        <span className="code-keyword">except</span> <span className="code-class">Exception</span> <span className="code-keyword">as</span> <span className="code-variable">e</span>:
                    <br />            <span className="code-function">print</span>(<span className="code-string">"❌ DB 오류:"</span>, <span className="code-variable">str</span>(<span className="code-variable">e</span>))
                    <br />            <span className="code-variable">self</span>.<span className="code-property">conn</span>.<span className="code-function">rollback</span>()
                    <br />            <span className="code-keyword">return</span> <span className="code-boolean">False</span>
                    <br />            
                    <br />    <span className="code-keyword">def</span> <span className="code-function">close</span>(<span className="code-variable">self</span>):
                    <br />        <span className="code-variable">self</span>.<span className="code-property">cur</span>.<span className="code-function">close</span>()
                    <br />        <span className="code-variable">self</span>.<span className="code-property">conn</span>.<span className="code-function">close</span>()
                    <br />        <span className="code-function">print</span>(<span className="code-string">"🔒 PostgreSQL 연결 종료"</span>)
                  </pre>
                </div>
              </div>
              
              <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className="font-heading text-xl font-semibold text-primary-800 mb-3">OpenAI API 활용 및 프롬프트 설계</h3>
                <p className="text-gray-700 mb-3">
                  GPT-4 모델이 고품질 블로그 포스트를 생성하도록 세심하게 프롬프트를 설계했습니다. 특히 AI 기술 트렌드를 다루는 전문성과 함께 일반 독자도 이해할 수 있는 설명력을 균형있게 갖추도록 했습니다. 또한 체계적인 구조와 전문 용어 해설을 포함한 정교한 프롬프트 엔지니어링을 적용했습니다.
                </p>
                <div className="bg-gray-800 rounded-md p-3 text-gray-100 text-sm font-mono overflow-x-auto">
                  <pre>
                    <span className="code-keyword">import</span> <span className="code-variable">openai</span>
                    <br /><span className="code-keyword">import</span> <span className="code-variable">os</span>
                    <br />
                    <br /><span className="code-keyword">class</span> <span className="code-class">BlogWriter</span>:
                    <br />    <span className="code-keyword">def</span> <span className="code-function">__init__</span>(<span className="code-variable">self</span>):
                    <br />        <span className="code-comment"># API 키 및 클라이언트 초기화</span>
                    <br />        <span className="code-variable">self</span>.<span className="code-property">api_key</span> = <span className="code-variable">os</span>.<span className="code-function">getenv</span>(<span className="code-string">"OPENAI_API_KEY"</span>)
                    <br />        <span className="code-variable">self</span>.<span className="code-property">client</span> = <span className="code-variable">openai</span>.<span className="code-class">OpenAI</span>(<span className="code-property">api_key</span>=<span className="code-variable">self</span>.<span className="code-property">api_key</span>)
                    <br />        
                    <br />    <span className="code-keyword">def</span> <span className="code-function">generate_blog_post</span>(<span className="code-variable">self</span>, <span className="code-variable">company</span>, <span className="code-variable">articles</span>):
                    <br />        <span className="code-comment"># 뉴스 기사 텍스트 준비</span>
                    <br />        <span className="code-variable">article_text</span> = <span className="code-string">"AI 뉴스 데이터..."</span>
                    <br />        
                    <br />        <span className="code-comment"># 프롬프트 구성</span>
                    <br />        <span className="code-variable">prompt</span> = <span className="code-string">"""
                    다음은 최근 AI 뉴스 기사입니다. 이를 바탕으로, 블로그 글을 작성해주세요.

                    스타일 가이드라인:
                    - 시선을 끌 수 있는 제목
                    - 친근하고 유쾌한 말투
                    - 소제목 사용
                    - 독자 호기심 자극
                    """</span>
                    <br />
                    <br />        <span className="code-comment"># OpenAI API 호출</span>
                    <br />        <span className="code-variable">response</span> = <span className="code-variable">self</span>.<span className="code-property">client</span>.<span className="code-property">chat</span>.<span className="code-property">completions</span>.<span className="code-function">create</span>(
                    <br />            <span className="code-property">model</span>=<span className="code-string">"gpt-4"</span>,
                    <br />            <span className="code-property">messages</span>=[<span className="code-comment">/* 메시지 배열 */</span>],
                    <br />            <span className="code-property">temperature</span>=<span className="code-number">0.7</span>
                    <br />        )
                    <br />        
                    <br />        <span className="code-comment"># 생성된 블로그 포스트 반환</span>
                    <br />        <span className="code-keyword">return</span> <span className="code-variable">response</span>.<span className="code-property">choices</span>[<span className="code-number">0</span>].<span className="code-property">message</span>.<span className="code-property">content</span>
                  </pre>
                </div>
              </div>
              
              <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
                <h3 className="font-heading text-xl font-semibold text-primary-800 mb-3">객체지향 설계 및 자동화</h3>
                <p className="text-gray-700 mb-3">
                  유지보수와 확장이 용이하도록 모듈화된 객체지향 구조로 시스템을 설계했습니다. 특히 AITimesCrawler, NewsFilter, BlogGenerator 등 역할에 따라 명확히 분리된 클래스들과 각 클래스 간의 효율적인 상호작용을 중점적으로 구현했습니다. 또한 APScheduler 라이브러리를 활용한 자동화 시스템으로 정기적인 뉴스 수집 및 블로그 생성이 가능합니다.
                </p>
                <div className="bg-gray-800 rounded-md p-3 text-gray-100 text-sm font-mono overflow-x-auto">
                  <pre>
                    <span className="code-comment"># 기업 이름 매핑 및 별칭 정의</span>
                    <br /><span className="code-variable">AI_COMPANY_ALIASES</span> = {'{'}
                    <br />    <span className="code-string">"OpenAI"</span>: [<span className="code-string">"OpenAI"</span>, <span className="code-string">"오픈AI"</span>],
                    <br />    <span className="code-string">"Google"</span>: [<span className="code-string">"Google"</span>, <span className="code-string">"구글"</span>],
                    <br />    <span className="code-string">"DeepMind"</span>: [<span className="code-string">"DeepMind"</span>, <span className="code-string">"딥마인드"</span>]
                    <br />{'}'}<br />
                    <br /><span className="code-comment"># 크롤러 구현 클래스</span>
                    <br /><span className="code-keyword">class</span> <span className="code-class">AITimesCrawler</span>:
                    <br />    <span className="code-keyword">def</span> <span className="code-function">__init__</span>(<span className="code-variable">self</span>):
                    <br />        <span className="code-variable">self</span>.<span className="code-property">results</span> = []
                    <br />        <span className="code-variable">options</span> = <span className="code-class">Options</span>()
                    <br />        <span className="code-variable">options</span>.<span className="code-function">add_argument</span>(<span className="code-string">"--headless"</span>)
                    <br />        <span className="code-variable">self</span>.<span className="code-property">driver</span> = <span className="code-variable">webdriver</span>.<span className="code-class">Chrome</span>(<span className="code-property">options</span>=<span className="code-variable">options</span>)
                    <br />        
                    <br />    <span className="code-keyword">def</span> <span className="code-function">crawl</span>(<span className="code-variable">self</span>, <span className="code-variable">max_pages</span>=<span className="code-number">3</span>):
                    <br />        <span className="code-comment"># 뉴스 페이지별 수집 구현</span>
                    <br />        <span className="code-keyword">pass</span>
                    <br />        
                    <br />    <span className="code-keyword">def</span> <span className="code-function">extract_articles_with_known_companies</span>(<span className="code-variable">self</span>, <span className="code-variable">df</span>):
                    <br />        <span className="code-comment"># 주요 AI 기업 필터링 로직</span>
                    <br />        <span className="code-keyword">pass</span>
                    <br />        
                    <br />    <span className="code-keyword">def</span> <span className="code-function">add_article_content</span>(<span className="code-variable">self</span>, <span className="code-variable">df</span>):
                    <br />        <span className="code-comment"># 상세 기사 내용 수집</span>
                    <br />        <span className="code-keyword">pass</span>
                    <br />
                    <br /><span className="code-comment"># 자동화 스케줄러 설정</span>
                    <br /><span className="code-keyword">def</span> <span className="code-function">schedule_jobs</span>():
                    <br />    <span className="code-variable">scheduler</span> = <span className="code-class">BlockingScheduler</span>()
                    <br />    <span className="code-variable">crawler</span> = <span className="code-class">AITimesCrawler</span>()
                    <br />    <span className="code-variable">processor</span> = <span className="code-class">ArticleProcessor</span>(<span className="code-variable">db_manager</span>)
                    <br />    <span className="code-variable">generator</span> = <span className="code-class">BlogGenerator</span>(<span className="code-variable">config</span>[<span className="code-string">"openai_key"</span>])
                    <br />    
                    <br />    <span className="code-comment"># 6시간마다 뉴스 수집 실행</span>
                    <br />    <span className="code-variable">scheduler</span>.<span className="code-function">add_job</span>(<span className="code-variable">crawler_job</span>, <span className="code-string">"interval"</span>, <span className="code-property">hours</span>=<span className="code-number">6</span>)
                    <br />    
                    <br />    <span className="code-comment"># 8시간마다 블로그 생성 실행</span>
                    <br />    <span className="code-variable">scheduler</span>.<span className="code-function">add_job</span>(<span className="code-variable">generator_job</span>, <span className="code-string">"interval"</span>, <span className="code-property">hours</span>=<span className="code-number">8</span>)
                    <br />    
                    <br />    <span className="code-function">print</span>(<span className="code-string">"✅ 자동화 스케줄러가 시작되었습니다"</span>)
                    <br />    <span className="code-variable">scheduler</span>.<span className="code-function">start</span>()
                  </pre>
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