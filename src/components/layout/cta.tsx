"use client";

import Header from "@/components/common/header";
import { Button } from "../ui/button";
import FadeInSection from "../animation/fadeIn";

export default function CTA() {
    return (
        <div className="p-2">
            <div className="cta bg-[url('/background/bg-cta.png')] bg-no-repeat bg-cover bg-center rounded-[12px] py-16 px-6 md:p-16 flex flex-col justify-center items-center">
                    <FadeInSection delay={0.5} className="container max-w-[67rem] md:py-10 flex flex-col gap-8 justify-center items-center">
                        <div className="cta-header">
                            <Header
                                title="Start Growing with Custo Now"
                                description="Take control of your sales pipeline, automate tasks, and build stronger customer relationships with ease."
                                className="max-w-[590px] text-center"
                            />
                        </div>
                        <div className="cta-button w-full md:w-auto">
                            <Button variant="primary" size="base" className="cursor-pointer w-full md:w-auto">
                                Start for Free
                            </Button>
                        </div>
                    </FadeInSection>
            </div>
        </div>
    );
}
