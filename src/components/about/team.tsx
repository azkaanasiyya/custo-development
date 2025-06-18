import Image from "next/image";
import { teamMembers } from "../data/team";
import Header from "../common/header";
import FadeInSection from "../animation/fadeIn";

export default function AboutTeam() {
  return (
    <div className="team-section py-12 px-6 md:py-20 md:px-12 lg:py-[6.5rem] lg:px-[1rem] flex flex-col justify-center items-center">
        <div className="container max-w-[67rem] w-full mx-auto flex flex-col lg:justify-center items-center gap-[4rem]">
          <Header
              title="The Peoples Behind Custo"
              description="Together, we turn bold ideas into powerful tools for modern businesses."
            /> 
            
          <FadeInSection delay={0.5} className="team grid grid-cols-2 lg:grid-cols-4 w-full gap-[1.25rem]">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  data-animate="hero"
                  className="flex flex-col w-full gap-[1.5rem]"
                >
                  <Image
                    src={member.image}
                    className="w-full h-auto"
                    alt={member.name}
                    width={253}
                    height={280}
                  />
                  <div className="flex flex-col gap-[0.03125rem]">
                    <p className="text-large md:text-xlarge text-grayscale-950 font-medium">{member.name}</p>
                    <p className="text-small md:text-medium text-grayscale-600">{member.position}</p>
                  </div>
                </div>
              ))}
              </FadeInSection>
        </div>
    </div>
  );
}
