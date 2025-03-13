import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  CheckCircle2,
  Banknote,
  FileText,
  Building2,
  Wrench,
  Users,
  Bell,
} from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Property Management
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cohold streamlines commonhold property management with powerful
              tools for financial management, governance, and maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Banknote className="w-6 h-6" />,
                title: "Financial Management Hub",
                description:
                  "Automated service charge collection, reserve fund monitoring with forecasting, and integrated payment processing.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Digital Governance Center",
                description:
                  "Online voting system, e-signatures for approvals, meeting scheduling, and secure document storage.",
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Smart Maintenance System",
                description:
                  "IoT-powered tracking for critical building systems, compliance management, and vendor coordination.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Role-Based Dashboards",
                description:
                  "Tailored interfaces for owners, managers, developers, and service providers with personalized features.",
              },
              {
                icon: <Bell className="w-6 h-6" />,
                title: "Mobile-First Design",
                description:
                  "Clean, modern UI with real-time notifications and in-app issue reporting accessible across all devices.",
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Property Portfolio Management",
                description:
                  "Manage multiple properties in one place with comprehensive reporting and analytics tools.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Designed for Everyone Involved
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cohold provides tailored experiences for all stakeholders in
              commonhold property management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Property Owners",
                description:
                  "View charges, make payments, participate in voting, and report maintenance issues.",
              },
              {
                title: "Property Managers",
                description:
                  "Set service charges, monitor payments, manage maintenance, and generate reports.",
              },
              {
                title: "Developers",
                description:
                  "Configure new properties, set up unit types, and integrate IoT systems for new developments.",
              },
              {
                title: "Service Providers",
                description:
                  "Receive work orders, update task status, and submit completion reports.",
              },
            ].map((userType, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3">{userType.title}</h3>
                <p className="text-gray-600">{userType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Properties Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Happy Residents</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your property management needs. No
              hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of commonhold associations who trust Cohold with their
            property management needs.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Now
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
