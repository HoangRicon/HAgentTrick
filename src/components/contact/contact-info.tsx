import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { contactConfig } from "@/lib/contact";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
};

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
        <p className="text-muted-foreground">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Email</div>
            <a
              href={`mailto:${contactConfig.email}`}
              className="hover:text-primary transition-colors"
            >
              {contactConfig.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Location</div>
            <span>{contactConfig.location}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="text-sm text-muted-foreground mb-3">Follow me</div>
        <div className="flex gap-3">
          {contactConfig.social.map((social) => {
            const Icon = iconMap[social.icon] || Github;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label={social.platform}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
