//import images
import avatar1 from "../../images/users/avatar-1.jpg";
import avatar2 from "../../images/users/avatar-2.jpg";
import avatar3 from "../../images/users/avatar-3.jpg";
import avatar4 from "../../images/users/avatar-4.jpg";
import avatar5 from "../../images/users/avatar-5.jpg";
import avatar6 from "../../images/users/avatar-6.jpg";
import avatar7 from "../../images/users/avatar-7.jpg";
import avatar8 from "../../images/users/avatar-8.jpg";

const jobs = [
    {
        id: 1,
        jobId: "#SK2540",        
        jobTitle: "Magento Developer",
        companyName: "Themesbrand",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Full Time",
        typeBadgeColor: "success",
        postedDate: "02 June 2021",
        lastDate: "25 June 2021",
        status: "Active",
        statusBadgeColor: "success",
    },
    {
        id: 2,
        jobId: "#SK2541",        
        jobTitle: "Product Designer",
        companyName: "Web Technology pvt.ltd",
        location: "California",
        experience: "1-2 Years",
        position: 3,
        type: "Part Time",
        typeBadgeColor: "danger",
        postedDate: "15 June 2021",
        lastDate: "28 June 2021",
        status: "New",
        statusBadgeColor: "info",
    },
    {
        id: 3,
        jobId: "#SK2542",        
        jobTitle: "Marketing Director",
        companyName: "Creative Agency",
        location: "Phoenix",
        experience: "-",
        position: 5,
        type: "Full Time",
        typeBadgeColor: "success",
        postedDate: "02 June 2021",
        lastDate: "25 June 2021",
        status: "Close",
        statusBadgeColor: "danger",
    },
    {
        id: 4,
        jobId: "#SK2543",        
        jobTitle: "HTML Developer",
        companyName: "Web Technology pvt.ltd",
        location: "California",
        experience: "0-4 Years",
        position: 8,
        type: "Full Time",
        typeBadgeColor: "success",
        postedDate: "02 June 2021",
        lastDate: "25 June 2021",
        status: "Active",
        statusBadgeColor: "success",
    },
    {
        id: 5,
        jobId: "#SK2544",       
        jobTitle: "Product Sales Specialist",
        companyName: "Skote Technology pvt.Ltd",
        location: "Louisiana",
        experience: "5+ Years",
        position: 1,
        type: "Part Time",
        typeBadgeColor: "danger",
        postedDate: "02 June 2021",
        lastDate: "25 June 2021",
        status: "New",
        statusBadgeColor: "info",
    },
    {
        id: 6,
        jobId: "#SK2545",       
        jobTitle: "Magento Developer",
        companyName: "New Technology pvt.ltd",
        location: "Oakridge Lane Richardson",
        experience: "0-2 Years",
        position: 2,
        type: "Freelance",
        typeBadgeColor: "info",
        postedDate: "02 June 2021",
        lastDate: "25 June 2021",
        status: "New",
        statusBadgeColor: "info",
    },
    {
        id: 7,
        jobId: "#SK2546",       
        jobTitle: "Business Associate",
        companyName: "Web Technology pvt.ltd",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Full Time",
        typeBadgeColor: "success",
        postedDate: "02 June 2021",
        lastDate: "25 June 2021",
        status: "Active",
        statusBadgeColor: "success",
    },
    {
        id: 8,
        jobId: "#SK2547",        
        jobTitle: "Magento Developer",
        companyName: "Adobe Agency",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Full Time",
        typeBadgeColor: "success",
        postedDate: "02 June 2021",
        lastDate: "25 June 2021",
        status: "Close",
        statusBadgeColor: "danger",
    },
    {
        id: 9,
        jobId: "#SK2548",       
        jobTitle: "HTML Developer",
        companyName: "Web Technology pvt.ltd",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Part Time",
        typeBadgeColor: "danger",
        postedDate: "02 June 2021",
        lastDate: "25 June 2021",
        status: "New",
        statusBadgeColor: "info",
    },
    {
        id: 10,
        jobId: "#SK2549",        
        jobTitle: "Marketing Director",
        companyName: "Web Technology pvt.ltd",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Internship",
        typeBadgeColor: "warning",
        postedDate: "02 June 2021",
        lastDate: "25 June 2021",
        status: "Active",
        statusBadgeColor: "success",
    },
];

const jobListCandidate = [
    {
        id: 1,
        img: avatar1,
        name: "Steven Franklin",
        designation: "UI/UX Designer",
        location: "Louisiana",
        experience: "38",
        skills: ["Bootstrap", "HTML", "CSS"],
        type: "Full Time",
    },
    {
        id: 2,
        img: avatar2,
        name: "Dolores Minter",
        designation: "Assistant / Shope Keeper",
        location: "Hong-Kong",
        experience: "25",
        skills: ["Shope", "Assistant"],
        type: "Freelance",
    },
    {
        id: 3,
        img: avatar3,
        name: "Charles Brown",
        designation: "Web Designer",
        location: "Finlande",
        experience: "24",
        skills: ["Bootstrap", "HTML", "SASS"],
        type: "Part Time",
    },
    {
        id: 4,
        img: avatar4,
        name: "Bonnie Harney",
        designation: "Web Developer",
        location: "France",
        experience: "47",
        skills: ["MYSQL", "PHP", "Laravel"],
        type: "Internship",
    },
    {
        id: 5,
        img: avatar5,
        name: "Stephen Hadley",
        designation: "Graphic Designer",
        location: "Danemark",
        experience: "83",
        skills: ["Figma", "Adobe XD", "Sketch"],
        type: "Internship",
    },
    {
        id: 6,
        img: avatar6,
        name: "Henry Wells",
        designation: "Executive, HR Operations",
        location: "Danemark",
        experience: "65",
        skills: ["HR", "Executive", "Professional"],
        type: "Internship",
    },
    {
        id: 7,
        img: avatar7,
        name: "Adam Miller",
        designation: "Education Training",
        location: "Colombie",
        experience: "38",
        skills: ["Teaching", "React", "Training"],
        type: "Full Time",
    },
    {
        id: 8,
        img: avatar8,
        name: "Keith Gonzales",
        designation: "Product Manager",
        location: "Brazil",
        experience: "50",
        skills: ["Manager", "Business", "Product"],
        type: "Freelance",
    },
];

const jobApply = [
    {
        id: 10,
        no: 10,
        jobTitle: "Magento Developer",
        companyName: "Web Technology pvt.Ltd",
        type: "Internship",
        applyDate: "02 June 2021",
        status: "Active",
    },
    {
        id: 9,
        no: 9,
        jobTitle: "Magento Developer",
        companyName: "Adobe Agency",
        type: "Freelance",
        applyDate: "02 June 2021",
        status: "New",
    },
    {
        id: 8,
        no: 8,
        jobTitle: "Magento Developer",
        companyName: "Web Technology pvt.Ltd",
        type: "Full Time",
        applyDate: "02 June 2021",
        status: "Close",
    },
    {
        id: 7,
        no: 7,
        jobTitle: "Magento Developer",
        companyName: "Web Technology pvt.Ltd",
        type: "Part Time",
        applyDate: "25 June 2021",
        status: "Active",
    },
    {
        id: 6,
        no: 6,
        jobTitle: "Magento Developer",
        companyName: "Themesbrand",
        type: "Freelance",
        applyDate: "25 June 2021",
        status: "Close",
    },
    {
        id: 5,
        no: 5,
        jobTitle: "Product Sales Specialist",
        companyName: "New Technology pvt.Ltd",
        type: "Part Time",
        applyDate: "25 June 2021",
        status: "New",
    },
    {
        id: 4,
        no: 4,
        jobTitle: "HTML Developer",
        companyName: "Skote Technology pvt.Ltd",
        type: "Full Time",
        applyDate: "02 June 2021",
        status: "Active",
    },
    {
        id: 3,
        no: 3,
        jobTitle: "Magento Developer",
        companyName: "Web Technology pvt.Ltd",
        type: "Full Time",
        applyDate: "02 June 2021",
        status: "Close",
    },
    {
        id: 2,
        no: 2,
        jobTitle: "Apple School & College",
        companyName: "Themesbrand",
        type: "Part Time",
        applyDate: "15 June 2021",
        status: "New",
    },
    {
        id: 1,
        no: 1,
        jobTitle: "Magento Developer",
        companyName: "Creative Agency",
        type: "Full Time",
        applyDate: "02 June 2021",
        status: "Active",
    },
];
export { jobs, jobListCandidate, jobApply };