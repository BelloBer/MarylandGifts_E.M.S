"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export default function EnrollPage() {
  const [formStep, setFormStep] = useState(0)
  const [date, setDate] = useState<Date>()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    gender: "",
    dateOfBirth: "",
    gradeLevel: "",
    parentName: "",
    relationship: "",
    email: "",
    phone: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalInfo: "",
    previousSchool: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleDateChange = (date: Date | undefined) => {
    setDate(date)
    if (date) {
      setFormData((prev) => ({ ...prev, dateOfBirth: format(date, "PPP") }))
    }
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formData)
    setFormSubmitted(true)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Student Registration</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
            Join our school community and give your child the foundation for a successful future.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {formSubmitted ? (
            <Card className="border-green-500 shadow-lg">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <div className="flex items-center justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-center text-2xl text-green-700">
                  Registration Submitted Successfully!
                </CardTitle>
                <CardDescription className="text-center text-green-600">
                  Thank you for registering with Maryland Gifts English Medium School.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  We have received your registration information and will contact you shortly to complete the enrollment
                  process.
                </p>
                <p className="text-gray-700 mb-6">
                  If you have any questions, please don't hesitate to contact our admissions office at +266 62830840.
                </p>
                <div className="flex justify-center">
                  <Button
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormStep(0)
                      setFormData({
                        studentFirstName: "",
                        studentLastName: "",
                        gender: "",
                        dateOfBirth: "",
                        gradeLevel: "",
                        parentName: "",
                        relationship: "",
                        email: "",
                        phone: "",
                        address: "",
                        emergencyContact: "",
                        emergencyPhone: "",
                        medicalInfo: "",
                        previousSchool: "",
                        agreeTerms: false,
                      })
                    }}
                    className="bg-navy-600 hover:bg-navy-700"
                  >
                    Register Another Student
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-lg border-t-4 border-t-navy-600">
              <CardHeader>
                <CardTitle>Student Registration Form</CardTitle>
                <CardDescription>
                  Please fill out all required information to register your child at Maryland Gifts English Medium
                  School.
                </CardDescription>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                  <div
                    className="bg-navy-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${(formStep + 1) * 33.33}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Step {formStep + 1} of 3</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {formStep === 0 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Student Information</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="studentFirstName">
                            First Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="studentFirstName"
                            name="studentFirstName"
                            value={formData.studentFirstName}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="studentLastName">
                            Last Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="studentLastName"
                            name="studentLastName"
                            value={formData.studentLastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>
                          Gender <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup
                          value={formData.gender}
                          onValueChange={(value) => handleSelectChange("gender", value)}
                          className="flex space-x-4"
                          required
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male">Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female">Female</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label>
                          Date of Birth <span className="text-red-500">*</span>
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={handleDateChange} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gradeLevel">
                          Grade Level <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.gradeLevel}
                          onValueChange={(value) => handleSelectChange("gradeLevel", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="preschool-3">Preschool (Age 3)</SelectItem>
                            <SelectItem value="preschool-4">Preschool (Age 4)</SelectItem>
                            <SelectItem value="preschool-5">Preschool (Age 5)</SelectItem>
                            <SelectItem value="grade-1">Grade 1</SelectItem>
                            <SelectItem value="grade-2">Grade 2</SelectItem>
                            <SelectItem value="grade-3">Grade 3</SelectItem>
                            <SelectItem value="grade-4">Grade 4</SelectItem>
                            <SelectItem value="grade-5">Grade 5</SelectItem>
                            <SelectItem value="grade-6">Grade 6</SelectItem>
                            <SelectItem value="grade-7">Grade 7</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="previousSchool">Previous School (if applicable)</Label>
                        <Input
                          id="previousSchool"
                          name="previousSchool"
                          value={formData.previousSchool}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}

                  {formStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Parent/Guardian Information</h3>

                      <div className="space-y-2">
                        <Label htmlFor="parentName">
                          Parent/Guardian Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="relationship">
                          Relationship to Student <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.relationship}
                          onValueChange={(value) => handleSelectChange("relationship", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="guardian">Legal Guardian</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            Phone Number <span className="text-red-500">*</span>
                          </Label>
                          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">
                          Home Address <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact">
                            Emergency Contact Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="emergencyContact"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="emergencyPhone">
                            Emergency Contact Phone <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="emergencyPhone"
                            name="emergencyPhone"
                            value={formData.emergencyPhone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Additional Information</h3>

                      <div className="space-y-2">
                        <Label htmlFor="medicalInfo">Medical Information (allergies, conditions, etc.)</Label>
                        <Textarea
                          id="medicalInfo"
                          name="medicalInfo"
                          value={formData.medicalInfo}
                          onChange={handleChange}
                          placeholder="Please list any allergies, medical conditions, or special needs"
                        />
                      </div>

                      <div className="space-y-2 pt-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="agreeTerms"
                            checked={formData.agreeTerms}
                            onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                            required
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="agreeTerms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to the terms and conditions <span className="text-red-500">*</span>
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              By submitting this form, I confirm that all information provided is accurate and complete.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                {formStep > 0 && (
                  <Button variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                )}
                {formStep === 0 && <div></div>}

                {formStep < 2 ? (
                  <Button onClick={nextStep} className="bg-navy-600 hover:bg-navy-700">
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-navy-600 hover:bg-navy-700"
                    disabled={!formData.agreeTerms}
                  >
                    Submit Registration
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Registration Process</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-navy-600 text-white font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Complete Online Registration</h3>
                    <p className="mt-1 text-gray-600">
                      Fill out the registration form with all required information about your child and family.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-navy-600 text-white font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Document Submission</h3>
                    <p className="mt-1 text-gray-600">
                      Submit required documents including birth certificate, immunization records, and previous school
                      records (if applicable).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-navy-600 text-white font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Assessment & Interview</h3>
                    <p className="mt-1 text-gray-600">
                      Schedule an assessment for your child and a brief interview with parents/guardians.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-navy-600 text-white font-bold">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Confirmation & Payment</h3>
                    <p className="mt-1 text-gray-600">
                      Upon acceptance, complete the enrollment by paying the registration fee and first term's tuition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Required Documents</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Child's birth certificate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Immunization records</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Previous school records (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Parent/Guardian ID</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Proof of residence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-navy-600 mr-2 mt-0.5" />
                      <span>Recent passport-sized photographs (2)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Registration Fees</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Application Fee</span>
                        <span>M100</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Registration Fee</span>
                        <span>M500</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Uniform Fee</span>
                        <span>M350</span>
                      </div>
                      <div className="flex justify-between items-center font-semibold text-navy-600">
                        <span>Total Initial Payment</span>
                        <span>M950</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

