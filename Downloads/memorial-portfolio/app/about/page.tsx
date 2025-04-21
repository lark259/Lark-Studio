import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=500&width=400&text=About"
              width={500}
              height={400}
              alt="라크네 사진관 소개"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">소개</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                안녕하세요, 라크네 사진관입니다. 저희는 15년 이상의 경험을 바탕으로 고객님의 소중한 순간을 가장 품격
                있고 아름답게 담아내는 작업을 하고 있습니다.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>전문 사진작가의 세심한 작업</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>고품질 인화 및 액자 제공</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>디지털 복원 및 보정 서비스</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>빠른 제작 및 배송</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">우리의 철학</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/40 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">품질</h3>
              <p>최고 품질의 장비와 재료를 사용하여 고객님께 최상의 결과물을 제공합니다.</p>
            </div>
            <div className="bg-muted/40 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">정성</h3>
              <p>모든 작업에 정성을 다하며, 고객님의 요구사항을 세심하게 반영합니다.</p>
            </div>
            <div className="bg-muted/40 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">신뢰</h3>
              <p>15년 이상의 경험을 바탕으로 고객님께 신뢰할 수 있는 서비스를 제공합니다.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/contact">문의하기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
