import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="container bg">
    <div className="sec-title">
       <div className="row">
          <h3>Message Center</h3>
          <button type="button" className="btn btn-danger btnred float-right">Create new request</button>
       </div>

    </div>
      <div className="container inner-bg pad-inner">
        <div className="row align-items-start pad20">
          <div className="col-3 inner-box pad20">
          
          </div>
          <div className="col-9 inner-box ">
            <div className="pad20">
             <div className="row br-top">
                <div className="col-7">
                  <div className="row sec-one">
                    <h5>Cancel / recall payment, GBP 1,000.00</h5>
                    <h6>1234567890123456 (GB), KUIML Business Company</h6>
                  </div>
                  <div className="row list-li">
                    <ul>
                        <li>
                            <h5>SET29383ABCH</h5>
                            <h6>Request reference</h6> 
                        </li>
                        <li>
                            <h5>Category</h5>
                            <h6>Payment</h6> 
                        </li>
                        <li className="pending">
                            <h5>Request status</h5>
                            <h6><FontAwesomeIcon icon={faCoffee} /> Pending authorisation</h6> 
                        </li>
                    </ul>
                  </div>

                </div>
                <div className="col-5">
                  <div className="row sec-two float-right">
                    <ul className="pos-li">
                        <li className="br-none">
                            <FontAwesomeIcon icon={faCoffee} />
                        </li>
                        <li >
                            <FontAwesomeIcon icon={faCoffee} />
                        </li>
                        <li className="br-none pad0">
                            <button type="button" class="btn btn-default">Reject</button>
                            <button type="button" class="btn btn-default">Authorize</button>
                        </li>
                    </ul>
                  </div>
                  <div className="row float-right link">
                      <a href="#">Full details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
