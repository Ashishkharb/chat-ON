import { Button, Drawer, Icon } from "rsuite"
import { useModelState } from "../../misc/custom-hooks";
import Dashboard from ".";

const DashboardToggle = () => {

    const {isOpen, open, close} = useModelState();
    return (<div>
        <Button block color ="blue" onClick={open}>
            <Icon icon = "dashboard" /> Dashboard
        </Button>
        <Drawer show={isOpen} onHide={close} placement="left">
            <Dashboard></Dashboard>
        </Drawer>
    </div>);
}

export default DashboardToggle;