import { AllContactPropsType } from "../../types/props.types"

import Contact from "./components/contact"

const AllContacts = ({ allContacts, setIsShowContacts, user }: AllContactPropsType) => {

  const closeShowContacts = () => {
    setIsShowContacts(false)
  }

  return (
    <div className="container-absolute">
      <div className="container-all-contacts">
        <div className="contain-all-contacts">
          {
            allContacts.map((contact) => {
              return <Contact contact={contact} user={user} setIsShowContacts={setIsShowContacts} key={contact._id} />
            })
          }
        </div>
        <button className='button-start' onClick={closeShowContacts}>CLOSE</button>
      </div>
    </div>
  )
}

export default AllContacts