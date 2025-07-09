import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Photo Gallery</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            Explore moments from school life at Maryland Gifts English Medium School.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="students" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="students">Our Students</TabsTrigger>
              <TabsTrigger value="graduation">Graduation</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            <TabsContent value="students">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std1.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std2.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std3.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std4.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std5.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std6.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std7.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std8.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std9.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std10.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std11.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std12.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std13.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/students/std14.jpg"
                    alt="Students in uniform"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
              </div>
            </TabsContent>

            <TabsContent value="graduation">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/grad2024/grad1.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/grad2024/grad2.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/grad2024/grad3.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/grad2024/grad4.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/grad2024/grad5.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/grad2024/grad6.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/grad2024/grad7.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/grad2024/grad8.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/grad2024/grad9.jpg"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743969194793.jpg-raUtA718JEaxxzei0zTQVtYEiAPN5E.jpeg"
                    alt="School event"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

