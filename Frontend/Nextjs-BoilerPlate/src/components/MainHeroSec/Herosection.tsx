'use client'
import { useState } from "react";
import { ThumbsUp, DollarSign, HelpCircle, RefreshCw, Award, Info } from "lucide-react";
import { Button } from "../ui/button";


export default function MainHero() {
  const [selectedText, setSelectedText] = useState("");

  const cardData = [
    {
      id: "incentives",
      icon: <Award className="h-6 w-6 text-white mb-2" />,
      title: "Government Incentives",
      text: "Learn about rebates and incentives available for solar energy.",
      bgColor: "bg-solar-orange"
    },
    {
      id: "roi",
      icon: <RefreshCw className="h-6 w-6 text-white mb-2" />,
      title: "Return on Investment",
      text: "See how quickly you can recover your investment in solar.",
      bgColor: "bg-solar-yellow"
    },
    {
      id: "savings",
      icon: <DollarSign className="h-6 w-6 text-white mb-2" />,
      title: "How much can you save?",
      text: "Discover your potential savings on energy bills.",
      bgColor: "bg-forest-green"
    },
    {
      id: "worth",
      icon: <Info className="h-6 w-6 text-white mb-2" />,
      title: "Is it worth getting?",
      text: "Explore the benefits of solar energy for your home.",
      bgColor: "bg-sky-blue"
    },
    {
      id: "faq",
      icon: <HelpCircle className="h-6 w-6 text-white mb-2" />,
      title: "Frequently asked questions",
      text: "Get answers to common solar energy questions.",
      bgColor: "bg-primary"
    }
  ];



  return (
    <div className="w-full relative layout-safe">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 min-h-screen"
      >
        <source src="/heroback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced Overlay for Better Text Readability */}
      <div className="hero-overlay absolute inset-0 z-10"></div>

      {/* Additional gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10"></div>

      {/* Enhanced Content with Better Alignment */}
      <div className="hero-content relative z-20 min-h-screen flex items-center justify-center py-20">
        <div className="page-container">
          <div className="content-center max-w-6xl mx-auto">
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              {/* Company Badge */}
              <div className="animate-fade-in-up">
                <p className="text-primary font-bold uppercase tracking-wider text-sm sm:text-base lg:text-lg drop-shadow-lg">
                  The Energy Planet
                </p>
              </div>

              {/* Main Heading with Better Typography */}
              <div className="animate-fade-in-up animation-delay-200">
                <h1 className="hero-title text-balance leading-[1.1] drop-shadow-2xl">
                  Harness the Power of the{' '}
                  <span className="text-accent drop-shadow-lg animate-pulse-glow">
                    Australian Sun
                  </span>{' '}
                  for a{' '}
                  <span className="text-secondary drop-shadow-lg">
                    Sustainable Future
                  </span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <div className="animate-fade-in-up animation-delay-400">
                <p className="text-white/95 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-4xl mx-auto text-pretty leading-relaxed drop-shadow-lg font-medium">
                  Join thousands of Australians reducing their energy bills with{' '}
                  <span className="text-accent font-semibold">premium solar solutions</span>.
                  <br className="hidden sm:block" />
                  Professional installation, quality products, and exceptional service.
                </p>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="animate-fade-in-up animation-delay-600">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6">
                  <Button className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 h-auto rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg sm:text-xl lg:text-2xl w-full sm:w-auto border-2 border-white/20 glow-orange">
                    <ThumbsUp className="mr-3 h-6 w-6 sm:h-7 sm:w-7" />
                    GET A FREE QUOTE
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white/80 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white font-bold px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 h-auto rounded-full shadow-2xl transition-all duration-300 text-lg sm:text-xl lg:text-2xl w-full sm:w-auto glass-dark"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="animate-fade-in-up animation-delay-800">
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-8 text-white/80">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    <span className="text-sm sm:text-base font-medium">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-5 w-5 text-accent" />
                    <span className="text-sm sm:text-base font-medium">5-Star Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-accent" />
                    <span className="text-sm sm:text-base font-medium">25-Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Navigation (Cards) - Now in normal flow */}
      <div className="w-full bg-card/95 backdrop-blur-md border-t border-border/50 shadow-2xl relative z-dropdown section-clear">
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className={`card-hover p-3 sm:p-4 lg:p-6 content-center border-b sm:border-b-0 sm:border-r border-border/30 last:border-r-0 last:border-b-0 hover:bg-accent/20 hover:border-primary/30 transition-all duration-300 cursor-pointer group min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] ${selectedText === card.text ? 'bg-accent/30 border-primary' : ''
                  }`}
                onClick={() => setSelectedText(card.text)}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${card.bgColor} mb-3 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-200`}>
                  {card.icon}
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200 leading-tight text-center text-balance">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Dynamic Content Section */}
      {selectedText && (
        <div className="w-full section-padding bg-background section-clear">
          <div className="page-container">
            <div className="max-w-4xl mx-auto card-hover card-padding content-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 text-readable text-lg sm:text-xl lg:text-2xl font-medium rounded-xl shadow-xl border border-primary/20 animate-fade-in-up layout-safe">
              <div className="flex items-center justify-center mb-4">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <div className="w-1 h-1 bg-accent rounded-full mr-3"></div>
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
              </div>
              <p className="text-pretty leading-relaxed">{selectedText}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
