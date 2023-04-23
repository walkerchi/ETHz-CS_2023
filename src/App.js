import { useEffect } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';
import RevealChalkboard from 'reveal.js-plugins/chalkboard/plugin.js';
import RevealCustomControls from 'reveal.js-plugins/customcontrols/plugin.js';
import Front from "./component/Front";
import End from "./component/End";
import Introduction from "./component/Introduction";
import IntroMotto from "./component/Introduction/Motto"
import Background from "./component/Background";
import BackReact  from "./component/Background/Reaction"
import Devices from "./component/Devices";
import DevTokamak from "./component/Devices/Tokamak";
import DevStellarator from "./component/Devices/Stellarator";
import DevPinch from "./component/Devices/Pinch";
import DevRFC from "./component/Devices/RFC";
import Tokamak from "./component/Tokamak";
import TokDev from "./component/Tokamak/Development";
import TokVideo from "./component/Tokamak/Video";
import Conclusion from "./component/Conclusion";
import DefaultSection from './component/DefaultSection';
import DefaultPage from './component/DefaultSection/DefaultPage';

import data from "./pages/data";
import ETHLogo from "./svg/ethz"
import styles from "./App.module.css";

function renderPages(data){
 
  return data.map((item, index)=>{
    // if type is not in item, return the default page
    if(!item.type){
      return <DefaultPage key={index} markdown={item.target}/>
    }else if(item.type === "intro-motto"){
      return <IntroMotto key={index} markdown={item.target}/>
    }else if(item.type === "back-reaction"){
      return <BackReact key={index} markdown={item.target}/>
    }else if(item.type === "dev-tokamak"){
      return <DevTokamak key={index} markdown={item.target}/>
    }else if(item.type === "dev-stellarator"){
      return <DevStellarator key={index} markdown={item.target}/>
    }else if(item.type === "dev-pinch"){
      return <DevPinch key={index} markdown={item.target}/>
    }else if(item.type === "dev-rfc"){
      return <DevRFC key={index} markdown={item.target}/>
    }else if(item.type === "tok-dev"){
      return <TokDev key={index} markdown={item.target}/>
    }else if(item.type === "tok-video"){
      return <TokVideo key={index} markdown={item.target}/>
    }else{
      return <DefaultPage key={index} markdown={item.target}/>
    }
  })
}

function renderSections(data){
 
  return data.map((item, index)=>{
    console.log(item)
    if(item.section === "front"){
      return <Front key={index}/>
    } else if(item.section === "end"){
      return <End key={index}/>
    } else if(item.section === "introduction"){
      return (<Introduction key={index}>{renderPages(item.children)}</Introduction>)
    } else if(item.section === "background"){
      return (<Background key={index}>{renderPages(item.children)}</Background>)
    } else if(item.section === "tokamak"){
      return (<Tokamak key={index}>{renderPages(item.children)}</Tokamak>)
    } else if(item.section === "devices"){
      return (<Devices key={index}>{renderPages(item.children)}</Devices>)
    } else if(item.section === "conclusion"){
      return (<Conclusion key={index}>{renderPages(item.children)}</Conclusion>)
    } else {
      return (<DefaultSection key={index}>{renderPages(item.children)}</DefaultSection>)
    }
  })
}


function App() {
  useEffect(()=>{
    let deck = new Reveal({
      katex: {
        // local:'node_modules/katex',
        version:"0.16.6",
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
       ],
       extensions:['mhchem'],
       ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre']
      },
      plugins: [ 
      Markdown,
      RevealMath.KaTeX ,
      RevealChalkboard,
      RevealCustomControls 
    ]
   })
   deck.initialize();
  },[])

  return (
    <div className="reveal">
      <div className={`slides ${styles.container}`}> 
        {renderSections(data)}
      </div>
      <div className={styles.logo}>
        <ETHLogo />
      </div>
    </div>
  );
}

export default App;
