import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type EducationType = {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  tags: string[];
};

const Education: React.FC = () => {
  const educations: EducationType[] = [
    {
      id: 1,
      title: "컴퓨터 공학 학사",
      institution: "서울대학교",
      period: "2019 - 2023",
      description: "컴퓨터 과학 및 인공지능 분야에 중점을 둔 학사 과정을 이수했습니다. 데이터 구조, 알고리즘, 머신러닝, 자연어 처리 등의 과목을 수강했습니다.",
      tags: ["자연어 처리", "머신러닝", "소프트웨어 엔지니어링"]
    },
    {
      id: 2,
      title: "AI 개발자 부트캠프",
      institution: "네이버 부스트캠프",
      period: "2023",
      description: "집중적인 AI 개발자 양성 프로그램을 통해 실무 중심의 AI 애플리케이션 개발 경험을 쌓았습니다. LLM을 활용한 실제 프로젝트를 팀 단위로 진행했습니다.",
      tags: ["LLM 활용", "팀 프로젝트", "실무 경험"]
    },
    {
      id: 3,
      title: "Coursera 자연어 처리 전문화 과정",
      institution: "DeepLearning.AI",
      period: "2022",
      description: "Andrew Ng 교수의 자연어 처리 전문화 과정을 이수하며 NLP의 기초부터 최신 Transformer 기반 모델까지 학습했습니다.",
      tags: ["NLP", "Transformer", "온라인 학습"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl text-primary-900 text-center mb-6">교육 & 자격</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          제 학습 여정과 전문 분야를 발전시키기 위해 노력한 과정입니다.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="font-heading font-semibold text-xl text-primary-900">{education.title}</h3>
                      <div className="text-gray-500 mt-1 md:mt-0">{education.period}</div>
                    </div>
                    <div className="text-primary-500 font-medium">{education.institution}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{education.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {education.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-primary-100 text-primary-700 hover:bg-primary-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
