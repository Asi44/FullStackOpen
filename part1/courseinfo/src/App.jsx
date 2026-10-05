const Part = ({part}) => {
  return(
    <p>
        {part.title} {part.exercises}
    </p>
  )
}

const Header = (props) => {
  return (
     <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </div>
  )
}

const Total = ({parts}) => {
  return (
   <p>Number of exercises {parts[0].exercises + parts[1].exercises +parts[2].exercises}</p>)
}


const App = () => {
  const course = 'Half Stack application development'

  const parts = [];
  parts[0] = {title: 'Fundamentals of React', exercises: 10};
  parts[1] = {title: 'Using props to pass data', exercises: 7};
  parts[2] = {title: 'State of a component', exercises: 14};

  return (
    <div>
      <Header course={course}/>
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </div>
  )
}

export default App