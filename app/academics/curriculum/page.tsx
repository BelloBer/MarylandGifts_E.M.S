import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, BookOpen, Clock, Calendar } from "lucide-react"

export default function CurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-600 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/8471803/pexels-photo-8471803.jpeg"
            alt="Curriculum background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Curriculum</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            Discover our comprehensive, child-centered curriculum designed to inspire a love of learning.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Curriculum Overview</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed to provide a well-rounded education that develops the whole child -
              intellectually, socially, emotionally, and physically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/8471970/pexels-photo-8471970.jpeg"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Educational Philosophy</h3>
              <p className="text-gray-600 mb-6">
                At Maryland Gifts English Medium School, we believe that every child has unique talents and abilities.
                Our curriculum is designed to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Foster a love of learning through engaging, hands-on activities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Develop critical thinking and problem-solving skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Build strong foundations in literacy and numeracy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Encourage creativity and self-expression</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Promote social skills and emotional intelligence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                  <span>Instill values of respect, responsibility, and community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Level Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Grade Level Curriculum</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
          </div>

          <Tabs defaultValue="preschool" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="preschool">Preschool</TabsTrigger>
              <TabsTrigger value="primary">Primary</TabsTrigger>
            </TabsList>

            <TabsContent value="preschool">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-600 mb-4">Preschool Curriculum (Ages 3-5)</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> Language & Literacy
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Alphabet recognition and phonics</li>
                        <li>• Vocabulary development</li>
                        <li>• Storytelling and comprehension</li>
                        <li>• Pre-writing skills</li>
                        <li>• Introduction to reading</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> Mathematics
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Number recognition and counting</li>
                        <li>• Basic shapes and colors</li>
                        <li>• Sorting and classifying</li>
                        <li>• Patterns and sequences</li>
                        <li>• Introduction to measurements</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> Science & Discovery
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Nature exploration</li>
                        <li>• Simple experiments</li>
                        <li>• Plants and animals</li>
                        <li>• Weather and seasons</li>
                        <li>• Five senses</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> Social & Emotional Development
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Self-awareness and confidence</li>
                        <li>• Sharing and cooperation</li>
                        <li>• Emotional regulation</li>
                        <li>• Friendship skills</li>
                        <li>• Respect for others</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold mb-3">Sample Daily Schedule</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">8:00 - 8:30 AM</span>
                          <p className="text-sm text-gray-600">Arrival and Morning Activities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">8:30 - 9:00 AM</span>
                          <p className="text-sm text-gray-600">Circle Time</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">9:00 - 10:00 AM</span>
                          <p className="text-sm text-gray-600">Language & Literacy</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">10:00 - 10:30 AM</span>
                          <p className="text-sm text-gray-600">Snack Time</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">10:30 - 11:30 AM</span>
                          <p className="text-sm text-gray-600">Mathematics & Science</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">11:30 - 12:30 PM</span>
                          <p className="text-sm text-gray-600">Outdoor Play</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">12:30 - 1:00 PM</span>
                          <p className="text-sm text-gray-600">Lunch</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">1:00 - 2:00 PM</span>
                          <p className="text-sm text-gray-600">Rest/Quiet Time</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">2:00 - 3:00 PM</span>
                          <p className="text-sm text-gray-600">Art & Creative Activities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">3:00 - 3:30 PM</span>
                          <p className="text-sm text-gray-600">Story Time & Dismissal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="primary">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-600 mb-4">Primary Curriculum (Grades 1-7)</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> English Language Arts
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Reading comprehension</li>
                        <li>• Writing skills and composition</li>
                        <li>• Grammar and vocabulary</li>
                        <li>• Speaking and listening</li>
                        <li>• Literature appreciation</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> Mathematics
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Number operations</li>
                        <li>• Geometry and measurement</li>
                        <li>• Data analysis and probability</li>
                        <li>• Problem-solving strategies</li>
                        <li>• Mathematical reasoning</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> Science
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Life sciences</li>
                        <li>• Earth and space sciences</li>
                        <li>• Physical sciences</li>
                        <li>• Scientific inquiry and experimentation</li>
                        <li>• Environmental awareness</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> Social Studies
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• History and geography</li>
                        <li>• Cultures and communities</li>
                        <li>• Citizenship and governance</li>
                        <li>• Economic concepts</li>
                        <li>• Global awareness</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> Arts & Physical Education
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Visual arts and crafts</li>
                        <li>• Music and movement</li>
                        <li>• Physical fitness</li>
                        <li>• Sports and team games</li>
                        <li>• Health and wellness</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-maroon-600" /> Character Education
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Values and ethics</li>
                        <li>• Leadership skills</li>
                        <li>• Community service</li>
                        <li>• Conflict resolution</li>
                        <li>• Personal responsibility</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold mb-3">Sample Daily Schedule</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">7:30 - 8:00 AM</span>
                          <p className="text-sm text-gray-600">Arrival and Morning Assembly</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">8:00 - 9:30 AM</span>
                          <p className="text-sm text-gray-600">English Language Arts</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">9:30 - 10:00 AM</span>
                          <p className="text-sm text-gray-600">Break</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">10:00 - 11:30 AM</span>
                          <p className="text-sm text-gray-600">Mathematics</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">11:30 - 12:30 PM</span>
                          <p className="text-sm text-gray-600">Science/Social Studies</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">12:30 - 1:30 PM</span>
                          <p className="text-sm text-gray-600">Lunch and Recreation</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">1:30 - 2:30 PM</span>
                          <p className="text-sm text-gray-600">Arts/Physical Education</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-navy-600 mt-0.5" />
                        <div>
                          <span className="font-medium">2:30 - 3:30 PM</span>
                          <p className="text-sm text-gray-600">Enrichment Activities/Homework Time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Academic Calendar 2024-2025</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Important dates for the upcoming academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-maroon-600" /> Term 1
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">First Day of School</span>
                    <span className="font-medium">January 15, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Parent-Teacher Meeting</span>
                    <span className="font-medium">February 20, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Mid-Term Break</span>
                    <span className="font-medium">March 1-5, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">End of Term Exams</span>
                    <span className="font-medium">April 5-9, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Term 1 Ends</span>
                    <span className="font-medium">April 14, 2024</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-maroon-600" /> Term 2
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Term 2 Begins</span>
                    <span className="font-medium">May 3, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sports Day</span>
                    <span className="font-medium">May 20, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Mid-Term Break</span>
                    <span className="font-medium">June 18-22, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">End of Term Exams</span>
                    <span className="font-medium">August 1-5, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Term 2 Ends</span>
                    <span className="font-medium">August 12, 2024</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-maroon-600" /> Term 3
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Term 3 Begins</span>
                    <span className="font-medium">September 2, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Cultural Day</span>
                    <span className="font-medium">October 15, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Mid-Term Break</span>
                    <span className="font-medium">October 21-25, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Final Exams</span>
                    <span className="font-medium">November 18-22, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Graduation Ceremony</span>
                    <span className="font-medium">December 5, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Term 3 Ends</span>
                    <span className="font-medium">December 6, 2024</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment & Reporting */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Assessment & Reporting</h2>
            <div className="mt-2 h-1 w-24 bg-maroon-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Assessment Methods</h3>
                <p className="text-gray-600 mb-6">
                  We use a variety of assessment methods to evaluate student progress and achievement:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Continuous Assessment</span>
                      <p className="text-sm text-gray-600">Regular classwork, homework, and participation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Formative Assessments</span>
                      <p className="text-sm text-gray-600">Quizzes, projects, and presentations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Summative Assessments</span>
                      <p className="text-sm text-gray-600">End-of-unit tests and term examinations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Performance-Based Assessment</span>
                      <p className="text-sm text-gray-600">Practical demonstrations of skills and knowledge</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Portfolio Assessment</span>
                      <p className="text-sm text-gray-600">Collection of student work showing progress over time</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Reporting & Parent Communication</h3>
                <p className="text-gray-600 mb-6">
                  We believe in maintaining open communication with parents about their child's progress:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Progress Reports</span>
                      <p className="text-sm text-gray-600">Mid-term progress reports sent home</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Report Cards</span>
                      <p className="text-sm text-gray-600">Comprehensive end-of-term reports</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Parent-Teacher Conferences</span>
                      <p className="text-sm text-gray-600">Scheduled meetings each term</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Communication Books</span>
                      <p className="text-sm text-gray-600">Daily/weekly notes between teachers and parents</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Special Meetings</span>
                      <p className="text-sm text-gray-600">Available upon request to address specific concerns</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

