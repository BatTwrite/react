import { Link } from "react-router-dom";
function Homepage(){
return(<>
<h1> hi its home page </h1>
<Link to="/products">Product</Link>
</>)
}
export default Homepage;