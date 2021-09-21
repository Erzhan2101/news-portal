import React from 'react';

const StudentItem = ({el, idx}) => {
    return (
        <tr>
            <td className='border-bottom border-secondary'>{idx + 1}</td>
            <td className='border-bottom border-secondary'>{el.name}</td>
            <td className='border-bottom border-secondary'>{el.phone}</td>
            <td className='border-bottom border-secondary'>{el.sum} $</td>
            <td className='border-bottom border-secondary'>{el.paid}</td>
            <td className='border-bottom border-secondary'>{el.notebook}</td>
            <td className='border-bottom border-secondary'>{el.group}</td>
            <td className='border-bottom border-secondary'>{el.gender}</td>
            <td className='status '>{el.status}</td>
            <td className='border-bottom border-secondary'>{el.comment}</td>
        </tr>
    );
};

export default StudentItem;