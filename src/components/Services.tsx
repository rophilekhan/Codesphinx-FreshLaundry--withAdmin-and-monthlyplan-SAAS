import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Wind, Droplets, Sparkles, Package, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Wash & Fold",
      description: "Professional washing, drying, and folding service. Your clothes returned fresh and neatly organized.",
      price: "From $1.50/lb"
    },
    {
      icon: Wind,
      title: "Dry Cleaning",
      description: "Expert dry cleaning for delicate fabrics and special garments. Gentle care for your finest clothes.",
      price: "From $8/item"
    },
    {
      icon: Droplets,
      title: "Stain Removal",
      description: "Advanced stain treatment using eco-friendly solutions. We tackle even the toughest stains.",
      price: "Included"
    },
    {
      icon: Sparkles,
      title: "Premium Care",
      description: "Special handling for luxury items and delicate fabrics. Hand-wash and air-dry options available.",
      price: "From $15/item"
    },
    {
      icon: Package,
      title: "Pickup & Delivery",
      description: "Free pickup and delivery service at your convenience. Schedule online in minutes.",
      price: "Free"
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Need it fast? Our same-day service ensures your clothes are ready when you need them.",
      price: "+$10"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive laundry solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
