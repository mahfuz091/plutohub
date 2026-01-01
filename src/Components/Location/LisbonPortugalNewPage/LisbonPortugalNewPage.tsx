import Boost from "../Boost/Boost";
import ClientSay from "../ClientSay/ClientSay";
import Contact from "../Contact/Contact";
import Faq from "../Faq/Faq";
import IndustriesExpertise from "../IndustriesExpertise/IndustriesExpertise";
import NumberLoc from "../NumberLoc/NumberLoc";
import Process from "../Process/Process";
import Range from "../Range/Range";
import RecentWork from "../RecentWork/RecentWork";
import Banner from "./Banner";
import BrandImages from "./BrandImages";



const LisbonPortugalNewPage = () => {
    const customServices = [
        {
            img: "/assets/images/web/red.png",
            title: "Custom Web Design",
            description: "We design custom websites that reflect your brand identity and speak directly to your audience. Every layout is crafted with clarity, usability, and business goals in mind, ensuring your website looks distinctive and performs effectively.",
        },
        {
            img: "/assets/images/web/re-design.png",
            title: "Website Redesign",
            description: "Outdated websites hold businesses back. Our redesign service focuses on modern visuals, improved structure, and better user flow to help your website feel fresh, relevant, and aligned with current user expectations.",
        },
        {
            img: "/assets/images/web/website-design.png",
            title: "Website UI/UX Design",
            description: "Great websites are built on a strong user experience. We design intuitive interfaces with clear navigation, balanced layouts, and responsive interactions so visitors can move effortlessly and take action with confidence.",
        },
        {
            img: "/assets/images/web/responsive-design.png",
            title: "Responsive Website Design",
            description: "Your website should perform consistently across all devices. We design responsive websites that adapt smoothly to desktops, tablets, and mobile screens, delivering a seamless experience wherever your users are.",
        },
        {
            img: "/assets/images/web/CRO.png",
            title: "Conversion Rate Optimization (CRO)",
            description: "Design should drive results, not just impressions. Our CRO-focused web design approach improves layout structure, content flow, and call-to-action placement to help turn visitors into leads and customers.",
        },
        {
            img: "/assets/images/web/seo.png",
            title: "Search Engine Optimization (SEO))",
            description: "We design websites with SEO in mind from the start. Clean structure, fast performance, and user-friendly layouts help improve visibility, rankings, and long-term organic growth without compromising design quality.",
        }
    ];

    const customProcess = [
        {
            img: "/assets/images/web/p1.png",
            step: "Step 1",
            title: "Discovery & Business Understanding",
            desc: "We start by understanding your business, goals, audience, and challenges. This step aligns expectations and defines what success looks like for your website, whether it is lead generation, conversions, or brand positioning.",
        },
        {
            img: "/assets/images/web/p2.png",
            step: "Step 2",
            title: "Market & Competitor Research",
            desc: "We analyse competitors, industry standards, and user expectations within your market. This helps identify opportunities, gaps, and best practices, ensuring your website stands out while meeting user needs and market demands.",
        },
        {
            img: "/assets/images/web/p3.png",
            step: "Step 3",
            title: "Structure & User Flow Planning",
            desc: "Before visual design begins, we define site structure, navigation, and user flows. This step focuses on clarity and usability, making sure visitors can easily find information and move toward key actions without friction.",
        },
        {
            img: "/assets/images/web/p4.png",
            step: "Step 4",
            title: "Visual Design and Branding",
            desc: "We design high-fidelity website layouts that reflect your brand identity. Typography, colours, spacing, and visual hierarchy are refined to create a modern, consistent, and trustworthy web presence.",
        },
        {
            img: "/assets/images/web/p5.png",
            step: "Step 5",
            title: "Website Development & Implementation",
            desc: "Designs are translated into fast, responsive, and scalable websites using clean, modern code. Performance, accessibility, and cross-device compatibility are prioritised to ensure smooth real-world usage.",
        },
        {
            img: "/assets/images/web/p6.png",
            step: "Step 6",
            title: "Testing, Optimization & Launch",
            desc: "Before launch, we test across browsers and devices, refine interactions, and optimise performance. Final adjustments are made to ensure the website is reliable, user-friendly, and ready to grow with your business.",
        },

    ];


    const customFaq = [
        {
            q: "What is the typical timeline for a website design project?",
            a: "Website timelines usually range from 3 to 6 weeks. The final duration depends on project scope, number of pages, custom features, and how quickly feedback is provided."
        },
        {
            q: "Do you collaborate with Lisbon-based startups and local businesses?",
            a: "Yes. We work closely with startups, SMEs, and growing companies in Lisbon, tailoring website solutions to local market needs while maintaining international design standards."
        },
        {
            q: "Can Plutohub manage both website design and technical development?",
            a: "Yes. Our team handles the complete process, from visual design and UX planning to front-end and back-end development, ensuring smooth execution and consistency."
        },
        {
            q: "What information should I prepare before starting a website project?",
            a: "A basic overview of your business, goals, target audience, and any existing brand assets or references is enough. We help structure everything else during the discovery phase."
        },
        {
            q: "Will my website be optimised for mobile users?",
            a: "Every website we build is designed to be fully responsive, ensuring optimal performance and usability across mobile, tablet, and desktop devices."
        },
        {
            q: "How is feedback handled throughout the project?",
            a: "Feedback is collected at defined stages to keep progress smooth. We review inputs together, apply revisions efficiently, and maintain clear communication to avoid delays."
        },
    ];


    return (
        <div className="main-bg-loc">

            <Banner />
            <BrandImages />
            <Range services={customServices} title="Our Web Design Services in Lisbon, Portugal" />
            <RecentWork />
            <Process title="Our Web Design Process in Lisbon"
                description="A clear, structured process that guides websites from early understanding to launch-ready execution. Each step ensures clarity, performance, and alignment with business goals for startups and growing teams in Lisbon."
                data={customProcess} />
            <ClientSay />
            <IndustriesExpertise />
            <NumberLoc />
            <Boost />
            <Faq
                title="Frequently Asked Questions"
                data={customFaq}
            />
            <Contact />
        </div>
    );
};

export default LisbonPortugalNewPage;
