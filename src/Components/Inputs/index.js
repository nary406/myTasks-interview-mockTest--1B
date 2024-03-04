import './index.css'

const Inputs = props => {
  const {
    tagsList,
    onInputChange,
    category,
    inputText,
    addTask,
    onSelectChange,
  } = props
  const onchangeSelectFunc = e => {
    onSelectChange(e.target.value)
  }

  const onInputChangeFunction = e => {
    onInputChange(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    addTask()
  }

  return (
    <form onSubmit={submitForm} className="form_div">
      <h1 style={{color: '#f3aa4e'}}>Create a task!</h1>
      <div className="input_div">
        <label className="label_text" htmlFor="inputText">
          Task
        </label>
        <br />
        <input
          placeholder="Enter the task here"
          type="text"
          id="inputText"
          className="input_item"
          value={inputText}
          onChange={onInputChangeFunction}
        />
      </div>
      <br />
      <div className="input_div">
        <label className="label_text" htmlFor="selectText">
          Tags
        </label>
        <br />
        <select
          id="selectText"
          className="input_item"
          value={category}
          onChange={onchangeSelectFunc}
        >
          {tagsList.map(item => (
            <option key={item.optionId} value={item.optionId}>
              {item.displayText}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button className="addbtn" type="submit">
        Add Task
      </button>
    </form>
  )
}

export default Inputs
