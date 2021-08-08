import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {

    const titleInputref = useRef()
    const imageInputref = useRef()
    const addressInputref = useRef()
    const descriptionInputref = useRef()

    const submitHandler = (e) => {
      e.preventDefault();

      const enteredTitle =  titleInputref.current.value;
      const enteredImage =  imageInputref.current.value;
      const enteredAddress =  addressInputref.current.value;
      const enteredDescription =  descriptionInputref.current.value;

      const meetupData = {
          title:enteredTitle,
          image: enteredImage,
          address: enteredAddress,
          description: enteredDescription
      }

     props.onAddMeetup(meetupData)
      
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" ref={titleInputref}   required id="title"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" ref={imageInputref}  required id="image"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" ref={addressInputref}   required id="address"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                   <textarea ref={descriptionInputref}  id="description" required rows="5"></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;