import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Academics</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            Discover our comprehensive curriculum designed to nurture young minds.
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Academic Programs</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive educational programs for preschool and primary level students.
            </p>
          </div>

          <Tabs defaultValue="preschool" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="preschool">Preschool</TabsTrigger>
              <TabsTrigger value="primary">Primary</TabsTrigger>
            </TabsList>
            <TabsContent value="preschool">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/students/std9.jpg"
                    alt="Preschool students"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-gray-900">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Preschool Program</h3>
                  <p className="text-gray-600 mb-6">
                    Our preschool program provides a nurturing environment where young children can develop foundational
                    skills through play-based learning and structured activities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Early literacy and numeracy skills</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Social and emotional development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Creative arts and expression</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Physical development and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Introduction to English language</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="primary">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 text-gray-900">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Program</h3>
                  <p className="text-gray-600 mb-6">
                    Our primary education program builds on the foundation established in preschool, offering a
                    comprehensive curriculum that prepares students for future academic success.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>English language and literacy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Science and environmental studies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Social studies and cultural awareness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Physical education and health</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Arts and music</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
                  <Image
                    src="/images/students/std3.jpg"
                    alt="Primary students"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Teaching Approach</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-md bg-navy-600 text-white flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Child-Centered Learning</h3>
                <p className="text-gray-600">
                  We recognize that each child is unique and has different learning styles. Our approach focuses on
                  understanding and addressing individual needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-md bg-maroon-600 text-white flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
                <p className="text-gray-600">
                  We believe in nurturing the whole child - intellectually, socially, emotionally, and physically - to
                  help them become well-rounded individuals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-md bg-gold-500 text-white flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="text-gray-600">
                  Our classrooms are dynamic environments where students actively participate in the learning process
                  through hands-on activities and collaborative projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      {/*

                  ############# FACILITIES TO BE ADDED LATER UPON RECEIPT OF FACILITY IMAGES #########
                  
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Facilities</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              We provide a safe and stimulating environment for our students to learn and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-0">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Classroom Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Modern Classrooms</h3>
                  <p className="text-gray-600">
                    Bright, spacious classrooms equipped with learning materials to support our curriculum.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Playground Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Outdoor Play Areas</h3>
                  <p className="text-gray-600">
                    Safe outdoor spaces where children can play, explore, and develop physical skills.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Library Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Library</h3>
                  <p className="text-gray-600">
                    A collection of age-appropriate books to foster a love of reading and learning.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}
    </div>
  )
}

