
import IntroIntroMD from "./introduction/introduction.md";
import IntroMottoMD from "./introduction/motto.md";
import BackReactionMD from "./background/reactions.md";
import BackTripleMD from "./background/triple_product.md";
import BackBindMD from "./background/binding_energy.md";
import DevTokIntroMD from "./devices/tokamak/introduction.md";
import DevTokGovEqMD from "./devices/tokamak/governing_equation.md";
import DevTokDevMD from "./devices/tokamak/development.md";
import DevTokCentMD from "./devices/tokamak/central_solennoid_coils.md";
import DevTokPolMD from "./devices/tokamak/poloidal_coils.md";
import DevTokDivMD from "./devices/tokamak/divertor.md";
import DevTokVideoMD from "./devices/tokamak/video.md";
import DevSteIntroMD from "./devices/stellarator/introduction.md";
import DevPinchGovEqMD from "./devices/pinch/governing_equation.md";
import DevHelionMD from "./devices/helion.md";
import DevGeneralMD from "./devices/general_fusion.md";
import DevRFCMD from "./devices/reverse_field_configuration.md";
import ConcChallMD from "./conclusion/challenges.md";
import ConcRefMD from "./conclusion/references.md";
import ConcFutMD from "./conclusion/future.md";

const data = [
    {
        section: "front"
    },
    {
        section:"introduction",
        children:[
            {
                type:"intro-intro",
                target: IntroIntroMD
            },
            {
                type:"intro-motto",
                target: IntroMottoMD
            }
        ]
    },
    {
        section:"background",
        children:[
            {
                type:"back-reaction",
                target:BackTripleMD
            },
            {
                type:"back-triple",
                target:BackReactionMD
            },
            {
                type:"back-bind",
                target:BackBindMD
            }
        ]
    },
    {
        section:"devices",
        children:[
            {
                type:"dev-tokamak",
                target:DevTokIntroMD
            },
            {
                type:"dev-stellarator",
                target:DevSteIntroMD
            },
            {
                type:"dev-pinch",
                target:DevPinchGovEqMD
            },
            {
                type:"dev-rfc",
                target:DevRFCMD
            },
            {
                type:"dev-general",
                target:DevGeneralMD
            },
            {
                type:"dev-helion",
                target:DevHelionMD
            }
        ]
    },
    {
        section:"tokamak",
        children:[
            {
                type:"tok-gov-eq",
                target:DevTokGovEqMD
            },
            {
                type:"tok-cent",
                target:DevTokCentMD
            },
            {
                type:"tok-pol",
                target:DevTokPolMD
            },
            {
                type:"tok-div",
                target:DevTokDivMD
            },
            {
                type:"tok-dev",
                target:DevTokDevMD
            },
            {
                type:"tok-video",
                target:DevTokVideoMD
            }
        ]
    },
    {
        section:"conclusion",
        children:[
            {
                type:"conc-challenges",
                target:ConcChallMD
            },
            {
                type:"conc-future",
                target:ConcFutMD
            },
            {
                type:"conc-references",
                target:ConcRefMD
            },

        ]
    },
    {
        section: "end"
    },
]


export default data;