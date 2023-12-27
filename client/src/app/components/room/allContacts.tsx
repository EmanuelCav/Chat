import { AllContactPropsType } from "../../types/props.types"

import Contact from "./components/contact"

const AllContacts = ({ user, setIsShowContacts }: AllContactPropsType) => {

  const closeShowContacts = () => {
    setIsShowContacts(false)
  }

  return (
    <div className="container-absolute">
      <div className="container-all-contacts">
        <div className="contain-all-contacts">
          {
            user.user.user?.contacts.map((contact) => {
              return <Contact contact={contact} key={contact._id} />
            })
          }
        </div>
        <button className='button-start' onClick={closeShowContacts}>CLOSE</button>
      </div>
    </div>
  )
}

export default AllContacts