import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GraduationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Class of 2024 Graduation</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            Celebrating the achievements of our youngest scholars as they move forward in their educational journey.
          </p>
        </div>
      </section>

      {/* Graduation Gallery */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Graduation Highlights</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Our 2024 graduation ceremony was a joyous celebration of our students' hard work and achievements.
            </p>
          </div>

          <Tabs defaultValue="ceremony" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="ceremony">Ceremony</TabsTrigger>
              <TabsTrigger value="graduates">Our Graduates</TabsTrigger>
            </TabsList>
            <TabsContent value="ceremony">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194741.jpg-39SkZWuazxmdAC7yfgYiw7WoYm20FR.jpeg"
                        alt="Graduation ceremony"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">Graduation Day</h3>
                      <p className="text-sm text-gray-600">Our graduates celebrating their special day</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194723.jpg-fgMo3zuAnLOMOxrL8XDvq2alJltmYi.jpeg"
                        alt="Graduation celebration"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">Celebration</h3>
                      <p className="text-sm text-gray-600">Students gathered for the graduation celebration</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194793.jpg-raUtA718JEaxxzei0zTQVtYEiAPN5E.jpeg"
                        alt="Graduation event"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">Graduation Event</h3>
                      <p className="text-sm text-gray-600">The festive setup for our graduation ceremony</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="graduates">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194652.jpg-2ph2tIFd9IRWPQ7nWurlQk3XuNxDiY.jpeg"
                        alt="Graduates"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">Our Proud Graduates</h3>
                      <p className="text-sm text-gray-600">Class of 2024 in their graduation attire</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194672.jpg-V5pSzwJviqpZAW8GDdzNDfUlplrMqd.jpeg"
                        alt="Graduates"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">Graduation Day</h3>
                      <p className="text-sm text-gray-600">Our youngest scholars celebrating their achievement</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Graduation Message */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Message from the Principal</h2>
              <div className="prose max-w-none">
                <p className="mb-4">Dear Parents, Guardians, and Friends of Maryland Gifts English Medium School,</p>
                <p className="mb-4">
                  It is with great pride and joy that we celebrate the graduation of our Class of 2024. These young
                  scholars have shown remarkable growth, resilience, and enthusiasm for learning during their time with
                  us.
                </p>
                <p className="mb-4">
                  As they move forward in their educational journey, we are confident that the foundation they have
                  received at Maryland Gifts will serve them well. They have not only gained academic knowledge but also
                  developed important social skills, creativity, and a love for learning that will benefit them
                  throughout their lives.
                </p>
                <p className="mb-4">
                  We thank you for entrusting your children to our care and for your continued support of our school
                  community. Together, we have nurtured these young minds and prepared them for the next exciting
                  chapter in their education.
                </p>
                <p className="mb-4">
                  Congratulations to all our graduates! We are immensely proud of you and look forward to hearing about
                  your future achievements.
                </p>
                <p className="font-medium">
                  Warm regards,
                  <br />
                  The Principal
                  <br />
                  Maryland Gifts English Medium School
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

