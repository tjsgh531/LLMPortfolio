import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Rss } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "이름은 2글자 이상이어야 합니다." }),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  subject: z.string().min(5, { message: "제목은 5글자 이상이어야 합니다." }),
  message: z.string().min(10, { message: "메시지는 10글자 이상이어야 합니다." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const SERVICE_ID = "service_nb3bybj";
const TEMPLATE_ID = "template_8jf9fr2";
const PUBLIC_KEY = "QHrb4ot1yO5nT_UYj";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: "메시지가 전송되었습니다",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "메시지 전송 실패",
        description: "오류가 발생했습니다. 나중에 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-500" />,
      title: "이메일",
      content: "tjsgh5768@gmail.com",
      link: "mailto:contact@example.com"
    },
    {
      icon: <MapPin className="text-primary-500" />,
      title: "위치",
      content: "양산, 대한민국",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/tjsgh531", label: "GitHub" },
    { icon: <Rss size={20} />, href: "https://developerahjosea.tistory.com/", label: "Blog" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl text-primary-900 text-center mb-6">연락처</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          관심이 있으시거나 궁금한 점이 있으시면 언제든지 연락해 주세요.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-primary-50 h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary-900">연락처 정보</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mt-1 mr-4">{item.icon}</div>
                        <div>
                          <div className="font-medium text-gray-800 mb-1">{item.title}</div>
                          {item.link ? (
                            <a href={item.link} className="text-primary-500 hover:underline">
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="font-medium text-gray-800 mb-3">소셜 미디어</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="text-primary-500 hover:text-primary-700 transition-colors"
                          aria-label={link.label}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-md h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary-900">메시지 보내기</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이름</FormLabel>
                            <FormControl><Input placeholder="홍길동" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이메일</FormLabel>
                            <FormControl><Input type="email" placeholder="example@email.com" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>제목</FormLabel>
                            <FormControl><Input placeholder="메시지 제목" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>메시지</FormLabel>
                            <FormControl>
                              <Textarea placeholder="메시지 내용을 입력해주세요" className="resize-none min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 mt-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "전송 중..." : "메시지 보내기"}
                      </Button>

                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
