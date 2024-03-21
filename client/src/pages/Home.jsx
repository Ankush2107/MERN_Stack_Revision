import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import axios from 'axios';
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const Home = () => {

  const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
      const fetchWorkouts = async () => {
          try {
              // Make a GET request using Axios
              const response = await axios.get('http://localhost:4000/api/workout/');    
              // console.log(response);      
              // Check if the response is successful
              if (response.status === 200) {
                // Update state with the fetched data
                 dispatch({type: 'SET_WORKOUTS', payload: response.data})
              } else {
                // Handle errors if the response is not successful
                console.error("Failed to fetch data:", response.statusText);
              }
          } catch (error) {
            // Handle network or parsing errors
            console.error("Error fetching data:", error.message);
          }
      };
      // Call the fetchWorkouts function
      fetchWorkouts();
    }, []);
  return (
    <div className="home">
      <div className="workouts">
        {
          workouts && workouts.map((workout) => {
            return <WorkoutDetails key={workout._id} workout={workout} />
          })
        }
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home
