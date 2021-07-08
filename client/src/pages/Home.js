//This will be the landing page, with a nav bar, pic carusel, 
// after functional add links to schedule a visit and application,
//  more info at the bottom, add small header with
//   links inlcuding phone number

// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_NAME} from '../utils/queries';
import photo from '../images/photo1.jpg'
const Home = () => {
const {loading, data} =useQuery(QUERY_NAME, {
    fetchPolicy:"no-cache"
});

//page will live between react frags
return (
<>
<h1>School Site</h1>
<img src = {photo} alt =" students"/>


























</>
);
};



export default Home;
