import Image from "next/image";
import FadeInSection from "../animation/fadeIn";
import Link from "next/link";
export default function Footer() {
    return (
        <div className="px-2 pb-2">
            <div className="footer bg-[url('/background/bg-footer.svg')] bg-cover rounded-[12px] bg-center px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center">
                <div className="container max-w-[67rem] flex flex-col">
                    <div className="top py-10 lg:py-16 flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
                        <FadeInSection delay={0.5} className="top-left flex flex-col gap-6">
                            <div className="flex flex-col gap-3 max-w-[246px] lg:max-w-[16rem]">
                                <Image src="/logo/logo-footer.svg" alt="footer" width={92} height={24} />
                                <p className="text-medium text-white opacity-[72%]">Simplify customer relationships and scale your business with Custo.</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <a href="#">
                                    <Image src="/icon/linkedin.svg" alt="sosmed" width={24} height={24} /> 
                                </a>
                                <a href="#">
                                    <Image src="/icon/fb.svg" alt="sosmed" width={24} height={24} />
                                </a>
                                <a href="#">
                                    <Image src="/icon/ig.svg" alt="sosmed" width={24} height={24} />
                                </a>
                                <a href="#">
                                    <Image src="/icon/yt.svg" alt="sosmed" width={24} height={24} />
                                </a>
                            </div>
                        </FadeInSection>
                        <FadeInSection delay={0.5} className="top-right grid grid-cols-2 gap-10 md:gap-0 md:grid-cols-3 justify-between md:min-w-[20.9rem] lg:min-w-0 lg:gap-[7.5rem]">
                            <div className="flex flex-col gap-4">
                                <p className="text-large text-white">Quick Links</p>
                                <ul className="text-medium text-white opacity-[72%] space-y-3">
                                    <li><a href="#">Benefits</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-large text-white">Main Pages</p>
                                <ul className="text-medium text-white opacity-[72%] space-y-3">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/pricing">Pricing</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-large text-white">Other Pages</p>
                                <ul className="text-medium text-white opacity-[72%] space-y-3">
                                    <li>
                                        <Link href="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li><a href="#">Blog Details</a></li>
                                    <li><a href="/404">Error 404</a></li>
                                </ul>
                            </div>
                        </FadeInSection>
                    </div>
                    <FadeInSection delay={0.5} className="bottom flex flex-row py-6 justify-between border-t border-white/12">
                        <p className="text-medium font-normal text-white">2025 © Custo</p>
                        <div className="flex flex-row gap-2">
                            <a href="#" className="text-medium font-normal text-white">Get this template</a>
                            <Image src="/icon/arrow.svg" alt="arrow" width={12} height={12} />
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </div>
    )
}