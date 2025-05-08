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
            <h1 className="font-heading text-4xl font-bold text-primary-900 mb-2">{project.title}</h1>
            <p className="text-gray-500 text-sm mb-6">프로젝트 기간: 25.05.04~25.05.06</p>
            
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
            <ul className="mb-8 space-y-2">
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>AI Times 기반 뉴스 크롤링</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>회사 이름을 기준으로 필터링</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>PostgreSQL에 회사별로 뉴스 저장</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>같은 뉴스 중복 저장 방지 (url 기준)</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>블로그 스타일의 글 자동 생성 (OpenAI GPT-4)</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>뉴스 사용 여부 관리 (used 필드)</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>기업별 마크다운 폴더 정리 및 저장</span>
              </li>
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">기술적 도전과제</h2>
            <ul className="mb-8 space-y-2">
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>뉴스 본문 추출 알고리즘</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>DB 데이터 효율적 관리 및 중복 처리</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>프롬프트 엔지니어링 최적화</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2 text-green-600">✅</span>
                <span>객체지향적 코드 관리</span>
              </li>
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-primary-800 mb-4">시스템 아키텍처</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <p className="text-gray-700 mb-4">
                본 시스템은 뉴스 크롤링부터 블로그 생성까지 파이프라인 형태로 이어지는 데이터 흐름을 갖고 있습니다. 각 단계는 독립적인 모듈로 분리되어 있어 유지보수와 확장이 용이하며, 전체 프로세스는 자동화되어 있습니다.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 my-6 items-center">
                <div className="md:w-2/5">
                  <div className="max-w-xs mx-auto w-full">
                    <img 
                      src="data:image/png;base64,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"
                      alt="AI 뉴스 크롤러 시스템 아키텍처" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 space-y-3">
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-1">1. 뉴스 크롤러</h4>
                    <p className="text-sm text-gray-600">Selenium과 BeautifulSoup을 활용해 AI 관련 뉴스 사이트에서 최신 기사를 수집합니다.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-1">2. 뉴스 전처리 시스템</h4>
                    <p className="text-sm text-gray-600">수집된 기사에서 주요 AI 기업 관련 내용을 추출하고 정제합니다.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-1">3. PostgreSQL 데이터베이스</h4>
                    <p className="text-sm text-gray-600">기업별로 정리된 뉴스 기사를 저장하고 중복을 관리합니다.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-1">4. 블로그 글 생성기 (OpenAI API)</h4>
                    <p className="text-sm text-gray-600">GPT-4 모델을 활용해 저장된 뉴스를 분석하고 통합적인 블로그 콘텐츠를 생성합니다.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-1">5. 블로그 스타일 포매터</h4>
                    <p className="text-sm text-gray-600">생성된 콘텐츠에 마크다운 형식과 일관된 스타일을 적용합니다.</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-1">6. 저장 또는 업로드</h4>
                    <p className="text-sm text-gray-600">최종 블로그를 로컬 저장소에 저장하거나 웹 플랫폼에 자동 업로드합니다.</p>
                  </div>
                </div>
              </div>
              

            </div>
            
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
                <h3 className="font-heading text-xl font-semibold text-primary-800 mb-3">객체지향 설계 및 CLI 자동화</h3>
                <p className="text-gray-700 mb-3">
                  각 기능을 객체로 모듈화하여 main.py에서 유기적으로 작동하도록 설계했습니다. 주요 기능은 명령줄 인터페이스(CLI)로 제공되어 사용자가 간편하게 활용할 수 있습니다. 'python main.py crawl' 명령어로 최신 AI 뉴스를 크롤링하여 DB에 저장하고, 'python main.py blog 기업명'으로 특정 기업 관련 기사들을 활용하여 블로그를 생성합니다. 'python main.py blog all' 명령어를 통해 모든 기업에 대한 블로그를 일괄 생성할 수도 있습니다.
                </p>
                <div className="bg-gray-800 rounded-md p-3 text-gray-100 text-sm font-mono overflow-x-auto">
                  <pre>
                    <span className="code-keyword">import</span> <span className="code-variable">sys</span>
                    <br /><span className="code-keyword">from</span> <span className="code-variable">crawler</span> <span className="code-keyword">import</span> <span className="code-class">AITimesCrawler</span>
                    <br /><span className="code-keyword">from</span> <span className="code-variable">db_manager</span> <span className="code-keyword">import</span> <span className="code-class">PostgresDBManager</span>
                    <br /><span className="code-keyword">from</span> <span className="code-variable">blog_writer</span> <span className="code-keyword">import</span> <span className="code-class">BlogWriter</span>
                    <br />
                    <br /><span className="code-keyword">if</span> <span className="code-variable">__name__</span> == <span className="code-string">"__main__"</span>:
                    <br />    <span className="code-variable">mode</span> = <span className="code-variable">sys</span>.<span className="code-property">argv</span>[1]
                    <br />
                    <br />    <span className="code-keyword">if</span> <span className="code-variable">mode</span> == <span className="code-string">"crawl"</span>:
                    <br />        <span className="code-comment"># 크롤링 모드: AI 뉴스 수집 및 DB 저장</span>
                    <br />        <span className="code-variable">crawler</span> = <span className="code-class">AITimesCrawler</span>()
                    <br />        <span className="code-variable">db</span> = <span className="code-class">PostgresDBManager</span>()
                    <br />        <span className="code-variable">df_final</span> = <span className="code-variable">crawler</span>.<span className="code-function">crawl</span>()
                    <br />        <span className="code-comment"># 기업별 기사 저장 로직 (중략)</span>
                    <br />
                    <br />    <span className="code-keyword">elif</span> <span className="code-variable">mode</span> == <span className="code-string">"blog"</span>:
                    <br />        <span className="code-keyword">if</span> <span className="code-variable">sys</span>.<span className="code-property">argv</span>[2] == <span className="code-string">"all"</span>:
                    <br />            <span className="code-comment"># 모든 기업 블로그 생성</span>
                    <br />            <span className="code-variable">companies</span> = <span className="code-function">get_all_companies_from_db</span>()
                    <br />        <span className="code-keyword">else</span>:
                    <br />            <span className="code-comment"># 선택된 기업 블로그 생성</span>
                    <br />            <span className="code-variable">companies</span> = <span className="code-variable">sys</span>.<span className="code-property">argv</span>[2:]
                    <br />
                    <br />        <span className="code-variable">writer</span> = <span className="code-class">BlogWriter</span>()
                    <br />
                    <br />        <span className="code-keyword">for</span> <span className="code-variable">company</span> <span className="code-keyword">in</span> <span className="code-variable">companies</span>:
                    <br />            <span className="code-variable">articles</span> = <span className="code-variable">writer</span>.<span className="code-function">fetch_recent_articles</span>(<span className="code-variable">company</span>)
                    <br />            <span className="code-variable">blog_text</span> = <span className="code-variable">writer</span>.<span className="code-function">generate_blog_post</span>(<span className="code-variable">company</span>, <span className="code-variable">articles</span>)
                    <br />            <span className="code-variable">writer</span>.<span className="code-function">save_to_markdown</span>(<span className="code-variable">company</span>, <span className="code-variable">blog_text</span>)
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