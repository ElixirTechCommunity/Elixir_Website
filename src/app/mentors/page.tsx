"use client";
import React, { useEffect ,useState} from "react";
import { Sparkles } from "lucide-react";
import { LampDemo } from "@/components/ui/lamp";
import {SparklesCore } from "@/components/ui/sparkles";
import { FaSearch} from 'react-icons/fa';
import { MentorCard3D } from "@/components/MentorCard3D";
import { MentorHeading } from "@/components/MentorHeading";
import axios from "axios"
import { divMode } from "@tsparticles/engine";

function Participate() {
  const techFields=["Java","Python","C","Game Dev","Data Science","Frontend","React","Open Source","Backend","Devops","Web3","Linux","Backend","CyberSec","Graphics"]
  const [tech,selectedTech]=useState("");
  const [mentors, setMentors] = useState(mentorData);
//   useEffect(()=>{
//       axios
//       .get("https://mentor-api-30dc.onrender.com/member")
//       .then(response=>{
//         setMentors(response.data);
//       })
//       .catch(e=>{
//         console.log(e)
//       })
//     },[])
//   console.log(mentors)
  const categorize=(e: any)=>{
    const target = e.target as Element;
    const value = target.innerHTML;
    selectedTech(value);
  }
  return (
    <div className="w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="h-auto w-full flex flex-col gap-[3vw] items-center justify-center overflow-hidden rounded-md m-[2vw]">
        <MentorHeading/>
        <div className="text-white">
        <div className="flex flex-row gap-2 justify-center items-center rounded-full relative">
                  <input
                    type="text"
                    className="bg-white text-black font-semibold md:h-10 h-8 md:min-w-[30rem] min-w-[10rem] rounded-full px-4 md:py-4 py-[1.2rem] outline-black-200"
                    placeholder="Search your mentors or categorize"
                  ></input>
                  <div className="absolute right-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-[#490669] flex flex-row gap-2 justify-center items-center md:py-1 p-1 md:px-2 rounded-full">      
                    <span className="md:inline hidden text-white font-semibold"><FaSearch color="white" className="text-lg" /></span>
                  </div>
              </div>
        </div>
        <div className="grid gap-5 grid-cols-7 grid-rows-3">
             {techFields.map(techField=>{
              return(
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={categorize}>
                  {techField}
                </button>
              )
             })}
        </div>
        <div className="grid gap-3 grid-cols-3 grid-rows-auto">
          {mentorData.map((mentor:any)=>{
                if(mentor.tech.split(",").includes(tech)){
                    return(
                        <MentorCard3D
                            key={mentor.id}
                            firstname={mentor.firstname}
                            lastname={mentor.lastname}
                            tech={mentor.tech}
                            about={mentor.about}
                            discord={mentor.discord}
                            linkedin={mentor.linkedin}
                        />
                    )
                }
            }
            )} 
        </div>
      </div>
    </div>
  );
}

const mentorData=[
  {
      "id": "cdf4bfc7-8e50-4015-bed7-4d089c370731",
      "firstname": "Vandit",
      "lastname": "Singh",
      "tech": "Java",
      "about": "I paly football in my freetime",
      "discord": "vandit.dis",
      "linkedin": "vandit.link",
      "createdAt": "2023-12-17T08:46:28.395459Z"
  },
  {
      "id": "4126ab8a-c560-4b76-8d02-228b2a25e846",
      "firstname": "Arjun",
      "lastname": "Singh",
      "tech": "Python",
      "about": "I paly football in my freetime",
      "discord": "arjun.dis",
      "linkedin": "arjun.link",
      "createdAt": "2023-12-17T08:46:57.72791Z"
  },
  {
      "id": "b3b33e5f-3740-41cc-84e6-bb2c4bd4d5bf",
      "firstname": "szdgSDvSDVSas",
      "lastname": "Sinsszdvsvddgvasdvgh",
      "tech": "PythSDVSDon",
      "about": "I paly football in my freetime",
      "discord": "arsdvSsdvsdvjun.dis",
      "linkedin": "asdvVSrjusdvsdvsdn.link",
      "createdAt": "2023-12-17T16:42:22.241931Z"
  },
  {
      "id": "08805107-3b49-43c7-bfcd-6285fd273737",
      "firstname": "K",
      "lastname": "C",
      "tech": "Game Dev",
      "about": "I paly football in my freetime",
      "discord": "kc.dis",
      "linkedin": "kc.link",
      "createdAt": "2023-12-23T11:26:13.136668Z"
  },
  {
      "id": "56b357a1-503e-4265-8a61-14400aad37c8",
      "firstname": "Kunal",
      "lastname": "Singh",
      "tech": "Data Science",
      "about": "I paly football in my freetime",
      "discord": "kunal.dis",
      "linkedin": "kunal.link",
      "createdAt": "2023-12-23T11:27:05.354344Z"
  },
  {
      "id": "8ae03e5d-668d-4905-937f-dffce5a8833b",
      "firstname": "Saksham",
      "lastname": "Singh",
      "tech": "Frontend, React",
      "about": "I paly football in my freetime",
      "discord": "saksham.dis",
      "linkedin": "saksham.link",
      "createdAt": "2023-12-23T11:27:45.186749Z"
  },
  {
      "id": "68565924-20ac-4d3f-9c3e-beae35e8f91b",
      "firstname": "Vashu",
      "lastname": "Singh",
      "tech": "Frontend, Moj",
      "about": "I paly football in my freetime",
      "discord": "vashu.dis",
      "linkedin": "vashu.link",
      "createdAt": "2023-12-23T11:28:16.266536Z"
  },
  {
      "id": "52ad081d-0170-44ab-a706-cf35acbd9f43",
      "firstname": "Janhvee",
      "lastname": "Singh",
      "tech": "Pr and Social",
      "about": "I paly football in my freetime",
      "discord": "janhvee.dis",
      "linkedin": "janhvee.link",
      "createdAt": "2023-12-23T11:29:05.557947Z"
  },
  {
      "id": "6bf274c7-0a73-463a-91a1-2ee287d29948",
      "firstname": "Saksham",
      "lastname": "Tyagi",
      "tech": "Open Source",
      "about": "I paly football in my freetime",
      "discord": "saksham.dis",
      "linkedin": "saksham.link",
      "createdAt": "2023-12-23T11:29:43.443506Z"
  },
  {
      "id": "8ffc2594-f4aa-4ed3-9794-49328c6d8913",
      "firstname": "Jiya",
      "lastname": "",
      "tech": "Events",
      "about": "I paly football in my freetime",
      "discord": "jiya.dis",
      "linkedin": "jiya.link",
      "createdAt": "2023-12-23T11:30:10.557269Z"
  },
  {
      "id": "7b01af0d-11e4-44eb-a8e0-4f13685febfe",
      "firstname": "Rudraksh",
      "lastname": "Tyagi",
      "tech": "Linux",
      "about": "I paly football in my freetime",
      "discord": "rudraksh.dis",
      "linkedin": "rudraksh.link",
      "createdAt": "2023-12-23T11:31:00.288325Z"
  },
  {
      "id": "d79a46dd-bdbc-4ea3-b4a5-57bc6dc86ac1",
      "firstname": "Shiv",
      "lastname": "Pratap",
      "tech": "Backend",
      "about": "I paly football in my freetime",
      "discord": "shiv.dis",
      "linkedin": "shiv.link",
      "createdAt": "2023-12-23T11:31:25.42801Z"
  },
  {
      "id": "1f002439-ebf5-4e1a-a75b-b19d0e92ef13",
      "firstname": "Vedant",
      "lastname": "Kapoor",
      "tech": "Event",
      "about": "I paly football in my freetime",
      "discord": "vedant.dis",
      "linkedin": "vedant.link",
      "createdAt": "2023-12-23T11:31:51.549773Z"
  },
  {
      "id": "097dcaad-7682-4c4e-a397-0830a6eccc7e",
      "firstname": "Vidhi",
      "lastname": "Jain",
      "tech": "Backend",
      "about": "I paly football in my freetime",
      "discord": "vidhi.dis",
      "linkedin": "vidhi.link",
      "createdAt": "2023-12-23T11:32:27.382408Z"
  },
  {
      "id": "23c7f082-5570-4f51-92d1-ba0cdfae4fdf",
      "firstname": "Ansh",
      "lastname": "Shukla",
      "tech": "",
      "about": "I paly football in my freetime",
      "discord": "ansh.dis",
      "linkedin": "ansh.link",
      "createdAt": "2023-12-23T11:32:52.005763Z"
  },
  {
      "id": "daac5a55-261e-4bc9-ae3d-9d056cfe0a10",
      "firstname": "Dev",
      "lastname": "Bhati",
      "tech": "Anime",
      "about": "I paly football in my freetime",
      "discord": "dev.dis",
      "linkedin": "bhati.link",
      "createdAt": "2023-12-23T11:33:28.919723Z"
  },
  {
      "id": "8475ab77-2bb4-4199-9791-7d016b03886f",
      "firstname": "Pooja",
      "lastname": "Rawat",
      "tech": "Graphics",
      "about": "I paly football in my freetime",
      "discord": "pooja.dis",
      "linkedin": "pooja.link",
      "createdAt": "2023-12-23T11:34:03.432612Z"
  },
  {
      "id": "faaac5b3-21fa-4275-b6bc-34489fc17fc6",
      "firstname": "Riya",
      "lastname": "Arora",
      "tech": "Graphics",
      "about": "I paly football in my freetime",
      "discord": "riya.dis",
      "linkedin": "riya.link",
      "createdAt": "2023-12-23T11:34:29.012371Z"
  },
  {
      "id": "765a05c6-f33c-4dcb-ab87-9e9f4ae821bd",
      "firstname": "Riya",
      "lastname": "Sharma",
      "tech": "Events",
      "about": "I paly football in my freetime",
      "discord": "riya.dis",
      "linkedin": "riya.link",
      "createdAt": "2023-12-23T11:34:45.905443Z"
  },
  {
      "id": "ced3fa61-678b-406b-a51d-94e9b4912e66",
      "firstname": "Shreyash",
      "lastname": "Singh",
      "tech": "Graphics",
      "about": "I paly football in my freetime",
      "discord": "shreyash.dis",
      "linkedin": "shreyash.link",
      "createdAt": "2023-12-23T11:35:20.01741Z"
  },
  {
      "id": "798b8300-376e-45e9-b27b-5ccc3b0cc017",
      "firstname": "Somdutta",
      "lastname": "",
      "tech": "Graphics",
      "about": "I paly football in my freetime",
      "discord": "somdutta.dis",
      "linkedin": "somdutta.link",
      "createdAt": "2023-12-23T11:35:49.030599Z"
  },
  {
      "id": "5cf56838-ccf1-46cd-a870-dced93cd2fdf",
      "firstname": "Tanuj",
      "lastname": "Bhatia",
      "tech": "CyberSec",
      "about": "I paly football in my freetime",
      "discord": "tanuj.dis",
      "linkedin": "tanuj.link",
      "createdAt": "2023-12-23T11:36:41.355513Z"
  },
  {
      "id": "e53f0476-eb8a-4e1a-8684-294f7b87fd0c",
      "firstname": "Tanush",
      "lastname": "Chauhan",
      "tech": "CyberSec",
      "about": "I paly football in my freetime",
      "discord": "tanush.dis",
      "linkedin": "tanush.link",
      "createdAt": "2023-12-23T11:37:14.562578Z"
  },
  {
      "id": "f6d53708-6be0-4fee-8bd3-921c2e98571b",
      "firstname": "Yashika",
      "lastname": "",
      "tech": "Frontend",
      "about": "I paly football in my freetime",
      "discord": "yashika.dis",
      "linkedin": "yashika.link",
      "createdAt": "2023-12-23T11:37:48.1084Z"
  },
  {
      "id": "abbf26f3-215a-4b1b-8b54-c04dd4669443",
      "firstname": "Anvesh",
      "lastname": "Mishra",
      "tech": "Backend",
      "about": "I paly football in my freetime",
      "discord": "anvesh.dis",
      "linkedin": "anvesh.link",
      "createdAt": "2023-12-23T11:39:29.655345Z"
  },
  {
      "id": "9bed162a-3c3f-42f9-9137-be8a90412862",
      "firstname": "Dewank",
      "lastname": "",
      "tech": "Frontend",
      "about": "I paly football in my freetime",
      "discord": "dewank.dis",
      "linkedin": "dewank.link",
      "createdAt": "2023-12-23T11:39:56.349035Z"
  },
  {
      "id": "d7751575-64be-41fe-807d-0298a59d6d8e",
      "firstname": "Sarthak",
      "lastname": "Negi",
      "tech": "Frontend",
      "about": "I paly football in my freetime",
      "discord": "Sarthak.dis",
      "linkedin": "sarthak.link",
      "createdAt": "2023-12-23T11:40:20.81136Z"
  },
  {
      "id": "e61bb54a-86c1-4e52-8514-61468efd830a",
      "firstname": "Aparmit",
      "lastname": "Rathore",
      "tech": "Event",
      "about": "I paly football in my freetime",
      "discord": "aparmit.dis",
      "linkedin": "aparmit.link",
      "createdAt": "2023-12-23T11:40:47.372932Z"
  },
  {
      "id": "adba2d72-8da8-4435-ab2e-666015dde919",
      "firstname": "Bhumika",
      "lastname": "Arora",
      "tech": "Frontend",
      "about": "I paly football in my freetime",
      "discord": "bhumika.dis",
      "linkedin": "bhumika.link",
      "createdAt": "2023-12-23T11:41:17.263494Z"
  },
  {
      "id": "d91f1565-c983-4236-9491-b4fa0a3cbbcf",
      "firstname": "Ishita",
      "lastname": "Rishi",
      "tech": "Frontend",
      "about": "I paly football in my freetime",
      "discord": "ishita.dis",
      "linkedin": "ishita.link",
      "createdAt": "2023-12-23T11:41:47.05489Z"
  },
  {
      "id": "e8e4fd9f-78ae-4182-9a10-61495621d4e1",
      "firstname": "Krati",
      "lastname": "Agrawal",
      "tech": "Frontend",
      "about": "I paly football in my freetime",
      "discord": "krati.dis",
      "linkedin": "krati.link",
      "createdAt": "2023-12-23T11:42:21.548718Z"
  },
  {
      "id": "8797ef09-35e3-4a5e-b0d9-4aa66f58b811",
      "firstname": "Manav",
      "lastname": "Aggrawal",
      "tech": "Devops",
      "about": "I paly football in my freetime",
      "discord": "manav.dis",
      "linkedin": "manav.link",
      "createdAt": "2023-12-23T11:42:51.405924Z"
  },
  {
      "id": "99b173ee-7fe8-4a28-98db-482d41d5a099",
      "firstname": "Ansh",
      "lastname": "Saksena",
      "tech": "Web3",
      "about": "I paly football in my freetime",
      "discord": "ansh.dis",
      "linkedin": "ansh.link",
      "createdAt": "2023-12-23T11:43:31.278213Z"
  },
  {
      "id": "00cf9757-b587-4233-bbc7-ae19ef2caad2",
      "firstname": "Ishan",
      "lastname": "Jindal",
      "tech": "Web3",
      "about": "I paly football in my freetime",
      "discord": "ishan.dis",
      "linkedin": "ishan.link",
      "createdAt": "2023-12-23T11:44:02.856819Z"
  },
  {
      "id": "bc186568-40e0-415b-8c7e-553a5d16be1b",
      "firstname": "Mayank",
      "lastname": "Singh",
      "tech": "Web3",
      "about": "I paly football in my freetime",
      "discord": "mayank.dis",
      "linkedin": "mayank.link",
      "createdAt": "2023-12-23T11:44:25.120362Z"
  },
  {
      "id": "4d5e5369-2884-4ed8-b2d3-0d5540e792b4",
      "firstname": "Saijal",
      "lastname": "Sawhney",
      "tech": "Web3",
      "about": "I paly football in my freetime",
      "discord": "saijal.dis",
      "linkedin": "saijal.link",
      "createdAt": "2023-12-23T11:45:18.10578Z"
  },
  {
      "id": "2183c64d-da94-4bf7-8c1b-566f969274c9",
      "firstname": "Shlok",
      "lastname": "",
      "tech": "Frontend",
      "about": "I paly football in my freetime",
      "discord": "shlok.dis",
      "linkedin": "shlok.link",
      "createdAt": "2023-12-23T11:45:48.493103Z"
  },
  {
      "id": "d1c471ac-a7f2-4fa6-ab8e-d4946e1601c3",
      "firstname": "Shubhankar",
      "lastname": "Gupta",
      "tech": "Frontend",
      "about": "I paly football in my freetime",
      "discord": "shubhankar.dis",
      "linkedin": "shubhankar.link",
      "createdAt": "2023-12-23T11:46:24.398357Z"
  },
  {
      "id": "e3e306e6-57ff-4e4c-af86-b4ce315129aa",
      "firstname": "Swarnima",
      "lastname": "",
      "tech": "Frontend",
      "about": "I paly football in my freetime",
      "discord": "swarnima.dis",
      "linkedin": "swarnima.link",
      "createdAt": "2023-12-23T11:46:49.043088Z"
  },
  {
      "id": "84246e93-5444-4a94-9df1-c17038a97400",
      "firstname": "Tejus",
      "lastname": "",
      "tech": "Graphics",
      "about": "I paly football in my freetime",
      "discord": "tejus.dis",
      "linkedin": "tejus.link",
      "createdAt": "2023-12-23T11:47:13.325725Z"
  },
  {
      "id": "22d54dcb-0ab4-41f0-8660-4ad47c348211",
      "firstname": "Vanshika",
      "lastname": "Kakkar",
      "tech": "Graphics",
      "about": "I paly football in my freetime",
      "discord": "vanshika.dis",
      "linkedin": "vanshika.link",
      "createdAt": "2023-12-23T11:47:53.223551Z"
  }
]

export default Participate;
