"use client";

import Testimonial from "@/components/common/testimonial";
import ContactHero from "@/components/contact/hero";
import CTA from "@/components/layout/cta";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set loading selesai setelah komponen di-mount
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 0); // Bisa tambahkan delay jika diperlukan

        return () => clearTimeout(timer);
    }, []);

    if (!isLoaded) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-xl font-semibold">
                Loading...
            </div>
        );
    }
    return (
        <div>
            <ContactHero />
            <Testimonial />
            <CTA />
        </div>
    )
}