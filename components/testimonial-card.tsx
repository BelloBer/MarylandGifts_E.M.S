import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  content: string
  name: string
  role: string
  rating: number
}

export default function TestimonialCard({ content, name, role, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-white shadow-lg h-full">
      <CardContent className="p-6">
        <div className="flex text-gold-500 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 mb-6 italic">"{content}"</p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

