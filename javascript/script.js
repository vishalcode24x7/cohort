const users = [
    {
        fullName: "Emma Johnson",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        profession: "Frontend Developer",
        description:
            "Passionate about building responsive and user-friendly web applications.",
        tags: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        fullName: "Michael Brown",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        profession: "UI/UX Designer",
        description:
            "Creates intuitive digital experiences with a focus on usability and aesthetics.",
        tags: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
    },
    {
        fullName: "Sophia Williams",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        profession: "Content Writer",
        description:
            "Specializes in creating engaging blog posts and marketing content.",
        tags: ["Writing", "SEO", "Blogging", "Marketing"]
    },
    {
        fullName: "Daniel Martinez",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        profession: "Backend Developer",
        description:
            "Develops scalable APIs and server-side applications.",
        tags: ["Node.js", "Express", "MongoDB", "REST API"]
    },
    {
        fullName: "Olivia Davis",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        profession: "Data Analyst",
        description:
            "Transforms raw data into actionable insights for business growth.",
        tags: ["Python", "SQL", "Power BI", "Data Visualization"]
    }
];

let sum = '';

users.forEach(function (elem) {
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

let main = document.querySelector('main');
main.innerHTML = sum;