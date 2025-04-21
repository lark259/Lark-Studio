"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">문의하기</h1>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
              궁금한 점이 있으시면 언제든지 문의해 주세요. 최대한 빠르게 답변 드리겠습니다.
            </p>
          </div>

          <div className="bg-background rounded-lg border p-8 shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">전화번호</h3>
                  <p className="text-muted-foreground">010-8646-3081</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">이메일</h3>
                  <p className="text-muted-foreground">sofu234@naver.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">주소</h3>
                  <p className="text-muted-foreground">경기도 수원시 장안구 율전동182-13 102호</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link href="/">홈으로 돌아가기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
