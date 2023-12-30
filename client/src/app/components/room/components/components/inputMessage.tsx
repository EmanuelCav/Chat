
const InputMessage = () => {
  return (
    <form className="form-message">
        <input type="text" name="message" style={{ width: '100%' }} placeholder="Write a message" autoFocus autoComplete="off"/>
    </form>
  )
}

export default InputMessage