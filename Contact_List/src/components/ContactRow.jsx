export default function ContactRow({setSelectedContactId, contact}){
    const handleClick = () => {
        console.log(setSelectedContactId);
        setSelectedContactId(contact.id);
    }
    return(
        <tr
        onClick={handleClick}
        >
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}