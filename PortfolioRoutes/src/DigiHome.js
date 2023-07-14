const DigiHome = () => {
    return ( 
<div>

        <div class="navbar navbar-expand-sm navbar-dark text-light bg-warning">
<div class="container">
  <a class="navbar-brand" href="https://mpham.w3spaces.com/FSD/Exercise6/About.html">About</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link" href="https://mpham.w3spaces.com/FSD/Exercise6/Academics.html" aria-current="page">Academics<span class="visually-hidden">(current)</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="https://mpham.w3spaces.com/FSD/Exercise6/Technical_Skills.html">Technical Skills</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="https://mpham.w3spaces.com/FSD/Exercise6/Projects.html">Projects</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="https://mpham.w3spaces.com/FSD/Exercise6/Achievements.html">Achievements</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="https://mpham.w3spaces.com/FSD/Exercise6/Contact.html">Contact Me</a>
          </li>
          </ul>
    </div>     
  </div>
</div>

        <div style={{textAlign: "left", paddingLeft: "20px", paddingTop: "20px",
        backgroundColor: "#FFE4C4", fontSize: "50px"}}>John Doe
        <div><img src="J_Doe.jpg" alt= "J Doe.png"/></div>
        <div style={{paddingLeft: "20px", paddingTop: "10px", fontSize: "20px", textAlign: "left"}}>johndoe@geemail.com</div>
        
        <div style={{paddingLeft: "20px", paddingTop: "10px", fontSize: "20px"}}><b>Career Objectives</b></div>
        <div style={{paddingLeft: "20px", fontSize: "20px", flexWrap: "wrap"}}>Seeking a responsible career opportunity
        in the field of Computer Science where I can utilize my logical and technical skills
        towards personal and professional development</div>
        </div>
        <footer style={{paddingLeft: "20px", paddingTop: "20%", fontSize: "20px",
        backgroundColor: "#FFE4C4", textAlign: "left"}}>
        <p> &copy;
            Location:
            77 W 66th St #13, New York, NY 10023 </p>
        </footer>
    
        </div>
     );
}
 
export default DigiHome; 