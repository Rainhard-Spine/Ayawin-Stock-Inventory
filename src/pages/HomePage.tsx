import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ClipboardCheck, Database, FileText, BarChart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 min-h-[80vh] py-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Reliable <span className="gradient-text">Inventory Management</span> & Business Support Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                From stock takes to data entry, Ayawin Stock Solutions helps you stay organized, compliant, and in control.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/quote">Get a Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
  <div className="relative">
    <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-60" />
    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full opacity-40" />
    <div className="relative bg-white p-0 rounded-lg shadow-xl w-[420px] h-[340px] mx-auto flex items-center justify-center">
      <img 
        src="src/pages/uploads/Founder.jpeg" 
        alt="Inventory Management" 
        className="rounded-lg object-cover w-full h-full bg-white"
      />
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Ayawin Stock Solutions</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Ayawin Stock Solutions, we provide expert inventory and business support services tailored to your 
              company's unique needs. Whether you're running a retail shop or managing a warehouse, 
              we deliver accuracy, efficiency, and peace of mind.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to keep your inventory accurate and your business running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Stock Takes" 
              description="Accurate inventory counting and reconciliation." 
              icon={<ClipboardCheck className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard 
              title="Stock Arrangement" 
              description="Organizing your stock for better flow and tracking." 
              icon={<Database className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard 
              title="KRA Stickers" 
              description="Placement and management of KRA-compliant labels." 
              icon={<FileText className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard 
              title="Data Entry" 
              description="Fast and accurate data input for smooth operations." 
              icon={<FileText className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard 
              title="Accounting" 
              description="Basic bookkeeping and financial data management." 
              icon={<BarChart className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard 
              title="Auditing" 
              description="Internal reviews to catch errors and ensure compliance." 
              icon={<CheckCircle className="h-10 w-10 text-blue-600" />}
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/services">See All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional service that keeps our clients coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              title="Accuracy You Can Trust" 
              description="Our meticulous approach ensures reliable inventory data."
            />
            <FeatureCard 
              title="Affordable Pricing" 
              description="Transparent pricing with no hidden fees or surprises."
            />
            <FeatureCard 
              title="Fast Turnaround Times" 
              description="We work efficiently to minimize disruption to your business."
            />
            <FeatureCard 
              title="Professional Team" 
              description="Experienced professionals who understand your business needs."
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 italic mb-6">
                "Jstock helped us organize our inventory in just two days. Super efficient!"
              </p>
              <p className="font-medium">— Happy Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Let us help you take control of your inventory and streamline your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/quote">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <Link
          to="/auth"
          className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-800 font-semibold text-lg transition"
        >
         
        </Link>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-6 text-center rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:shadow-md">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;
