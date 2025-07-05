'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar as CalendarIcon, Clock, User, Mail, Phone, MessageSquare,
  CreditCard, Check, ArrowLeft, ArrowRight, Star, Shield, Zap
} from 'lucide-react'

const services = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Modern, responsive web applications using React, Next.js, and TypeScript',
    duration: '60 minutes',
    price: 150,
    icon: '💻',
    features: [
      'Project scope assessment',
      'Technology stack recommendation',
      'Timeline and budget estimation',
      'Best practices consultation'
    ]
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Development',
    description: 'Complete web application development from frontend to backend',
    duration: '90 minutes',
    price: 200,
    icon: '🚀',
    features: [
      'Full project architecture review',
      'Database design consultation',
      'API development strategy',
      'Deployment and DevOps guidance'
    ]
  },
  {
    id: 'uiux',
    name: 'UI/UX Consultation',
    description: 'User experience optimization and interface design review',
    duration: '45 minutes',
    price: 120,
    icon: '🎨',
    features: [
      'UX audit and recommendations',
      'Design system consultation',
      'Accessibility review',
      'User research guidance'
    ]
  },
  {
    id: 'mentoring',
    name: 'Technical Mentoring',
    description: 'One-on-one mentoring for developers and career guidance',
    duration: '60 minutes',
    price: 100,
    icon: '🎓',
    features: [
      'Career guidance',
      'Code review and feedback',
      'Technical skill development',
      'Interview preparation'
    ]
  }
]

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
]

const steps = [
  { id: 1, name: 'Service', description: 'Choose your consultation type' },
  { id: 2, name: 'Date & Time', description: 'Select your preferred slot' },
  { id: 3, name: 'Details', description: 'Provide project information' },
  { id: 4, name: 'Payment', description: 'Secure booking confirmation' }
]

export function BookingSystem() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    budget: '',
    urgency: 'normal',
    hearAbout: ''
  })

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Handle booking submission
    console.log('Booking submitted:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...bookingData
    })
    // In real app, integrate with payment processor and calendar API
  }

  return (
    <div className="section-padding bg-muted/30">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-hero gradient-text mb-6">
            Book a Consultation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a personalized consultation to discuss your project needs 
            and get expert guidance on your web development journey.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-px mx-4 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="bg-card rounded-2xl border p-8">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <ServiceSelection
                services={services}
                selectedService={selectedService}
                onSelectService={setSelectedService}
              />
            )}
            {currentStep === 2 && (
              <DateTimeSelection
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                timeSlots={timeSlots}
                onSelectDate={setSelectedDate}
                onSelectTime={setSelectedTime}
              />
            )}
            {currentStep === 3 && (
              <BookingDetails
                bookingData={bookingData}
                onUpdateData={setBookingData}
              />
            )}
            {currentStep === 4 && (
              <PaymentConfirmation
                service={selectedService}
                date={selectedDate}
                time={selectedTime}
                bookingData={bookingData}
                onSubmit={handleSubmit}
              />
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-8 border-t">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`btn-secondary flex items-center gap-2 ${
                currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div className="text-sm text-muted-foreground">
              Step {currentStep} of {steps.length}
            </div>

            <button
              onClick={currentStep === 4 ? handleSubmit : handleNext}
              disabled={
                (currentStep === 1 && !selectedService) ||
                (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                (currentStep === 3 && (!bookingData.name || !bookingData.email))
              }
              className="btn-primary flex items-center gap-2"
            >
              {currentStep === 4 ? 'Complete Booking' : 'Next'}
              {currentStep !== 4 && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceSelection({ services, selectedService, onSelectService }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Choose Your Service</h2>
        <p className="text-muted-foreground">
          Select the consultation type that best fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service: any) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -5 }}
            onClick={() => onSelectService(service)}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              selectedService?.id === service.id
                ? 'border-primary bg-primary/5 shadow-lg'
                : 'border-border hover:border-primary/50 hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{service.icon}</div>
              {selectedService?.id === service.id && (
                <Check className="w-6 h-6 text-primary" />
              )}
            </div>

            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>

            <div className="space-y-2 mb-4">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {service.duration}
              </div>
              <div className="text-2xl font-bold gradient-text">
                ${service.price}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function DateTimeSelection({ selectedDate, selectedTime, timeSlots, onSelectDate, onSelectTime }: any) {
  const today = new Date()
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
  
  // Generate available dates (next 30 days, excluding weekends)
  const availableDates: Date[] = []
  for (let i = 1; i <= 30; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    if (date.getDay() !== 0 && date.getDay() !== 6) { // Exclude weekends
      availableDates.push(date)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Select Date & Time</h2>
        <p className="text-muted-foreground">
          Choose your preferred consultation slot
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Available Dates
          </h3>
          <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {availableDates.slice(0, 21).map((date, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectDate(date)}
                className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                  selectedDate?.toDateString() === date.toDateString()
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-accent'
                }`}
              >
                {date.getDate()}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Available Times
          </h3>
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <motion.button
                  key={time}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelectTime(time)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${
                    selectedTime === time
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-accent'
                  }`}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              Please select a date first
            </div>
          )}
        </div>
      </div>

      {selectedDate && selectedTime && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center"
        >
          <p className="font-medium">
            Your consultation is scheduled for{' '}
            <span className="text-primary">
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} at {selectedTime}
            </span>
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

function BookingDetails({ bookingData, onUpdateData }: any) {
  const handleChange = (field: string, value: string) => {
    onUpdateData({ ...bookingData, [field]: value })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Your Details</h2>
        <p className="text-muted-foreground">
          Tell us about yourself and your project
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={bookingData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={bookingData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={bookingData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            value={bookingData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Project Description
        </label>
        <textarea
          value={bookingData.projectDescription}
          onChange={(e) => handleChange('projectDescription', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Tell us about your project, goals, and what you hope to achieve..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Project Budget
          </label>
          <select
            value={bookingData.budget}
            onChange={(e) => handleChange('budget', e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Timeline
          </label>
          <select
            value={bookingData.urgency}
            onChange={(e) => handleChange('urgency', e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="asap">ASAP (Rush)</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
    </motion.div>
  )
}

function PaymentConfirmation({ service, date, time, bookingData, onSubmit }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Confirm & Pay</h2>
        <p className="text-muted-foreground">
          Review your booking details and complete payment
        </p>
      </div>

      {/* Booking Summary */}
      <div className="bg-muted/50 rounded-xl p-6 space-y-4">
        <h3 className="font-semibold text-lg">Booking Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Service:</span>
            <span className="font-medium">{service?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Date:</span>
            <span className="font-medium">
              {date?.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Time:</span>
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex justify-between">
            <span>Duration:</span>
            <span className="font-medium">{service?.duration}</span>
          </div>
          <div className="flex justify-between border-t pt-3">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-xl gradient-text">${service?.price}</span>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="space-y-6">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payment Information
        </h3>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Secure Payment</span>
          </div>
          <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
            Your payment information is encrypted and secure. We use Stripe for processing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                CVC
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Name on card"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" className="rounded" />
          <span>
            I agree to the{' '}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </motion.div>
  )
}