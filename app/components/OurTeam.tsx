"use client";
import React from "react";
import ConnectBar from "./ConnectBar";

// Type definitions for team member props
interface TeamMemberProps {
  img: string;
  name: string;
  role: string;
  flag: string;
}

const OurTeam = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden border-t border-stone-300">
      <div className="md:w-3/5 max-w-7xl mx-auto text-center pt-10 pb-28 max-[640px]:pb-16">
        <p className="heading1 py-6 max-[640px]:text-2xl">
          Our <em>Team</em>
        </p>

        <div className="flex flex-col gap-10 mt-10 max-[640px]:gap-6 max-[640px]:mt-6">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-6 max-[640px]:gap-4">
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t1.png"
              name="Mansoor Khan"
              role="Co-Founder"
              flag="https://flagcdn.com/w40/ae.png"
            />
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t2.png"
              name="Travis Miller"
              role="Co-Founder"
              flag="https://flagcdn.com/w40/us.png"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-6 max-[640px]:gap-4">
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t3.png"
              name="Meerab Chaudary"
              role="Head of Social Media"
              flag="https://flagcdn.com/w40/ae.png"
            />
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t4.png"
              name="Emir Khan"
              role="Head of Business Development"
              flag="https://flagcdn.com/w40/tr.png"
            />
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t5.png"
              name="Baqir Hassan"
              role="Head of Design & Development"
              flag="https://flagcdn.com/w40/ae.png"
            />
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap justify-center gap-6 max-[640px]:gap-4">
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t6.png"
              name="Muhammad Zain"
              role="Project Manager"
              flag="https://flagcdn.com/w40/pk.png"
            />
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t7.png"
              name="Zorez Khan"
              role="Project Manager"
              flag="https://flagcdn.com/w40/pk.png"
            />
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t8.png"
              name="Imran Akbar"
              role="Project Manager"
              flag="https://flagcdn.com/w40/pk.png"
            />
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t9.png"
              name="Jessica Raymond"
              role="Account Manager"
              flag="https://flagcdn.com/w40/ae.png"
            />
            <TeamMember
              img="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/t0.png"
              name="Ron Smith"
              role="Account Manager"
              flag="https://flagcdn.com/w40/us.png"
            />
          </div>
        </div>

        <div className="mt-12 text-black">
          <ConnectBar />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <img
        src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/star1.png"
        alt="Floating 3D polygon decorative shape"
        className="hidden md:block absolute top-30 -left-2 w-55 animate-float"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/star2.png"
        alt="Floating 3D star decorative shape"
        className="hidden md:block absolute top-110 -right-2 w-40 animate-float"
      />
    </div>
  );
};

// TEAM MEMBER COMPONENT WITH TYPES
const TeamMember: React.FC<TeamMemberProps> = ({ img, name, role, flag }) => {
  return (
    <div className="text-center max-w-[160px] max-[640px]:max-w-[110px]">
      <div className="w-33 h-33 max-[640px]:w-20 max-[640px]:h-20 mx-auto overflow-hidden bg-cblue rounded-lg">
        <img
          src={img}
          alt={`${name}, ${role}`}
          className="w-full h-full object-cover scale-[1.10] transform rounded-lg"
        />
      </div>

      <h3 className="text-lg font-semibold mt-3 max-[640px]:text-sm max-[640px]:mt-2">
        {name}
      </h3>

      <p className="text-sm italic font-playfair font-semibold text-cblue max-[640px]:text-xs">
        {role}
      </p>

      <img
        src={flag}
        alt={`Flag of ${getCountryFromFlag(flag)}`}
        className="w-6 h-4 mx-auto mt-2 rounded-sm max-[640px]:w-4 max-[640px]:h-3"
      />
    </div>
  );
};

// TYPE-ANNOTATED HELPER FUNCTION
function getCountryFromFlag(flagUrl: string): string {
  if (flagUrl.includes("/us.png")) return "United States";
  if (flagUrl.includes("/pk.png")) return "Pakistan";
  if (flagUrl.includes("/ae.png")) return "United Arab Emirates";
  if (flagUrl.includes("/tr.png")) return "Turkey";
  return "Country";
}

export default OurTeam;
