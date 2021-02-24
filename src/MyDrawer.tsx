import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import {Box, Breadcrumbs, IconButton, Link, Typography} from "@material-ui/core";
import {AccountBalanceWallet} from "@material-ui/icons";

const useStyles = makeStyles({
    list: {
        width: 1,
    },
    fullList: {
        width: 'auto',
    },
    box: {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

type MenuElement = {
    title: string,
    svgIcon: JSX.Element,
}

type LinkData = { title: string, link: string }

export default function MyDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
    });

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({...state, open: open});
    };

    const list = () => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: true,
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[{title: 'Home', svgIcon: <HomeIcon/>}, {
                    title: 'Crypto Charts',
                    svgIcon: <AccountBalanceWallet/>
                }].map((menuElement: MenuElement, index) => (
                    <ListItem button key={menuElement.title}>
                        <ListItemIcon>
                            {menuElement.svgIcon}
                        </ListItemIcon>
                        <ListItemText primary={menuElement.title}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {[{title: 'Impressum', svgIcon: <HomeIcon/>}, {
                    title: 'More',
                    svgIcon: <HomeIcon/>
                }].map((menuElement: MenuElement, index) => (
                    <ListItem button key={menuElement.title}>
                        <ListItemIcon>
                            {menuElement.svgIcon}
                        </ListItemIcon>
                        <ListItemText primary={menuElement.title}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    function getCurrent() {
        return 'undefined';
    }

    function getLinks(): LinkData[] {
        return [{title: "Home", link: "/"}, {title: "Ebene2", link: "/Ebene2"}];
    }

    return (
        <Box className={clsx(classes.box)}>
            <React.Fragment key={"top"}>
                <Breadcrumbs aria-label="breadcrumb">
                    {getLinks().map(link => <Link color="inherit" href={link.link} onClick={() => {
                    }}>
                        {link.title}
                    </Link>)}
                    <Typography color="textPrimary">{getCurrent()}</Typography>
                </Breadcrumbs>
                <IconButton onClick={toggleDrawer(true)}><HomeIcon/></IconButton>
                <Drawer anchor={"top"} open={state["open"]} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </Box>
    );
}