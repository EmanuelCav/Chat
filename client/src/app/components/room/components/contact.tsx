import { IContact } from '../../../interface/User'

const Contact = ({ contact }: { contact: IContact }) => {
  return (
    <div className='contact-container'>
      <p className='text-contact'>{contact.name}</p>
    </div>
  )
}

export default Contact