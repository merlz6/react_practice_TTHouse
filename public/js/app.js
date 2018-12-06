// const header = (
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Project Tracker</h1>
//     <p class="lead">Track and view all your project ideas in a clean and organized view.</p>
//   </div>
// </div>
// )

function App(){
  return (
    <div className="container">
      <Header/>
      <Projects/>
    </div>
  )
}


function Header(){
  return (
    <header>
    <h1>Project Tracker</h1>
    <span className="stats">Projects: 1</span>
    </header>
  )
}

function Projects(){
  return (
    <div className="project">
      <span className="project-name">
        Learn React
      </span>
      <div class="project-info">
        <h5>description</h5>

      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
