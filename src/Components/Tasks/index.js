import './index.css'
import {TagButton} from './styledComponents'

const Tasks = props => {
  const {tagsList, setTags, tag, filteredTasks} = props
  const onClickTag = e => {
    setTags(e.target.id)
  }

  return (
    <div className="right_div">
      <h1 style={{color: 'white'}}>Tags</h1>
      <ul className="un_oreder_list">
        {tagsList.map(item => (
          <li key={item.optionId}>
            <TagButton
              bgColor={tag === item.optionId ? ' #f3aa4e' : 'black'}
              type="button"
              className="tagBtn"
              onClick={onClickTag}
              id={item.optionId}
              key={item.optionId}
            >
              {item.displayText}
            </TagButton>
          </li>
        ))}
      </ul>

      <div>
        <h1 style={{color: 'white'}}>Tasks</h1>
        <ul className="taskList">
          {filteredTasks.length < 1 ? (
            <p style={{color: 'white'}}>No Tasks Added Yet</p>
          ) : (
            filteredTasks.map(item => (
              <li className="taskItem">
                <p style={{color: 'white'}}>{item.inputText}</p>
                <p className="Yellow_btn">{item.category}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default Tasks
