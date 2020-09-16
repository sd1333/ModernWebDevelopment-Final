import React, { Component } from 'react';

class WelcomeMessage extends Component {
  render() {
    return (
      <div className="welcomemessage">
        <div className=" container-fluid text-center mt-5">
          <div className="row">
            <div className="col-md-12 col-sm-6">
              <h6>እንኳን በደኅና መጡ </h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                illo sequi necessitatibus. Aperiam iure, aliquid quos doloremque
                labore voluptates eligendi fugiat accusamus modi explicabo
                veniam omnis autem saepe vel officiis. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Magni exercitationem ullam
                earum, ipsam numquam tempore architecto recusandae, ipsa tenetur
                porro eveniet incidunt culpa iste iusto possimus quos temporibus
                dolor! Assumenda?
              </p>
              <button className="btn btn-light px-5 py-2">Read more</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WelcomeMessage;
