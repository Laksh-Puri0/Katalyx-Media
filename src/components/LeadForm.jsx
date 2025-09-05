"use client";
import React, { useState } from "react";
import {
  CalendarDays,
  User,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  ClipboardList,
  Clock,
} from "lucide-react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    timeline: "",
    budget: "",
    address: "",
    homeowner: false,
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // send data to backend
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-lg mx-auto">
            Fill in your details below — our team will confirm your appointment within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Full Name", icon: User, name: "name", type: "text", placeholder: "John Doe", required: true },
              { label: "Phone Number", icon: Phone, name: "phone", type: "tel", placeholder: "+1 234 567 890", required: true },
              { label: "Email (Optional)", icon: Mail, name: "email", type: "email", placeholder: "john@example.com", required: false },
              { label: "Project Interested In", icon: ClipboardList, name: "project", type: "text", placeholder: "Kitchen Renovation", required: true },
              { label: "Project Timeline", icon: Clock, name: "timeline", type: "text", placeholder: "2-3 months", required: true },
              { label: "Maximum Budget", icon: DollarSign, name: "budget", type: "text", placeholder: "$10,000", required: true },
              { label: "Address", icon: MapPin, name: "address", type: "text", placeholder: "123 Main Street, City", required: true },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-cyan-500 transition-all">
                  <field.icon className="text-gray-400 w-5 h-5 mr-2" />
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full py-2 outline-none text-gray-800 placeholder-gray-400"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              </div>
            ))}

            {/* Homeowner Confirmation */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="homeowner"
                checked={formData.homeowner}
                onChange={handleChange}
                className="w-5 h-5 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                required
              />
              <label className="text-gray-700">
                I confirm I am the homeowner/decision-maker
              </label>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Date</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-cyan-500 transition-all">
                  <CalendarDays className="text-gray-400 w-5 h-5 mr-2" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full py-2 outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Time</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-cyan-500 transition-all">
                  <Clock className="text-gray-400 w-5 h-5 mr-2" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full py-2 outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Book My Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
