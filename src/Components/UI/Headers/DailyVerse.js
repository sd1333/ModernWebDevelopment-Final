import React, { Component } from "react";
import { connect } from "react-redux";

import bibleImg from "../../../assets/starsema.jpg";
import * as actionCreator from "../../../stores/actions";

class DailyVerse extends Component {
  //fetching the bibleverses and store it on the redux state
  componentDidMount() {
    this.props.getBibleVerses();
  }
  render() {
    return (
      <div className="dailyverse">
        <div className="container-fluid d-flex justify-content-center">
          <div className="card mb-3 border-0 ml-5">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={bibleImg} className="card-img" alt="..." />
              </div>
              <div className="col-md-8 ">
                <div className="card-body ">
                  <h5 className="card-title text-center ">ግጻዌ ሚያዚያ</h5>

                  <p className="text-muted pl-3 m-0">መልእክታት</p>
                  <p className="pl-5 mb-0">ወደ ቆላስያስ ሰዎች ምዕራፍ ፩ ከቁጥር ፲፰-፳፫</p>
                  <p className="pl-5 pt-0">የጴጥሮስ መልእክት ፩ ምዕራፍ ፪ ከቁጥር ፲፫-፲፭</p>

                  <p className="text-muted pl-3  m-0">የሐዋርያት ሥራ</p>
                  <p className="pl-5 pt-0  m-0"> የሐዋርያት ሥራ ምዕራፍ ፳፬ ከቁጥር ፬-፮</p>
                  <p className="text-muted pl-3  m-0">ምስባክ</p>
                  <p className="pl-5 pt-0  m-0">መዝሙረ ዳዊት ምዕራፍ ፶፰</p>
                  <p className="text-muted pl-3 m-0">ወንጌል</p>
                  <p className="pl-5 pt-0  m-0">የሉቃስ ወንጌል ምዕራፍ ፳፪ ከቁጥር ፵፰-፶፩</p>
                  <p className="text-muted pl-3  m-0">ቅዳሴ</p>
                  <p className="pl-5 pt-0  m-0">ቅዳሴ ባስልዮስ</p>
                  {/* <p className="card-text text-center">
                    {this.props.bibleverse.text}
                  </p>
                  <div className="card-text float-right">
                    <blockquote className="blockquote">
                      <footer className="blockquote-footer">
                        <cite> {this.props.bibleverse.verse}</cite>
                      </footer>
                    </blockquote>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bibleverse: state.verses.bibleverse };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBibleVerses: () => dispatch(actionCreator.asyncVerseFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyVerse);
