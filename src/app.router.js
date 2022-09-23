import React from "react";
import {Router, Route, HashRouter, Switch} from "react-router-dom";
import HomeContainer from "./home/home.container";
import ClientDetailsContainer from "./clientDetails/clientDetails.container";
import {
    AppBar,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem, ListItemText,
    ListSubheader,
    Toolbar,
    Typography
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {useAppStyles} from "./app.styles";
import {useTheme} from "@material-ui/core/styles";
import {useApp} from "./app.hooks";
import ClientListContainer from "./clientList/clientList.container";
import BatchListContainer from "./batchList/batchList.container";

const CustomBrowserRouter = () => {
    const classes = useAppStyles();
    const theme = useTheme();
    const {openDrawer, showDrawer} = useApp();
    return (
        <HashRouter basename="/">
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, {
                [classes.appBarShift]: openDrawer,
            })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={showDrawer}
                        edge="start"
                        className={clsx(classes.menuButton, openDrawer && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Crutches - something you lean on
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left"
                    variant="persistent"
                    open={openDrawer}
                    className={classes.appDrawer}
                    classes={{
                        paper: classes.appDrawerPaper
                    }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={showDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <ClientListContainer />
            </Drawer>
            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div className={classes.drawerHeader} />
                <Switch>
                    <Route exact path="/home" component={HomeContainer}/>
                    <Route exact path="/client" component={ClientDetailsContainer}/>
                    <Route exact path="/batches" component={BatchListContainer} />
                </Switch>
            </main>
        </div>
        </HashRouter>
    )
};

export default CustomBrowserRouter;