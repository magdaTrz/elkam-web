import Navbar from "../../components/Navbar.js"
import Footer from "../../components/Footer.js"
import ServiceOne from "../../components/ServiceOne.js"
import img1 from "../../../src/assets/1montazinstalacjielektrycznej/2/2.jpg";
import img2 from "../../../src/assets/1montazinstalacjielektrycznej/2/1.jpg";

function OsprzetElektryczny() {
    return (
        <>
        <Navbar/>
        <ServiceOne
            title = "Montaż i naprawa instalacji elektrycznych "
            text1 = "Wykonujemy kompleksowy montaż osprzętu elektrycznego: gniazdek, włączników oraz instalacji oświetleniowych zarówno wewnętrznych, jak i zewnętrznych. W naszej pracy liczy się przede wszystkim dokładność oraz precyzja wykonania zlecenia. "
            text2 = "Realizujemy zlecenia zgodnie z projektami wnętrzarskimi oraz z zaleceniami klienta. Pracujemy na materiałach powierzonych od klienta, jak również na materiałach dostarczanych przez naszą firmę."
            serviceImg1 = {img1}
            serviceImg2 = {img2}
        />
        <Footer/>
        </>
    )
}

export default OsprzetElektryczny;