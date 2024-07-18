import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"
import WeAreMusicPartner from './Components/WeAreMusicPartner/WeAreMusicPartner.jsx';
import ExcellenceNoticed from './Components/ExcellenceNoticed/ExcellenceNoticed.jsx';
import UploadYourTracks from './Components/UploadYourTracks/UploadYourTracks.jsx';
import GetExpectFeedback from './Components/GetExpectFeedback/GetExpectFeedback.jsx';
import GetCertifFiedRecognized from './Components/GetCertifFiedRecognized/GetCertifFiedRecognized.jsx';
import RetainOwnership from './Components/RetainOwnership/RetainOwnership.jsx';
import PlanCardSec from './Components/PlansCardSec/PlanCardSec.jsx';
import FaqsSec from './Components/FaqsSec/FaqsSec.jsx';

function App() {
  return (
    <>
      <Header />
      <WeAreMusicPartner />
      <ExcellenceNoticed />
      <UploadYourTracks />
      <GetExpectFeedback/>
      <GetCertifFiedRecognized/>
      <RetainOwnership/>
      <PlanCardSec/>
      <FaqsSec/>
    </>
  );
}

export default App;
