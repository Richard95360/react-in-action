import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

 const AllMeetupPages = () => {

    const [isloading, setIsLoading] = useState(true)

    const [loadedMeetups, setLoadedMeetups] = useState([])


    useEffect(() => {
        setIsLoading(true)
        fetch(
            'https://react-getting-started-793ca-default-rtdb.europe-west1.firebasedatabase.app/meetup.json'
         )
         .then(response => {
            return  response.json();
         })
         .then((data) => {
             const meetups = [];

             for (const key in data) {
                 const meetup = {
                     id:key,
                     ...data[key]
                 };
                 meetups.push(meetup)
             }
            setIsLoading(false);
            setLoadedMeetups(meetups);
         });
        
    }, []);


   if(isloading){
       return (
       <section>
           <p>Loading...</p>
       </section>
       );
   }

    return (
        <section>
         <h1>All Meetups Page </h1>
        <MeetupList meetups={loadedMeetups}/>
        </section>
    );
};

export default AllMeetupPages;