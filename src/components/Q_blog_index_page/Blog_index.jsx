import React from 'react';
import {Component} from 'react';
import { blogDetails } from '../../actions';
import { connect } from 'react-redux';




class Blog_index extends Component {
  
  componentWillMount() {
  this.props.blogDetails()
  }
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="blog_name"> Blog </h4>
          </div>
        </div>
        { this.props.details.data ? 
          this.props.details.data.map(data => {
            return (
              <div className="row" key={data.id}>
              <div className="col-md-8">
              <div className="blog_title">{data.title} </div>
              <div className="blog_discription">{data.discription}</div>
              <div className="blog_content"> Content </div>
              <div className="blog_duration">May 31 <span> * </span> 5 m </div>
              </div>
              <div className="col-md-4"> 
              <img src={require("../../image/blog.jpg")} alt="boohoo" className="img-responsive" className="blog_image"/>
              </div>
        </div>
            )
          })
        : null }
      </div>
      ); 
  }
}

const mapStateToProps = (state) => {
  console.log("state",state)
  const { details } = state.api;
  return { details };
}
export default connect(mapStateToProps, { blogDetails }) (Blog_index);
