const careerData = {
    'ensibs': {
        title: "ENSIBS - Industrial Engineering 4.0 2025-2028",
        location: "Lorient, France",
        img: "Photo_Ecole_ENSIBS.jpg",
        desc: "Focusing on the Factory of the Future. Key modules: Industry 4.0, Automation (TIA Portal), Flow Optimization, and Lean Manufacturing. Working on projects such as Rich Web Applications and SCAP line energy modeling."
    },
    'asecna': {
        title: "CNS Unit Intern - ASECNA",
        location: "Madagascar",
        img: "ASECNA.jpg",
        desc: "Maintenance and analysis of critical aeronautical navigation equipment: SSR Radars, CVOR 431 (Thales), and NDB. Ensuring air safety through rigorous system checks."
    },
    'ist-dtss': {
        title: "DTSS in Automated Systems",
        location: "IST Madagascar",
        img: "IST.jpg",
        desc: "Specialized in Automated Systems Engineering. Mastered industrial electronics, electrotechnics, and advanced scientific methods for automation."
    },
    'lntpb': {
        title: "Quality & Maintenance Intern - LNTPB",
        location: "Madagascar",
        img: "lntpb.jpg",
        desc: "Calibration of measuring instruments (manometers) and preparation for ISO 9001 internal audits. Maintenance of electrical equipment and conformity certification."
    },
    'ist-project': {
        title: "Engineering Project - IST",
        location: "Madagascar",
        img: "IST.jpg",
        desc: "Design and implementation of a motor speed variator (MCC) controlled by PLC (API) and HMI. Managed project budgeting and technical diagrams."
    },
    'inscae': {
        title: "Business Administration Degree",
        location: "INSCAE Madagascar",
        img: "INSCAE.jpg",
        desc: "Studying Fundamental and Advanced Financial Accounting, Organizational Behavior, and Entrepreneurial Culture alongside engineering studies."
    }
};

function updateCareer(key) {
    const data = careerData[key];
    const content = document.getElementById('dynamic-content');
    
    content.style.opacity = 0;
    content.style.transform = "translateY(10px)";

    setTimeout(() => {

        document.getElementById('detail-title').innerText = data.title;
        document.getElementById('detail-location').innerText = data.location;
        document.getElementById('detail-img').src = data.img;
        document.getElementById('detail-desc').innerText = data.desc;
        

        content.style.opacity = 1;
        content.style.transform = "translateY(0)";
    }, 300);

        
    
    document.querySelectorAll('.timeline-step').forEach(step => {
        step.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    updateCareer('ensibs');
});
