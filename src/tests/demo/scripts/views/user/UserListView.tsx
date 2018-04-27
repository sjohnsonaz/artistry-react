import * as React from 'react';

import { Button, Section } from '../../../../../scripts/modules/ReactArtistry';

import ViewModel from '../../ViewModel';

import UserForm from './UserForm';
import UserView from './UserView';

export interface IUserListViewProps {
    viewModel: ViewModel;
}

export default class UserListView extends React.Component<IUserListViewProps, any> {
    render() {
        let {viewModel} = this.props;
        return (
            <Section title="Users">
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserForm key="user-form-component" viewModel={viewModel} />
                        {viewModel.users.map(user => <UserView user={user} viewModel={viewModel} />)}
                    </tbody>
                </table>
            </Section>
        );
    }
}
