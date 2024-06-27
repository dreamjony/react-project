

const Member = (props) => {
    const {name, email, phone, website, address} = props
    return (
        <div className='member-card'>
            <h2 className='bg-gray-200 p-4 rounded-lg'>{name}</h2>
            <p className='text-gray-600'>Email: {email}</p>
            <p className='text-gray-600'>Phone: {phone}</p>
            <p className='text-gray-600'>Website: {website}</p>
            <p className='text-gray-600'>Address: {address.city}</p>
            <p className='text-gray-600'>City: {address.street}</p>
            <p className='text-gray-600'>Address: {address.geo.lat}</p>
        </div>
    )

};

export default Member;