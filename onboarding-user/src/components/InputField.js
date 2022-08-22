import { Input,Button} from 'antd';
import React from 'react';

export const InputField = () => {
  return (
    <div>
    <h1>Welcome! First things first...</h1>
    <p>You can always change them later.</p>
    <label for="full-name">Full Name</label>
        <Input placeholder="Steve Jobs" />
      <label for="display-name">Display Name</label>
      <Input placeholder="Steve" />
      <Button type="primary">Create Workspace</Button>
    </div>
  )
}
