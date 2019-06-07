import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FormField} from "./FormField";
import { observer } from 'mobx-react';
import Input from './TextInput';

const TextInput = Input.create();
const MobEx = observer(
class App extends React.Component{
    render(){

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormField labelText={""} id={"event_narrative"}>
              <textarea
                  className={"narrative"}
                  placeholder={"Add text"}
                  onChange={(event: any) => {
                      TextInput.setText(event.currentTarget.value);
                  }}
              />
        </FormField>
          <p> {TextInput.name} </p>
      </header>
    </div>
  );
}});

export default MobEx;
