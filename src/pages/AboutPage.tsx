import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ayawin Stock Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get to know who we are, what we stand for, and why we're passionate about helping businesses thrive through better inventory management.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full" />
                <img 
                  src="/pages/uploads/Homepage.jpeg" 
                  alt="Team working on inventory" 
                  className="rounded-lg shadow-xl relative z-10 w-full max-w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ayawin Stock Solutions was founded with a mission to help businesses take control of their inventory and operations. 
                With experience in retail, logistics, and compliance, we understand the challenges companies face 
                when things aren't well-tracked or organized.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our goal? To simplify your processes and save you time. We believe that accurate inventory management 
                is the foundation of a successful business, and we're here to help you build that foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide accurate, efficient, and affordable inventory and business support services 
                that empower companies to grow confidently. We aim to be the reliable partner 
                that helps businesses maintain control over their assets and operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a trusted name in inventory and business management across Kenya and beyond. 
                We strive to set the standard for excellence in inventory solutions, 
                helping businesses of all sizes optimize their operations and achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do as we work with clients and support their businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard 
              title="Reliability" 
              description="We deliver on our promises and can be counted on when it matters most."
            />
            <ValueCard 
              title="Professionalism" 
              description="We maintain the highest standards in all our interactions and services."
            />
            <ValueCard 
              title="Accuracy" 
              description="We are meticulous in our work because we know details matter."
            />
            <ValueCard 
              title="Client-First" 
              description="Your needs and goals are our priority in everything we do."
            />
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600">
              At Ayawin Stock Solutions, our success is built on a foundation of experienced, passionate professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <TeamCard
              name="Martin Koyih"
              role="Founder / Manager"
              image="/pages/uploads/martin.jpg"
              bio="A visionary leader with deep experience in business operations and inventory management. Martin ensures everything runs smoothly at Ayawin."
            />

            <TeamCard
              name="Reinhard Bonnke"
              role="Technical Team"
              image="/pages/uploads/bonnke.jpg"
              bio="Focused on digital solutions and inventory technologies, Reinhard is the mind behind the systems powering Ayawin’s efficiency."
            />

            <TeamCard
              name="Secton Ouma"
              role="Operations Officer"
              image="/pages/uploads/secton.jpeg"
              bio="Reliable, results-driven, and process-oriented. Secton ensures operations flow seamlessly every day."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help streamline your inventory management and business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/quote">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-6 text-center rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:shadow-md">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
        <CheckCircle className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Team Card Component
const TeamCard = ({
  name,
  role,
  image,
  bio,
}: {
  name: string;
  role: string;
  image: string;
  bio: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="w-24 h-24 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-full w-full h-full object-cover border-4 border-blue-100 shadow-sm"
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-blue-600 font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
};

export default AboutPage;
