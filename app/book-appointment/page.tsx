"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Phone, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceOptions = [
  { id: "car-key-copying", name: "Car Key Copying", price: "From OMR 2" },
  { id: "building-key-copying", name: "Building Key Copying", price: "From OMR 0.5" },
  { id: "car-key-programming", name: "Car Key Programming", price: "From OMR 15" },
  { id: "key-fob-creation", name: "New Key Fob Creation", price: "From OMR 20" },
  { id: "lock-rekeying", name: "Lock Rekeying", price: "From OMR 10" },
  { id: "building-lockout", name: "Building Lockout", price: "From OMR 10" },
  { id: "car-lockout", name: "Car Lockout", price: "From OMR 15" },
];

interface EnquiryData {
  service: string;
  firstName: string;
  phone: string;
  carMake: string;
  notes: string;
}

export default function BookAppointmentPage() {
  const [enquiry, setEnquiry] = useState<EnquiryData>({
    service: "", firstName: "", phone: "", carMake: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedService = serviceOptions.find((s) => s.id === enquiry.service);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-3">Enquiry Sent!</h1>
          <p className="text-gray-600 mb-2">
            Thank you, <span className="font-semibold">{enquiry.firstName}</span>! We have received your enquiry for{" "}
            <span className="font-semibold">{selectedService?.name}</span>.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            For the fastest response, call or WhatsApp us directly on{" "}
            <span className="font-semibold">{siteConfig.contact.phoneDisplay}</span>.
          </p>
          <div className="luxury-card p-6 text-left mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Enquiry Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Service</span><span className="font-medium">{selectedService?.name}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Starting Price</span><span className="font-medium text-gold-600">{selectedService?.price}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Name</span><span className="font-medium">{enquiry.firstName}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Phone</span><span className="font-medium">{enquiry.phone}</span></div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn flex-1 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
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
        <div className="container-custom max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
            Enquire About a <span className="text-gold-400">Service</span>
          </h1>
          <p className="text-gray-400 text-sm">Diamond Key · Al Khair Street, Seeb · Opens 4:30 PM Daily</p>
          <div className="mt-4 p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl">
            <p className="text-gold-300 text-sm">
              <span className="font-semibold">Fastest response:</span> Call or WhatsApp{" "}
              <a href={`tel:${siteConfig.contact.phone}`} className="text-gold-300 underline font-bold">
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-2xl py-10">
        <div>
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Select Service</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {serviceOptions.map((svc) => (
              <button key={svc.id}
                onClick={() => setEnquiry((e) => ({ ...e, service: svc.id }))}
                className={`text-left p-4 rounded-2xl border-2 transition-all ${
                  enquiry.service === svc.id
                    ? "border-gold-400 bg-gold-50 shadow-gold"
                    : "border-gray-200 bg-white hover:border-gold-200"
                }`}>
                <p className="font-semibold text-gray-900 text-sm">{svc.name}</p>
                <p className="text-xs text-gold-600 font-medium mt-1">{svc.price}</p>
                {enquiry.service === svc.id && (
                  <div className="mt-1.5 flex items-center gap-1 text-gold-600 text-xs font-medium">
                    <Check className="w-3 h-3" /> Selected
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="luxury-card p-6 space-y-4 mb-6">
            <h2 className="text-lg font-serif font-bold text-gray-900">Your Details</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name *</label>
                <input type="text" placeholder="Your name" value={enquiry.firstName}
                  onChange={(e) => setEnquiry((b) => ({ ...b, firstName: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone / WhatsApp *</label>
                <input type="tel" placeholder="+968 XXXX XXXX" value={enquiry.phone}
                  onChange={(e) => setEnquiry((b) => ({ ...b, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Car Make & Model <span className="text-gray-400 font-normal">(if car-related)</span></label>
              <input type="text" placeholder="e.g. Toyota Camry 2019" value={enquiry.carMake}
                onChange={(e) => setEnquiry((b) => ({ ...b, carMake: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Details <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea rows={3} placeholder="Describe your situation — key type, lock brand, or any relevant details..." value={enquiry.notes}
                onChange={(e) => setEnquiry((b) => ({ ...b, notes: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 resize-none" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/services" className="ghost-btn flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <button onClick={handleSubmit}
              disabled={!enquiry.service || !enquiry.firstName || !enquiry.phone}
              className="gold-btn disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
              <Check className="w-4 h-4" /> Submit Enquiry
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            Or call us directly: <a href={`tel:${siteConfig.contact.phone}`} className="text-gold-500 font-semibold">{siteConfig.contact.phoneDisplay}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
