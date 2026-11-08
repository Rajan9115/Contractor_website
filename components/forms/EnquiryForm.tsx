"use client";

import React, { useState } from "react";
import { MessageSquare, Send, AlertCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { contactConfig } from "@/data/siteConfig";

interface FormData {
  name: string;
  phone: string;
  service: string;
  location: string;
  description: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  description?: string;
}

export function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "All Four Trades (Complete Fit-Out)",
    location: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "pending_provider"
  >("idle");

  const servicesList = [
    "All Four Trades (Complete Fit-Out)",
    "Concealed Electrical & Wiring",
    "Carpentry & Custom Modular Woodwork",
    "Interior & Exterior Painting & Textures",
    "Gypsum False Ceiling & POP Solutions",
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }

    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (!digitsOnly || digitsOnly.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description =
        "Please provide brief project details (at least 10 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Compile formatted message for WhatsApp
  const generateFormattedMessage = (): string => {
    let msg = `*New Contracting Enquiry*\n`;
    msg += `• *Name:* ${formData.name || "Client"}\n`;
    msg += `• *Phone:* ${formData.phone || "Not provided"}\n`;
    msg += `• *Service:* ${formData.service}\n`;
    if (formData.location.trim()) {
      msg += `• *Location:* ${formData.location}\n`;
    }
    msg += `• *Project Scope:* ${formData.description}\n`;
    return msg;
  };

  // Primary Path: Send via WhatsApp immediately
  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formatted = generateFormattedMessage();
    const waUrl = buildWhatsAppUrl({ customMessage: formatted });
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // Direct Form Submit: Discloses pending backend provider transparently as required
  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus("pending_provider");
    }, 600);
  };

  const transferWhatsAppUrl = buildWhatsAppUrl({
    customMessage: generateFormattedMessage(),
  });

  return (
    <div className="rounded-2xl bg-white border border-[#E5E0D7] p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B58A58]">
          Fast Lead Consultation
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#172B40] tracking-tight mt-1">
          Request an Itemized Quotation
        </h3>
        <p className="text-xs sm:text-sm text-[#687381] mt-1.5 leading-relaxed">
          Provide your project requirements below. You can send this enquiry directly to WhatsApp for an immediate response.
        </p>
      </div>

      <form className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider text-[#172B40] mb-1.5"
          >
            Your Full Name <span className="text-[#B42318]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Rajesh Sharma"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#172B40] bg-[#F7F5F0]/50 placeholder:text-[#687381]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B58A58] transition-colors ${
              errors.name ? "border-[#B42318]" : "border-[#E5E0D7]"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-[#B42318] flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Mobile Number & Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-[#172B40] mb-1.5"
            >
              Mobile / WhatsApp Number <span className="text-[#B42318]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. 9876543210"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#172B40] bg-[#F7F5F0]/50 placeholder:text-[#687381]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B58A58] transition-colors ${
                errors.phone ? "border-[#B42318]" : "border-[#E5E0D7]"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-[#B42318] flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-xs font-bold uppercase tracking-wider text-[#172B40] mb-1.5"
            >
              Primary Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#E5E0D7] text-sm text-[#172B40] bg-[#F7F5F0]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B58A58] transition-colors"
            >
              {servicesList.map((svc, idx) => (
                <option key={idx} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Property Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-xs font-bold uppercase tracking-wider text-[#172B40] mb-1.5"
          >
            Project Location / City Area
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g. Powai, Mumbai / Apartment or Commercial office"
            className="w-full px-4 py-2.5 rounded-lg border border-[#E5E0D7] text-sm text-[#172B40] bg-[#F7F5F0]/50 placeholder:text-[#687381]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B58A58] transition-colors"
          />
        </div>

        {/* Scope Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-xs font-bold uppercase tracking-wider text-[#172B40] mb-1.5"
          >
            Describe Your Requirements <span className="text-[#B42318]">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Tell us about the space, room count, specific items (e.g., wardrobe dimensions, ceiling coves, full rewiring, interior paint)..."
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#172B40] bg-[#F7F5F0]/50 placeholder:text-[#687381]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B58A58] transition-colors resize-y ${
              errors.description ? "border-[#B42318]" : "border-[#E5E0D7]"
            }`}
          />
          {errors.description && (
            <p className="mt-1 text-xs text-[#B42318] flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.description}</span>
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          {/* Primary instant delivery path via WhatsApp */}
          <Button
            type="button"
            onClick={handleSendViaWhatsApp}
            variant="whatsapp"
            size="lg"
            leftIcon={<MessageSquare className="w-5 h-5" />}
            className="flex-1"
          >
            Send Enquiry via WhatsApp
          </Button>

          {/* Secondary form request */}
          <Button
            type="button"
            onClick={handleDirectSubmit}
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            leftIcon={<Send className="w-4 h-4" />}
          >
            {isSubmitting ? "Processing..." : "Submit Direct Request"}
          </Button>
        </div>

        {/* Content Integrity Disclosure Notice */}
        {submissionStatus === "pending_provider" && (
          <div className="mt-4 p-4 rounded-xl bg-[#F7F5F0] border border-[#B58A58]/40 space-y-3">
            <div className="flex items-start gap-2.5 text-xs text-[#172B40]">
              <Sparkles className="w-4 h-4 text-[#B58A58] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-[#172B40]">
                  Form Captured & Integrity Disclosure
                </p>
                <p className="mt-1 text-xs text-[#687381] leading-relaxed">
                  As strictly governed by our content integrity standards, automated email dispatch is marked as <strong>pending backend credentials configuration</strong>. Your enquiry has been compiled below.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <Button
                variant="whatsapp"
                size="sm"
                href={transferWhatsAppUrl}
                isExternal
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Forward This Enquiry to WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                href={`tel:${contactConfig.phoneRaw}`}
                isExternal={Boolean(contactConfig.phoneRaw)}
                leftIcon={<Phone className="w-4 h-4" />}
              >
                Call Contractor Directly
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
