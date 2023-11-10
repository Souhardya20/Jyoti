import React from "react";
import AyeswariyaAgarwal from "./assests/Ayeswariya  Agarwal.jpeg";
import TeamCard from "./TeamCard";
import PriyaangshuDey from "./assests/PriyaangshuDey.jpeg"


const data = [
  {
    id: 1,
    name: 'Dr. Soupayan Mitra',
    department: "HOD (ME), JGEC",
    position: "President-Jyoti",
    image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
  },
  {
    id: 1,
    name: 'Dr. Amitava Ray',
    department: "Principal, JGEC",
    position: "Advisor",
    image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
  },
  {
    id: 3,
    name: 'AYESWARIYA AGARWAL',
    department: "CE-2024",
    position: "Secretary-Jyoti",
    image: `${AyeswariyaAgarwal}`,
    link : "https://www.linkedin.com/in/aeswarya-agarwal-5b995b206/"
  },
  {
    id: 4,
    name: 'Priyaangshu Dey',
    department: "EE-2024",
    position: "Secretary-Jyoti",
    image: `${PriyaangshuDey}`,
    link: "https://www.linkedin.com/in/deypriyaangshu/"
  }
]
const Team = () => {
  return (
    <div className="bg-[#d8d5d5d2] ">
      <div className="items-center pb-4 lg:h-[100vh] pt-10 lg:p-14 text-[#9e9cb6]">
        <p className="text-[#3a6ec8] text-center font-medium pb-10 text-[34px] ">Core Team - JYOTI</p>
        <div className="grid place-items-center lg:grid-cols-4 gap-4">
          {data.map(e => <TeamCard name={e.name} department={e.department} position={e.position} image={e.image} link={e.link} />)}
        </div>
      </div>
    </div>
  );
};

export default Team;
