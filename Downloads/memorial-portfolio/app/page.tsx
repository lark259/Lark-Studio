import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  라크네 사진관
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  소중한 추억을 담은 고품질 사진 서비스를 제공합니다. 정성과 존중으로 만들어진 작품으로 소중한 순간을
                  기억하세요.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/portfolio">포트폴리오 보기</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">문의하기</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image src="/images/logo.png" width={300} height={300} alt="라크네 사진관 로고" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">서비스 미리보기</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                라크네 사진관에서 제공하는 다양한 서비스를 소개합니다.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                  className="h-5 w-5 text-primary"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">프로필 촬영</h3>
              <p className="mb-4 text-muted-foreground">전문 스튜디오에서 품격 있는 프로필 사진을 촬영해 드립니다.</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/services">자세히 보기</Link>
              </Button>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                  className="h-5 w-5 text-primary"
                >
                  <path d="M21.64 3.64a1.35 1.35 0 0 0-1.94 0L1.95 21.35a1.35 1.35 0 0 0 0 1.94 1.35 1.35 0 0 0 1.94 0L21.64 5.58a1.35 1.35 0 0 0 0-1.94z" />
                  <path d="m14 7 4.5 4.5" />
                  <path d="m18.5 11.5-1 1" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">사진 복원</h3>
              <p className="mb-4 text-muted-foreground">오래된 사진을 복원하여 선명하고 깨끗한 사진으로 제작합니다.</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/services">자세히 보기</Link>
              </Button>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
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
                  className="h-5 w-5 text-primary"
                >
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">액자 제작</h3>
              <p className="mb-4 text-muted-foreground">고급 액자와 함께 사진을 제작하여 품격을 더합니다.</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/services">자세히 보기</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="gap-1">
              <Link href="/services">
                모든 서비스 보기
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">포트폴리오 둘러보기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/portrait1.jpeg"
                width={400}
                height={500}
                alt="영정 사진 포트폴리오 1"
                className="aspect-[3/4] object-cover transition-all hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/portrait2.jpeg"
                width={400}
                height={500}
                alt="영정 사진 포트폴리오 2"
                className="aspect-[3/4] object-cover transition-all hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/portrait3.jpeg"
                width={400}
                height={500}
                alt="영정 사진 포트폴리오 3"
                className="aspect-[3/4] object-cover transition-all hover:scale-105"
              />
            </div>
          </div>
          <Button asChild>
            <Link href="/portfolio">
              포트폴리오 더 보기
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
