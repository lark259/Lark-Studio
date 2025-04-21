import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">서비스</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              라크네 사진관에서 제공하는 다양한 서비스를 소개합니다.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-24">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-6">일반 포토샵 작업</h2>
            <div className="mb-6 max-w-3xl">
              <Image
                src="/images/price-list-2.png"
                width={800}
                height={1000}
                alt="일반 포토샵 작업 가격표"
                className="rounded-lg"
              />
            </div>
            <Button asChild>
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-6">영정사진 및 액자 가격표</h2>
            <div className="mb-6 max-w-3xl">
              <Image
                src="/images/price-list-1.png"
                width={800}
                height={1000}
                alt="영정사진 및 액자 가격표"
                className="rounded-lg"
              />
            </div>
            <Button asChild>
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
