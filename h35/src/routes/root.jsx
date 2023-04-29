//Sourced most of this from: https://reactrouter.com/en/6.11.0/start/tutorial

import  Home  from "../components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

document.body.style.backgroundColor = "gray";

export default function Root() {
    return (
      <>
        <div>
            <Home  />
        </div>
      </>
    );
  }
  