import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">포트폴리오</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">정성을 다해 제작한 작품들을 소개합니다.</p>
          </div>
        </div>

        <div className="mt-12 space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">프로필 사진</h2>
            <div className="mx-auto grid items-center gap-6 lg:grid-cols-3 lg:gap-12">
              {[1, 2, 3].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Profile ${item}`}
                    width={300}
                    height={400}
                    alt={`프로필 사진 ${item}`}
                    className="aspect-[3/4] object-cover transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">영정 사진</h2>
            <div className="mx-auto grid items-center gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/portrait1.jpeg"
                  width={300}
                  height={400}
                  alt="영정 사진 1"
                  className="aspect-[3/4] object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/portrait2.jpeg"
                  width={300}
                  height={400}
                  alt="영정 사진 2"
                  className="aspect-[3/4] object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/portrait3.jpeg"
                  width={300}
                  height={400}
                  alt="영정 사진 3"
                  className="aspect-[3/4] object-cover transition-all hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="gap-1">
            <Link href="/contact">
              문의하기
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
