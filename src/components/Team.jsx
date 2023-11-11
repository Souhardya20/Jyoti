import React from "react";
import AyeswariyaAgarwal from "./assests/Ayeswariya  Agarwal.jpeg";
import TeamCard from "./TeamCard";
import PriyaangshuDey from "./assests/PriyaangshuDey.jpeg"
import SOUMISEBAIT from "./assests/SoumiSebait.jpeg"
import ACHHIAKHATUN from "./assests/ACHHIAKHATUN.jpeg"
import SkHabibulIslam from "./assests/Sk Habibul Islam.jpeg"
import BibekNaskar from "./assests/Bibek Naskar.jpeg"
import SOURAVGhosh from "./assests/SOURAV Ghosh.jpeg"
import DiyaMaiti from "./assests/Diya Maiti.jpeg"
const data = [
  {
    id: 1,
    name: 'Dr. Soupayan Mitra',
    department: "HOD (ME), JGEC",
    position: "President-Jyoti",
    image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
  },
  {
    id: 2,
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
  },
  {
    id: 5,
    name: 'SOUMI SEBAIT',
    department: "CE-2024",
    position: "",
    image: `${SOUMISEBAIT}`,
    link: "https://www.linkedin.com/in/soumi-sebait-638730207/"
  },
  {
    id: 6,
    name: 'ACHHIA KHATUN',
    department: "CE-2024",
    position: "",
    image: `${ACHHIAKHATUN}`,
    link: "https://www.linkedin.com/in/achhia-khatun-86aa6b207/"
  },
  {
    id: 7,
    name: 'Sk Habibul Islam',
    department: "EE-2024",
    position: "",
    image: `${SkHabibulIslam}`,
    link: "https://www.linkedin.com/in/skhabibulislam/"
  },
  {
    id: 8,
    name: 'Bibek Naskar',
    department: "EE-2024",
    position: "",
    image: `${BibekNaskar}`,
    link: "https://www.linkedin.com/in/bibek-naskar-1b1973202/"
  },
  {
    id: 9,
    name: 'Saikat Mitar',
    department: "EE-2024",
    position: "",
    image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    link: "https://www.linkedin.com/in/saikat-mitar-674b1220b/"
  },
  {
    id: 10,
    name: 'SOURAV Ghosh',
    department: "EE-2024",
    position: "",
    image: `${SOURAVGhosh}`,
    link: "https://www.linkedin.com/in/sourav-ghosh-02b3ba213/"
  },
  {
    id: 11,
    name: 'Diya Maiti',
    department: "CE-2024",
    position: "",
    image: `${DiyaMaiti}`,
    link: "https://www.linkedin.com/in/diya-maiti-298590207/"
  },
]
const Team = () => {
  return (
    <div className="bg-[#d8d5d5d2] ">
      <div className="items-center pb-4 lg:h-auto pt-10 lg:p-14 text-[#9e9cb6]">
        <p className="text-[#3a6ec8] text-center font-medium pb-10 text-[34px] ">Core Team - JYOTI</p>
        <div className="grid place-items-center lg:grid-cols-4 gap-4">
          {data.map(e => <TeamCard name={e.name} department={e.department} position={e.position} image={e.image} link={e.link} />)}
        </div>
      </div>
    </div>
  );
};

export default Team;
