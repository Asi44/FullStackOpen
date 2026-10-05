const Header = (props) => <h1>{props.course}</h1>

const Content = ({parts}) => (
  <div>
    {parts.map(part => <p>{part.name} {part.exercises}</p>)}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({parts}) => {
  const tot = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);
  return (
  <p>
    total of {tot} exercises
  </p>)
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default Course