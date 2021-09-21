import React from 'react';
import Button from "../Button";

const StudentItem = ({el, idx}) => {
    return (
            <tr>
                <td>{idx + 1}</td>
                <td>{el.name}</td>
                <td>{el.phone}</td>
                <td>{el.sum} $</td>
                <td>{el.paid}</td>
                <td>{el.notebook}</td>
                <td>{el.group}</td>
                <td>{el.gender}</td>
                <td className='status'>{el.status}</td>
                <td>{el.comment}</td>
                <td>
                    <Button title='Редоктировать' color='yellow'/>
                    <Button title='Удалить' color='red'/>
                </td>
            </tr>
    );
};

export default StudentItem;