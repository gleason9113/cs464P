import NavBar from "./Navbar";

export default function Error() {
    
    return (
      <div>
        <NavBar />
        <div className="container align-items-center">
            <h1>Uh-Oh!</h1>
            <p>
                Looks like you've found a page that doesn't exist, or some other error has occurred.  Select one of the links above to return to the site.
            </p>
        </div>
      </div>
     
      
    );
  }