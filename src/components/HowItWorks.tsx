import { Calendar, Truck, Sparkles, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Schedule Pickup",
      description: "Book online in 60 seconds. Choose your preferred time slot for free pickup."
    },
    {
      icon: Truck,
      title: "We Collect",
      description: "Our friendly driver picks up your laundry right from your doorstep."
    },
    {
      icon: Sparkles,
      title: "We Clean",
      description: "Professional cleaning with premium detergents and expert care for every item."
    },
    {
      icon: Home,
      title: "We Deliver",
      description: "Your fresh, clean laundry delivered back to you within 24-48 hours."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to fresh, clean laundry
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="flex flex-col items-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-secondary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
