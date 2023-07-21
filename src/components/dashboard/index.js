import { Alert, Button, Divider, Drawer, Icon, Tag } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import EditableInput from '../EditableInput';
import { database } from '../../misc/firebase';
import AvatarUploadBtn from './AvatarUploadBtn';

const Dashboard = ({ onSignOut }) => {
    const { profile } = useProfile();

    const onSave = async newData => {
        const userNicknameRef = database
            .ref(`/profiles/${profile.uid}`)
            .child('name');

        try {
            await userNicknameRef.set(newData);
            Alert.success('Nickname has been updated', 4000);
        } catch (err) {
            Alert.error(err.message, 4000);
        }
    };
    return (
        <>
            <Drawer.Header>
                <Drawer.Title>Dashboard</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
                <h3>Hey, {profile.name}</h3>

                <Tag color="blue">
                    <Icon icon="google" /> Connected
                </Tag>

                <Divider />

                <EditableInput
                    name="nickname"
                    initialValue={profile.name}
                    onSave={onSave}
                    label={<h6 className="mb-2">Nickname</h6>}
                />

                <AvatarUploadBtn />
            </Drawer.Body>

            <Drawer.Footer>
                <Button block color="red" onClick={onSignOut}>
                    Sign out
                </Button>
            </Drawer.Footer>
        </>
    );
};

export default Dashboard;
