import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Our School</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            Learn about Maryland Gifts English Medium School's mission, vision, and values.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy-600 mb-2">Mission</h3>
                  <p className="text-gray-600">
                    To provide quality education in a nurturing environment that fosters academic excellence,
                    creativity, and character development, preparing students to become responsible global citizens.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-600 mb-2">Vision</h3>
                  <p className="text-gray-600">
                    To be a leading educational institution that empowers students with knowledge, skills, and values
                    necessary for lifelong learning and success in an ever-changing world.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-600 mb-2">Core Values</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Excellence in education</li>
                    <li>Respect for diversity</li>
                    <li>Integrity and character</li>
                    <li>Creativity and innovation</li>
                    <li>Community and collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/students/std3.jpg"
                alt="Students of Maryland Gifts School"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 bg-gray-50 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our History</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="prose max-w-none mx-auto">
            <p className="mb-4">
              Maryland Gifts English Medium School was established with a vision to provide quality education to
              children in the Thuathe Sehlabeng area. Since our founding, we have been committed to nurturing young
              minds and helping them develop into well-rounded individuals.
            </p>
            <p className="mb-4">
              Our school began as a small preschool and has grown over the years to include primary education, serving
              the educational needs of our community. Throughout our history, we have maintained a focus on academic
              excellence while also emphasizing character development and life skills.
            </p>
            <p>
              Today, Maryland Gifts English Medium School stands as a beacon of quality education in the region, with
              dedicated teachers, supportive staff, and a vibrant community of learners. We continue to build on our
              rich history as we prepare our students for the challenges and opportunities of the future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated educators and staff who make Maryland Gifts a special place for learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
                <h3 className="text-lg font-semibold">Principal</h3>
                <p className="text-sm text-gray-600 mt-1">Leading our school with vision and dedication</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
                <h3 className="text-lg font-semibold">Head Teacher</h3>
                <p className="text-sm text-gray-600 mt-1">Guiding our academic excellence</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
                <h3 className="text-lg font-semibold">Administrative Staff</h3>
                <p className="text-sm text-gray-600 mt-1">Supporting our school operations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

