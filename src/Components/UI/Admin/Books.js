import React from 'react';

import { connect } from 'react-redux';
import { fetchAsync, deltesinglebook } from '../../../stores/actions';
import { Link } from 'react-router-dom';

class Books extends React.Component {
  componentDidMount() {
    // feches list of all book from the database it is a function call from dispatch.
    this.props.getallbook();
  }

  deleteventHandler(event, id) {
    event.preventDefault();
    this.props.deltesinglebook1(id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Total stock:{this.props.admin.book.length}</h2>
        <div className="churchshop mt-3">
          <div className="container text-center">
            <div className="card-columns">
              {/* //get all  the data from my listofbook reducer (state) and display it on th css card */}

              {this.props.admin.book.map((item) => (
                <div
                  key={item._id}
                  className="card border-20"
                  style={{ width: '18rem' }}
                >
                  <img
                    className="card-img"
                    src={item.imageurl}
                    alt={item.title}
                  />
                  <div className="card-body text-center">
                    <h4>$ {item.price}</h4>
                  </div>
                  {/* link , id - is there to let me  fech specific book  */}
                  <Link to={`/admin/update/${item._id}`}> edit </Link>

                  <hr />

                  {/* gets the id of each item from the list of the loop and fech from db and delets  */}
                  <button
                    onClick={(event) => {
                      this.deleteventHandler(event, item._id);
                    }}
                    className="primary btn-sm"
                  >
                    Delete
                  </button>
                  <br></br>
                  {/* link , id - is there to let me  fech specific book  */}
                  <Link to={`/itemdetail/${item._id}`}>show detail</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Extracting Data with mapStateToProps
const mapstateprops = (state) => {
  return { ...state };
};
// created functions that dispatch when called,and pass those functions as props to my component.
const mapDispatchToProps = (dispatch) => {
  return {
    //feches all the book from db // in action
    getallbook: () => dispatch(fetchAsync()),
    deltesinglebook1: (id) => dispatch(deltesinglebook(id)),
  };
};

// connects a React component to a Redux store.
export default connect(mapstateprops, mapDispatchToProps)(Books);
