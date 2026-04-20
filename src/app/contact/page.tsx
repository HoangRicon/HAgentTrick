import { ContactForm, ContactInfo } from "@/components/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to say hello? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="p-8 rounded-xl border bg-card">
          <ContactInfo />
        </div>

        {/* Contact Form */}
        <div className="p-8 rounded-xl border bg-card">
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
