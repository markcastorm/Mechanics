import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import IndividualService from "../pages/Services/individual-services/individualService";
import Career from "../pages/career/Career";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import TermsOfUse from "../pages/TermsOfUse/TermsOfUse";
import LayoutWithPreloader from "../Components/LayoutWithPreloader";

const routes = [
    {
        element: <LayoutWithPreloader />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/services/:slug',
                element: <IndividualService/>
            },
            {
                path: '/careers',
                element: <Career/>
            },
            {
                path: '/blogs',
                element: <ComingSoon pageTitle="Blogs Coming Soon" description="We're building an amazing blog filled with automotive tips, maintenance guides, and industry insights. Stay tuned!" />
            },
            {
                path: '/terms-of-use',
                element: <TermsOfUse/>
            },
        ]
    }
]


export default routes;