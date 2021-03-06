import React from 'react';
import PropTypes from 'prop-types';

const CommentInput =props =>{
  return (
      <form onSubmit={props.addNewComment}>
          <input 
          className='text-input' 
          type="text" 
          placeholder="Add a comment..."
          value={props.inputText}
          onChange = {props.handler}
          
          />
          <p className='expand'>...</p>
      </form>
  )
}
/////////////////////////////////////////////////////////////////////

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="comment">{props.comment.text}</span>{' '}
      <span className="user">-{props.comment.username}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

///////////////////////////////////////////////////////////////////////
class CommentSection extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        comments: [],
        inputText: ''
        }
    }
  componentDidMount() {
    this.setState({ comments: this.props.comments })
    }
  handler = event => {
    this.setState({ inputText: event.target.value
     }); 
    };
  addNewComment = event => {
    event.preventDefault();
      if (!(this.state.inputText === '')) {
          this.setState({
              comments: [
                ...this.state.comments,
                  { username: 'Conan The Barbarian', text: this.state.inputText }
              ],
              inputText: ''
            });
        }
    };
  

    render() {
      return (
          <div className = 'comment-section'>
               {
              this.state.comments.map((comment) =>
              <Comment key={Math.random()} comment={comment} />)
              } 
              <CommentInput
                  inputText = {this.state.inputText}
                  handler = {this.handler}
                  addNewComment ={this.addNewComment}
              />
          </div>
      );
  }
}






export default CommentSection; 