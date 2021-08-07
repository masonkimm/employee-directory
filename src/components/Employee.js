import React, { useEffect, useState } from 'react';
import './Employee.css';
import Axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import SearchInput from './SearchInput';
import Tags from './Tags';

export default function Employee() {
  const [record, setRecord] = useState([]);
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    Axios.get('https://api.hatchways.io/assessment/students').then(
      (response) => {
        const EmployeeData = response.data.students.map((employee) => ({
          ...employee,
          tag: [],
        }));

        setRecord(EmployeeData);
      }
    );
  }, []);

  const findSum = (arr) => {
    const sum = arr.reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0);
    return sum;
  };
  const displayAvg = (arr) => {
    const avg = arr.map((avg, index) => {
      return (
        <li key={index}>
          Test {index + 1}: {avg}
        </li>
      );
    });
    return avg;
  };
  const filterName = (e) => {
    e.preventDefault();
    const userInput = e.target.value.toLowerCase();
    setSearchTerm(userInput);
  };
  const addTag = (e) => {
    e.preventDefault();
    const newTag = e.target.tagInput.value;
    const employeeId = e.target.id - 1;
    console.log('newTag:', newTag);
    console.log('empID:', employeeId);

    const employeeTags = [...record];
    employeeTags[employeeId].tag.push(newTag);
    console.log(record);
    console.log(employeeTags);

    setTags((tags) => ({
      ...tags,
      employeeTags,
    }));
    e.target.tagInput.value = '';
  };

  return (
    <>
      <SearchInput filterName={filterName} />
      {record
        .filter((employee) => {
          if (searchTerm === '') {
            return record;
          } else {
            let firstName = employee.firstName.toLowerCase();
            let lastName = employee.lastName.toLowerCase();
            return (
              firstName.includes(searchTerm) || lastName.includes(searchTerm)
            );
          }
        })
        .map((employee) => {
          return (
            // <EmployeeCard employee={employee}/>
            <div className="employee" key={employee.id}>
              <div className="leftSide">
                <img src={employee.pic} alt="" />
              </div>
              <div className="rightSide">
                <h1>
                  {employee.firstName} {employee.lastName}
                </h1>
                <p>Company: {employee.company}</p>
                <p>Email: {employee.email}</p>
                <p>Skill: {employee.skill}</p>
                <p>City: {employee.city}</p>
                <p>
                  Evaluation Avg:{' '}
                  {(findSum(employee.grades) / employee.grades.length).toFixed(
                    2
                  )}
                  %{' '}
                  <span id="viewIcon">
                    {!show ? (
                      <AddIcon
                        fontSize="medium"
                        onClick={(e) => {
                          e.preventDefault();
                          setShow(true);
                        }}
                      />
                    ) : (
                      <RemoveIcon
                        fontSize="medium"
                        onClick={(e) => {
                          e.preventDefault();
                          setShow(false);
                        }}
                      />
                    )}
                  </span>
                </p>
                {show ? <p>{displayAvg(employee.grades)}</p> : null}
                <Tags employee={employee} addTag={addTag} />
              </div>
            </div>
          );
        })}
    </>
  );
}
