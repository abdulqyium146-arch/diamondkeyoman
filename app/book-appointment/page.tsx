"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, Clock, Phone, Star, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

const services = [
  { id: "body-massage", name: "Body Massage", duration: "60–120 min", price: "From AED 150", category: "Massage" },
  { id: "moroccan-bath", name: "Moroccan Bath", duration: "60–90 min", price: "From AED 200", category: "Bath" },
  { id: "facial-treatments", name: "Facial Treatment", duration: "45–90 min", price: "From AED 180", category: "Facial" },
  { id: "aromatherapy", name: "Aromatherapy Massage", duration: "60–90 min", price: "From AED 200", category: "Massage" },
  { id: "deep-tissue-massage", name: "Deep Tissue Massage", duration: "60–90 min", price: "From AED 220", category: "Massage" },
  { id: "hot-stone-massage", name: "Hot Stone Massage", duration: "75–90 min", price: "From AED 250", category: "Massage" },
  { id: "foot-reflexology", name: "Foot Reflexology", duration: "45–60 min", price: "From AED 130", category: "Holistic" },
  { id: "body-scrub", name: "Body Scrub", duration: "45–60 min", price: "From AED 160", category: "Body" },
  { id: "royal-retreat", name: "Royal Retreat Package", duration: "180 min", price: "AED 750", category: "Package" },
  { id: "couples-bliss", name: "Couples Bliss Package", duration: "120 min", price: "AED 1,100", category: "Package" },
  { id: "vip-gold", name: "VIP Gold Experience", duration: "240 min", price: "AED 1,200", category: "Package" },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
  "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM",
];

type Step = 1 | 2 | 3 | 4;

interface BookingData {
  service: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  therapistGender: string;
  notes: string;
}

export default function BookAppointmentPage() {
  const [step, setStep] = useState<Step>(1);
  const [booking, setBooking] = useState<BookingData>({
    service: "", date: "", time: "",
    firstName: "", lastName: "", phone: "", email: "",
    therapistGender: "no-preference", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedService = services.find((s) => s.id === booking.service);

  const getTodayDate = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 60);
    return d.toISOString().split("T")[0];
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const steps = [
    { n: 1, label: "Treatment" },
    { n: 2, label: "Date & Time" },
    { n: 3, label: "Your Details" },
    { n: 4, label: "Confirm" },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-3">Booking Request Sent!</h1>
          <p className="text-gray-600 mb-2">
            Thank you, <span className="font-semibold">{booking.firstName}</span>! We have received your booking request for
            <span className="font-semibold"> {selectedService?.name}</span>.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Our team will call or WhatsApp you at <span className="font-semibold">{booking.phone}</span> within 30 minutes to confirm your appointment.
          </p>
          <div className="luxury-card p-6 text-left mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Treatment</span><span className="font-medium">{selectedService?.name}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Date</span><span className="font-medium">{new Date(booking.date + "T12:00:00").toLocaleDateString("en-AE", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Time</span><span className="font-medium">{booking.time}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Price</span><span className="font-medium text-gold-600">{selectedService?.price}</span></div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn flex-1 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call to Confirm
            </a>
            <Link href="/" className="ghost-btn flex-1">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-luxury-dark py-12">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
            Book an <span className="text-gold-400">Appointment</span>
          </h1>
          <p className="text-gray-400 text-sm">Diamond Key Spa · Al Qusais, Dubai · Open Daily 9AM–12:30AM</p>

          <div className="flex items-center gap-0 mt-8">
            {steps.map((s, i) => (
              <div key={s.n} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step === s.n ? "bg-gold-500 text-white" :
                    step > s.n ? "bg-green-500 text-white" :
                    "bg-gray-700 text-gray-400"
                  }`}>
                    {step > s.n ? <Check className="w-4 h-4" /> : s.n}
                  </div>
                  <span className={`text-xs mt-1.5 font-medium hidden sm:block ${step === s.n ? "text-gold-400" : step > s.n ? "text-green-400" : "text-gray-500"}`}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-1 transition-all ${step > s.n ? "bg-green-500" : "bg-gray-700"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom max-w-3xl py-10">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Select Your Treatment</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {services.map((svc) => (
                <button key={svc.id}
                  onClick={() => setBooking((b) => ({ ...b, service: svc.id }))}
                  className={`text-left p-5 rounded-2xl border-2 transition-all ${
                    booking.service === svc.id
                      ? "border-gold-400 bg-gold-50 shadow-gold"
                      : "border-gray-200 bg-white hover:border-gold-200"
                  }`}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{svc.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1"><Clock className="w-3 h-3" />{svc.duration}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-gold-600">{svc.price}</p>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{svc.category}</span>
                    </div>
                  </div>
                  {booking.service === svc.id && (
                    <div className="mt-2 flex items-center gap-1 text-gold-600 text-xs font-medium">
                      <Check className="w-3 h-3" /> Selected
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Not sure? <a href={`tel:${siteConfig.contact.phone}`} className="text-gold-500 font-medium hover:text-gold-600">Call us</a> for a recommendation.</p>
              <button onClick={() => setStep(2)}
                disabled={!booking.service}
                className="gold-btn disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Choose Your Date & Time</h2>
            <div className="luxury-card p-6 mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Select Date</label>
              <input type="date" min={getTodayDate()} max={getMaxDate()}
                value={booking.date}
                onChange={(e) => setBooking((b) => ({ ...b, date: e.target.value, time: "" }))}
                className="w-full sm:w-auto px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
            </div>

            {booking.date && (
              <div className="luxury-card p-6 mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Select Time</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                  {timeSlots.map((slot) => (
                    <button key={slot}
                      onClick={() => setBooking((b) => ({ ...b, time: slot }))}
                      className={`py-2.5 px-2 rounded-xl text-xs font-medium border-2 transition-all ${
                        booking.time === slot
                          ? "border-gold-400 bg-gold-50 text-gold-700"
                          : "border-gray-200 text-gray-600 hover:border-gold-200"
                      }`}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-700">
              <strong>Note:</strong> Time slots are subject to therapist availability. We will confirm your exact time when we call to confirm your booking.
            </div>

            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="ghost-btn flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={() => setStep(3)}
                disabled={!booking.date || !booking.time}
                className="gold-btn disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Your Details</h2>
            <div className="luxury-card p-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                  <input type="text" placeholder="First name" value={booking.firstName}
                    onChange={(e) => setBooking((b) => ({ ...b, firstName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                  <input type="text" placeholder="Last name" value={booking.lastName}
                    onChange={(e) => setBooking((b) => ({ ...b, lastName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone / WhatsApp *</label>
                <input type="tel" placeholder="+971 XX XXX XXXX" value={booking.phone}
                  onChange={(e) => setBooking((b) => ({ ...b, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
                <p className="text-xs text-gray-400 mt-1">We will call or WhatsApp this number to confirm your booking.</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input type="email" placeholder="your@email.com" value={booking.email}
                  onChange={(e) => setBooking((b) => ({ ...b, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Therapist Preference</label>
                <div className="flex gap-3">
                  {[{ v: "no-preference", l: "No Preference" }, { v: "female", l: "Female Therapist" }, { v: "male", l: "Male Therapist" }].map((opt) => (
                    <button key={opt.v} onClick={() => setBooking((b) => ({ ...b, therapistGender: opt.v }))}
                      className={`flex-1 py-2.5 rounded-xl border-2 text-xs font-medium transition-all ${
                        booking.therapistGender === opt.v
                          ? "border-gold-400 bg-gold-50 text-gold-700"
                          : "border-gray-200 text-gray-600 hover:border-gold-200"
                      }`}>
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Special Notes <span className="text-gray-400 font-normal">(optional)</span></label>
                <textarea rows={3} placeholder="Any health conditions, allergies, or special requests..." value={booking.notes}
                  onChange={(e) => setBooking((b) => ({ ...b, notes: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 resize-none" />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={() => setStep(2)} className="ghost-btn flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={() => setStep(4)}
                disabled={!booking.firstName || !booking.lastName || !booking.phone}
                className="gold-btn disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                Review Booking <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Review & Confirm</h2>

            <div className="luxury-card p-6 mb-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-gold-500" /> Booking Summary
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Treatment", value: selectedService?.name },
                  { label: "Date", value: booking.date ? new Date(booking.date + "T12:00:00").toLocaleDateString("en-AE", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : "" },
                  { label: "Time", value: booking.time },
                  { label: "Duration", value: selectedService?.duration },
                  { label: "Starting Price", value: selectedService?.price },
                  { label: "Name", value: `${booking.firstName} ${booking.lastName}` },
                  { label: "Phone", value: booking.phone },
                  { label: "Therapist", value: booking.therapistGender === "no-preference" ? "No preference" : `${booking.therapistGender.charAt(0).toUpperCase() + booking.therapistGender.slice(1)} therapist` },
                ].map((row) => row.value && (
                  <div key={row.label} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0 gap-4">
                    <span className="text-sm text-gray-500 flex-shrink-0">{row.label}</span>
                    <span className="text-sm font-medium text-gray-800 text-right">{row.value}</span>
                  </div>
                ))}
                {booking.notes && (
                  <div className="py-2">
                    <p className="text-sm text-gray-500 mb-1">Notes</p>
                    <p className="text-sm text-gray-700">{booking.notes}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gold-50 border border-gold-100 rounded-2xl p-5 mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                By confirming, you agree to our <Link href="/terms" className="text-gold-600 font-medium hover:underline">cancellation policy</Link>.
                Our team will contact you within <strong>30 minutes</strong> to confirm your appointment.
                No payment is required at this stage.
              </p>
            </div>

            <div className="flex justify-between">
              <button onClick={() => setStep(3)} className="ghost-btn flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={handleSubmit} className="gold-btn flex items-center gap-2">
                <Check className="w-4 h-4" /> Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
