import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWidthFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phoneWidthFakeData);
        })

    return (
        <div>
            <h2 className="text-5xl">Phones : {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

Phones.propTypes = {
    phones: PropTypes.array

};

export default Phones;