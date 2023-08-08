import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLazyQuery } from '@apollo/client';
import { QUERY_DATA } from '../../utils/queries';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import Histogram from '../Histogram';

const Parameter_Bar = () => {

    const [ selected, setSelected ] = useState({
        year: '',
        name: '',
    });

    const [getData, { loading, error, data }] = useLazyQuery(QUERY_DATA, {
        fetchPolicy: "network-only",
    });

    const handleYearChange = (event) => {
        setSelected({...selected, year: parseInt(event.target.value)});
    };

    const handleNameChange = (event) => {
        setSelected({...selected, name: event.target.value});
    };

    const handleSearch = () => {
        if (!selected.year || !selected.name) {
            if (!selected.year) {
              console.error('Year is missing.');
            }
            if (!selected.name) {
              console.error('Name is missing.');
            }
            return;
          }
      
          console.log('Selected Year:', selected.year);
          console.log('Selected Name:', selected.name);

        getData({
            variables: {
                year: selected.year,
                name: selected.name,
            }
        });
    };

    useEffect(() => {
        console.log(loading);
    }, [data]);

    console.log(data);

    return (
        <>
        {Auth.loggedIn() ? (
            <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderRadius: '25px', backgroundColor: '#1bbc9b', padding: 5, alignContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', width: "35%" }}>
                        <h6>Year: &nbsp;&nbsp;</h6>
                        <Form.Select value={selected.year} onChange={handleYearChange} style={{ width: "80%" }}>
                            <option value="">Select Year</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </Form.Select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', width: "35%" }}>
                        <h6>Name: &nbsp;&nbsp;</h6>
                        <Form.Select value={selected.name} onChange={handleNameChange} style={{ width: "80%" }}>
                            <option value="">Select Name</option>
                            <option value="HN-NormalTissues">HN-NormalTissues</option>
                            <option value="GYN-NormalTissues">GYN-NormalTissues</option>
                        </Form.Select>
                </div>
                <div>
                    <Button variant="primary" onClick={handleSearch}>Search</Button>
                </div>
            </div>
            <Histogram data={data}/>
            </>
        ) : (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderRadius: '25px', alignContent: 'center' }}>
                <h1>You must login!</h1>
            </div>
        )}
        </>
    );
};

export default Parameter_Bar;