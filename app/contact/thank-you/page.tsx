import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">감사합니다!</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        문의사항이 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.
      </p>
      <Button asChild>
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </div>
  )
}
