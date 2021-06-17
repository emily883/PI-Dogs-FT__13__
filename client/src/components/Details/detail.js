import React from 'react';
import { connect } from "react-redux";
import style from './detail.module.css';
import { getDetails } from "../../Redux/actions";

function Details (){

    return(
        <>

        </>
    )

}



function mapStateToProps(state) {
    return {
      Detail: state.details
    };
  }
  
  function mapDipatchToProps(dispatch) {
    return {
      getDetails: (id) => dispatch(getDetails(id))
    };
  }
  
  export default connect(mapStateToProps, mapDipatchToProps)(Details);
  