import './App.css';
import ButtonBootstrap from './ButtonBootstrap';
import CardCom from './CardCom';
import ButtonSUbmit from './ButtonSUbmit';
import BLackB from './BLackB';
function App() {
  return (
    <div className="App">
      <ButtonBootstrap></ButtonBootstrap>
      <div className="row d-flex mx-0 p-3 " style={{"position":'relative', "left":"100px"}}>
        <CardCom imgurl="Untitled2.jpg" titel={"WEDDINGS FLOWERS"} ></CardCom>
        <CardCom imgurl="cd.jpg" titel={"PRIVATE EVENTS"}></CardCom>
        <CardCom imgurl="cd2.jpg" titel={"BIRTHDAYS BOUQUETS"}></CardCom>
      </div>
      <BLackB></BLackB>
    </div>
  );
}

export default App;
