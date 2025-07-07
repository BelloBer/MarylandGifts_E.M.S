import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

interface NewsCardProps {
  imageUrl: string
  date: string
  title: string
  content: string
  link: string
}

export default function NewsCard({ imageUrl, date, title, content, link }: NewsCardProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative h-48">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-2">
            <Calendar className="h-4 w-4 mr-2 text-maroon-600" />
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{content}</p>
          <Link href={link} className="text-navy-600 font-medium flex items-center">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

