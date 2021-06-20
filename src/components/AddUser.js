import React, {useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link,useHistory } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const AddUser = () => {
    const [name,setName] = useState('');
    const {addUser}= useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser);
        history.push('/');
    }

    const onChange = (e) => {
        setName(e.target.value);
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <h1>Add User</h1>
                <hr></hr>
                <h5>Name</h5>
                <Input type="text" name="name" value={name} onChange={onChange} placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
