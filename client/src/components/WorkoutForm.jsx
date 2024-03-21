import { useState } from "react";
import axios from 'axios';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const workout = { title, load, reps };
    
        try {
            const response = await axios.post('http://localhost:4000/api/workout/', workout);
            const data = response.data;
    
            if (!response.status === 201) {
                setError(data.error);
            } else {
                setLoad('');
                setReps('');
                setTitle('');
                setError(null);
                console.log('New workout added:', data);
                dispatch({type: 'CREATE_WORKOUT', payload: data})
            }
        } catch (error) {
            setError('Error adding workout:', error.message);
            // setError('Error adding workout. Please try again.');
        }
    };

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise title: </label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} 
            />
            <br />
            <label>Load (in kg): </label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load} 
            />
            <br />
            <label>Reps: </label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps} 
            />
            <br />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;