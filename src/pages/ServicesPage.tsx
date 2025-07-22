import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ClipboardCheck,
  Database,
  FileText,
  BarChart,
  CheckCircle,
  File,
} from "lucide-react";

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive inventory and business support solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {/* Stock Takes */}
            <ServiceItem 
              title="Stock Takes" 
              description="We conduct full physical stock counts and reconcile your inventory records with what's actually on the ground. No more guessing or discrepancies."
              details={[
                "Complete physical inventory counting",
                "Reconciliation with existing records",
                "Variance analysis and reporting",
                "Recommendations for inventory optimization",
                "Flexible scheduling including after-hours options"
              ]}
              icon={<ClipboardCheck className="h-12 w-12 text-blue-600" />}
              imageUrl="src/pages/uploads/stock taking.png"
            />

            {/* Stock Management */}
            <ServiceItem 
              title="Stock Management" 
              description="We help you take full control of your inventory by implementing systems and practices that streamline your stock processes and minimize losses."
              details={[
                "Real-time stock level tracking",
                "Automatic low-stock alerts and reorder points",
                "Inventory categorization and SKU management",
                "Stock valuation and reporting",
                "Integration with POS and accounting systems"
              ]}
              icon={<BarChart className="h-12 w-12 text-blue-600" />}
              imageUrl="src/pages/uploads/stock management.png"
            />

            {/* Stock Arrangement */}
            <ServiceItem 
              title="Stock Arrangement" 
              description="Our team helps arrange and label your stock for easy access, better flow, and improved inventory control."
              details={[
                "Logical arrangement based on usage frequency",
                "Clear labeling and categorization",
                "Implementation of FIFO/LIFO systems",
                "Space optimization recommendations",
                "Staff training on maintaining arrangements"
              ]}
              icon={<Database className="h-12 w-12 text-blue-600" />}
              imageUrl="src/pages/uploads/stock arrangement.jpeg"
              reversed
            />

            {/* KRA Stickers */}
            <ServiceItem 
              title="KRA Stickers" 
              description="Stay compliant with KRA requirements by letting us help you apply and manage KRA stickers professionally and correctly."
              details={[
                "Accurate application of ETR stickers",
                "Compliance with KRA regulations",
                "Record keeping of applied stickers",
                "Management of sticker inventory",
                "Training on compliance requirements"
              ]}
              icon={<File className="h-12 w-12 text-blue-600" />}
              imageUrl="src/pages/uploads/KRA.png"
            />

            {/* Data Entry */}
            <ServiceItem 
              title="Data Entry" 
              description="Need help updating your systems or entering piles of records? Our data entry services are accurate, fast, and secure."
              details={[
                "Accurate input of inventory data",
                "Sales and purchase order processing",
                "Document digitization",
                "Database cleanup and organization",
                "Custom data entry solutions"
              ]}
              icon={<FileText className="h-12 w-12 text-blue-600" />}
              imageUrl="src/pages/uploads/Data entry.png"
              reversed
            />

            {/* Accounting */}
            <ServiceItem 
              title="Accounting" 
              description="We assist with basic bookkeeping and financial record organization, helping you keep things clean and ready for audits or reviews."
              details={[
                "Basic bookkeeping services",
                "Financial record organization",
                "Bank reconciliation",
                "Invoice processing and management",
                "Financial reporting preparation"
              ]}
              icon={<BarChart className="h-12 w-12 text-blue-600" />}
              imageUrl="src/pages/uploads/Accounting.png"
            />

            {/* Auditing */}
            <ServiceItem 
              title="Auditing" 
              description="We offer internal audits to check your financial and inventory processes, identify gaps, and recommend improvements."
              details={[
                "Comprehensive inventory audits",
                "Process compliance reviews",
                "Detailed variance reporting",
                "Risk assessment and mitigation recommendations",
                "Follow-up verification services"
              ]}
              icon={<CheckCircle className="h-12 w-12 text-blue-600" />}
              imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              reversed
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Customized Service?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We can tailor our services to meet your specific business requirements. Let's discuss your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Service Item Component
interface ServiceItemProps {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  imageUrl: string;
  reversed?: boolean;
}

const ServiceItem = ({
  title,
  description,
  details,
  icon,
  imageUrl,
  reversed = false,
}: ServiceItemProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <div className={reversed ? 'md:order-2' : ''}>
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-3xl font-bold ml-3">{title}</h2>
        </div>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={reversed ? 'md:order-1' : ''}>
        <div className="rounded-lg overflow-hidden shadow-xl flex justify-center items-center w-full max-w-sm h-64 mx-auto">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
