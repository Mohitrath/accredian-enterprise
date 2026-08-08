import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return <main><Navbar /><Hero /><TrustedBy /><Features /><Programs /><HowItWorks /><Testimonials /><Faq /><LeadForm /><Footer /></main>;
}
