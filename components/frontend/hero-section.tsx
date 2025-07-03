import { ArrowRight,  } from "lucide-react";

import { Button } from "@/components/ui/button";

import SmallTitle from "./small-title";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl max-w-6xl mx-auto mx-auto text-center space-y-8">
        {/* Welcome Badge */}
        <SmallTitle title="Welcome To Think-Net"/>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold text-gray-700 leading-tight">
         All Department Resources 
          <br />
          Seamlessly Connected In One Place
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-l text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Welcome To ThibkLab Staff Portal, Your central hub for seamless collaboration and stramlined department workflows. <br /> Access everything your department needs all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            className="rounded-full inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-medium"
          >
            Try for free
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            See features
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="pt-8 border-t border-gray-200">
         © {new Date().getFullYear()} ThinkLab Group. All rights reserved.
        </div>
      </div>
    </section>
  )
}