import './App.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import Inputs from './Components/Inputs'
import Tasks from './Components/Tasks'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {category: 'HEALTH', inputText: '', task: [], tag: ''}

  onInputChange = e => {
    this.setState({inputText: e})
  }

  onSelectChange = e => {
    this.setState({category: e})
  }

  addTask = () => {
    const {inputText, category} = this.state

    const newTask = {id: uuidv4(), inputText, category}

    this.setState(prevState => ({
      task: [...prevState.task, newTask],
      inputText: '',
      category: 'HEALTH',
      tag: '',
    }))
  }

  setTags = e => {
    this.setState({tag: e})
  }

  render() {
    const {inputText, category, tag, task} = this.state
    const filteredTasks = task.filter(item => item.category.includes(tag))
    console.log(filteredTasks)

    return (
      <div className="main_div">
        <Inputs
          tagsList={tagsList}
          onInputChange={this.onInputChange}
          onSelectChange={this.onSelectChange}
          addTask={this.addTask}
          inputText={inputText}
          category={category}
        />
        <Tasks
          tagsList={tagsList}
          setTags={this.setTags}
          filteredTasks={filteredTasks}
          tag={tag}
        />
      </div>
    )
  }
}

export default App
