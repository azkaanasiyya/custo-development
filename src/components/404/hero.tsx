import { Button } from "../ui/button";

export default function Hero404() {
    return (
        <div className="p-2">
            <div className="hero-section bg-[url('/background/bg-404.png')] bg-no-repeat bg-cover bg-center rounded-[12px] pt-40 lg:pt-[16.1rem] pb-20 lg:pb-[11.1rem] px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center">
                <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-12">
                    <div className="header flex flex-col justify-center items-center gap-4">
                        <h1 className="text-h1-mobile md:text-h1 text-center text-grayscale-950">Oops! Page Not Found</h1>
                        <p className="text-large md:text-xlarge text-grayscale-600 text-center">The page you are looking for doesn’t exist. Click button below to go to the homepage.</p>
                    </div>
                    <Button variant="Secondary" size="base">Go to Home page</Button>
                </div>
            </div>
        </div>
    )
}