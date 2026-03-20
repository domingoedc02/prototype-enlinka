"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { SERVICES, CONSULTATION_CONTENT } from "@/lib/constants";

type FormStatus = "idle" | "submitting" | "success";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-navy/10 bg-off-white text-navy placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all duration-200";

const serviceOptions = [
  ...SERVICES.map((s) => s.title),
  "Not Sure Yet",
];

export default function ConsultationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  }

  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <CheckCircle className="mx-auto text-electric" size={64} />
              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-navy">
                You&apos;re All Set!
              </h2>
              <p className="mt-4 text-navy/60 max-w-md mx-auto leading-relaxed">
                {CONSULTATION_CONTENT.successMessage}
              </p>
              <div className="mt-8">
                <Button href="/" variant="primary">
                  Back to Home
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Full Name */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <label htmlFor="fullName" className="block text-sm font-medium text-navy mb-1.5">
                  Full Name <span className="text-electric">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </motion.div>

              {/* Work Email */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                  Work Email <span className="text-electric">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </motion.div>

              {/* Company Name & Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label htmlFor="companySize" className="block text-sm font-medium text-navy mb-1.5">
                    Company Size
                  </label>
                  <select id="companySize" name="companySize" className={inputClass}>
                    <option value="">Select...</option>
                    {CONSULTATION_CONTENT.companySizeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Service & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <label htmlFor="service" className="block text-sm font-medium text-navy mb-1.5">
                    Service Interested In <span className="text-electric">*</span>
                  </label>
                  <select id="service" name="service" required className={inputClass}>
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="budget" className="block text-sm font-medium text-navy mb-1.5">
                    Project Budget Range
                  </label>
                  <select id="budget" name="budget" className={inputClass}>
                    <option value="">Select...</option>
                    {CONSULTATION_CONTENT.budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Project Details */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <label htmlFor="details" className="block text-sm font-medium text-navy mb-1.5">
                  Project Details <span className="text-electric">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  minLength={20}
                  rows={4}
                  placeholder="Tell us about your project, timeline, and what you're looking for..."
                  className={inputClass}
                />
              </motion.div>

              {/* Submit */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto"
                >
                  {status === "submitting" ? "Sending..." : "Submit Request"}
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
