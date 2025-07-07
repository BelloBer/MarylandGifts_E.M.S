import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BookOpen, Users, Award, ArrowRight, Calendar, GraduationCap, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-600 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg"
            alt="School background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Nurturing Young Minds for a Brighter Future
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Maryland Gifts English Medium School provides quality education for preschool and primary level students
              in a nurturing environment.
            </p>
            <div className="mt-10 flex gap-x-6">
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-800">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/enroll">Enroll Now</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194593.jpg-sbVgurQIKEp6CI4wmj7K3plh7XfsxZ.jpeg"
                alt="Students of Maryland Gifts School"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="bg-maroon-600 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">
            <span className="font-bold">Now Enrolling:</span> Registration for the 2024-2025 academic year is now open!
            <Link href="/enroll" className="underline ml-2 font-semibold hover:text-gold-400">
              Apply Today
            </Link>
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to Maryland Gifts</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              We are committed to providing a supportive and enriching environment where children can grow academically,
              socially, and emotionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className="border-t-4 border-t-navy-600">
              <CardContent className="pt-6">
                <div className="mb-4 text-navy-600">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Education</h3>
                <p className="text-gray-600">
                  Comprehensive curriculum designed to develop critical thinking and creativity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-maroon-600">
              <CardContent className="pt-6">
                <div className="mb-4 text-maroon-600">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Experienced Teachers</h3>
                <p className="text-gray-600">
                  Dedicated educators committed to nurturing each child's unique potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-gold-500">
              <CardContent className="pt-6">
                <div className="mb-4 text-gold-500">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Safe Environment</h3>
                <p className="text-gray-600">Creating a secure and supportive atmosphere for optimal learning.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-gray-500">
              <CardContent className="pt-6">
                <div className="mb-4 text-gray-500">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Holistic Development</h3>
                <p className="text-gray-600">
                  Focus on academic excellence alongside character building and life skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              School Life at Maryland Gifts
            </h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194577.jpg-fWUDctZF0hS52J8NIOi4bQozIjLmIl.jpeg"
                  alt="Students in uniform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Our Students</h3>
                <p className="text-gray-600 mb-4">
                  Our students thrive in a supportive environment that encourages curiosity and growth.
                </p>
                <Link href="/gallery" className="text-navy-600 font-medium flex items-center">
                  View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194827.jpg-lunlzruCUJT371KnEMDyWb7vJD1bZB.jpeg"
                  alt="Students in uniform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
                <p className="text-gray-600 mb-4">
                  We provide a strong foundation in core subjects while nurturing creativity and critical thinking.
                </p>
                <Link href="/academics" className="text-navy-600 font-medium flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194652.jpg-2ph2tIFd9IRWPQ7nWurlQk3XuNxDiY.jpeg"
                  alt="Graduation ceremony"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">2024 Graduation</h3>
                <p className="text-gray-600 mb-4">Celebrating the achievements of our graduating class of 2024.</p>
                <Link href="/graduation" className="text-navy-600 font-medium flex items-center">
                  View Graduation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">News & Upcoming Events</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/8471982/pexels-photo-8471982.jpeg"
                    alt="School event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-maroon-600" />
                    <span className="text-sm text-gray-500">June 15, 2024</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">End of Year Concert</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for our annual end of year concert featuring performances by our talented students.
                  </p>
                  <Link href="#" className="text-navy-600 font-medium flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                    alt="School event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-maroon-600" />
                    <span className="text-sm text-gray-500">May 20, 2024</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Sports Day</h3>
                  <p className="text-gray-600 mb-4">
                    Our annual sports day will feature various athletic competitions and team activities.
                  </p>
                  <Link href="#" className="text-navy-600 font-medium flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/8471774/pexels-photo-8471774.jpeg"
                    alt="School event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-maroon-600" />
                    <span className="text-sm text-gray-500">April 10, 2024</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Parent-Teacher Conference</h3>
                  <p className="text-gray-600 mb-4">
                    Schedule a meeting with your child's teacher to discuss academic progress and development.
                  </p>
                  <Link href="#" className="text-navy-600 font-medium flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="border-navy-600 text-navy-600 hover:bg-navy-50">
              View All News & Events
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Parents Say</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Hear from our community of parents about their experience with Maryland Gifts English Medium School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex text-gold-500 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Maryland Gifts has been a wonderful school for my daughter. The teachers are caring and attentive,
                  and the curriculum is engaging. I've seen tremendous growth in her confidence and academic skills."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Sarah M.</h4>
                    <p className="text-sm text-gray-500">Parent of Grade 2 Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex text-gold-500 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The preschool program at Maryland Gifts provided an excellent foundation for my son. The teachers
                  created a nurturing environment where he developed a love for learning. I highly recommend this
                  school."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">David T.</h4>
                    <p className="text-sm text-gray-500">Parent of Preschool Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex text-gold-500 mb-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "What sets Maryland Gifts apart is their commitment to each child's individual growth. The small class
                  sizes ensure that my children receive personalized attention. We couldn't be happier with our choice."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Rebecca L.</h4>
                    <p className="text-sm text-gray-500">Parent of Multiple Students</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-maroon-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Our School Community</h2>
          <p className="text-lg leading-8 max-w-2xl mx-auto mb-8">
            Enroll your child at Maryland Gifts English Medium School and give them the foundation for a successful
            future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-maroon-600 hover:bg-gray-100">
              <Link href="/enroll">Enroll Now</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Take a Virtual Tour</h2>
              <p className="text-gray-600 mb-6">
                Explore our school facilities and get a glimpse of the learning environment we provide for our students.
                Our modern classrooms, play areas, and resources are designed to create an optimal learning experience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Bright, spacious classrooms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Safe outdoor play areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Library with age-appropriate books</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Computer lab with educational software</span>
                </li>
              </ul>
              <Button className="bg-navy-600 hover:bg-navy-700">
                <GraduationCap className="mr-2 h-4 w-4" /> Schedule a Visit
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/8471988/pexels-photo-8471988.jpeg"
                alt="School classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

