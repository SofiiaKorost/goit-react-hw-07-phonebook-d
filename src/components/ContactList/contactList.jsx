import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux/es/exports';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};