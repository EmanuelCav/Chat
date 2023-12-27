import { IContact } from '../../../interface/User'

const Contact = ({ contact }: { contact: IContact }) => {
  return (
    <div className='contact-container'>
      <img src={contact.user.photo.image} alt="contact-photo" className='image-contact' />
      <p className='text-contact'>{contact.name}</p>
    </div>
  )
}

export default Contact