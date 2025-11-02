import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Busy Professional",
      content: "This laundry service has been a lifesaver! The pickup and delivery is so convenient, and my clothes always come back perfectly cleaned and folded.",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      content: "We use their commercial service for our restaurant linens. Always on time, impeccable quality, and their customer service is outstanding!",
      rating: 5,
      image: "MC"
    },
    {
      name: "Emily Davis",
      role: "Mother of Three",
      content: "With three kids, laundry was overwhelming. Now I have more time to spend with my family. The quality is excellent and the prices are fair.",
      rating: 5,
      image: "ED"
    },
    {
      name: "James Wilson",
      role: "Small Business Owner",
      content: "Professional, reliable, and affordable. They handle all our uniform cleaning and the results are consistently excellent.",
      rating: 5,
      image: "JW"
    },
    {
      name: "Lisa Martinez",
      role: "College Student",
      content: "As a student, I don't have time for laundry. This service is affordable and super convenient. My clothes have never looked better!",
      rating: 5,
      image: "LM"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their laundry
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                            {testimonial.image}
                          </div>
                          <div>
                            <div className="font-semibold text-lg">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
