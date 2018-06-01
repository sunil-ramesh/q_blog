import React from 'react';
import {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import ButtonDropdown from '../DropdownButton'
import ImageUploader from 'react-images-upload';


// import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

const renderField = ({ input, label, type, select, textarea, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const validate = values => {
    const errors = {}
    if (!values.title) {
        errors.title = 'Required'
      }
    if (!values.description) {
        errors.description = 'Required'
      }
    if (!values.content) {
        errors.content = 'Required'
      }
    if (!values.genre) {
        errors.genre = 'Required'
      }
    if (!values.readingDuration) {
        errors.readingDuration = 'Required'
      }
    return errors
  }

class CreateBlog extends Component {

  submit = (values) => {
    const blog_data = {
      title: values.title,
      description: values.description,
      content: values.content,
      genre: values.genre,
      readingDuration: values.readingDuration + "m"
    };
    console.log(blog_data);
  }


render(){
  let { fields: {title, description, content, genre, image, readingDuration}, handleSubmit, pristine, submitting } = this.props;
    return (
    <div className="container">
    <div className="row mt80">
    <div className="col-md-12 col-sm-12 col-lg-12">
    <form onSubmit={ handleSubmit(props => this.submit(props))} >
      <div className='title'>Create Blog </div>
      <div className="form-group">
        <Field name="title" component={renderField} label="Title" {...title} className="form-control"/>
      </div>
      <div className="form-group">
        <Field name="description" component={renderField} label="Description" {...description} className="form-control"/>
      </div>
      <div className="form-group">
        <div className="btn-group">
          <Field name="genre" component="select">
            <option value="">Select genre</option>
            <option value="Tech">Tech</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
            <option value="Politics">Politics</option>
            <option value="Design">Design</option>
            <option value="Popular">Popular</option>
          </Field>   
        </div>
      </div>
      <div className="form-group">
        <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
      </div>
      <div className="form-group">
        <Field name="content" label="Content" {...content} className="form-control" component="textarea" component={renderField}/>
      </div>
      <div className="form-group">
        <Field name="readingDuration" component={renderField} type="number" label="Reading duration in munites" placeholder="in munites" {...readingDuration} className="form-control"/>
      </div>
      <div className="form-group text-center">
        <button type="submit" className="btn singin-button">Create Blog</button>
      </div>
    </form>
    </div>
    </div>
    </div>
  )
  }
}

export default reduxForm({
  form: 'contact',
  fields: ['title', 'description', 'content', 'genre', 'image', 'readingDuration'],
  validate
})(CreateBlog);