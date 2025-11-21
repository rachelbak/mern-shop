// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { userOut } from "../features/userSlice.js"
// import { useNavigate } from "react-router-dom";
// import { clearCart } from "../features/cartSlice.js"
// const NavBar = () => {
//     let user = useSelector(state => state.user.currentUser);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const logout = () => {
//         dispatch(userOut());
//         dispatch(clearCart());
//         navigate("/list");
//     };
//     return (
//         <nav>
//             <ul>
//                 {!user &&
//                     <li><Link to="signup">הרשמה</Link></li>}
//                 {user?.role == "ADMIN" &&
//                     <li><Link to="AddOrUpdateProduct">AddProduct</Link></li>
//                 }
//                 <li><Link to="list">לרשימה</Link></li>
//                 {!user &&
//                     <li><Link to="Login">כניסה</Link></li>}

//                 {user && user.role != "ADMIN" &&
//                     <li><Link to="checkout">checkout</Link></li>}
//                 {user?.role != "ADMIN" &&
//                     < li > <Link to="ShoppingCart">ShoppingCart</Link></li>}
//                 {/* <li><Link to="SmallShoppingCart">SmallShoppingCart</Link></li> */}
//                 {user &&
//                     <li><button onClick={logout}>התנתקות</button></li>}

//             </ul>
//         </nav >
//     );
// }
// export default NavBar;



// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Badge } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { userOut } from "../features/userSlice.js";
// import { useNavigate } from "react-router-dom";
// import { clearCart } from "../features/cartSlice.js";
// import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useState, useEffect } from "react";
// import { useMediaQuery, Avatar, Tooltip, Box } from '@mui/material';
// // import { Avatar, Tooltip, Box } from "@mui/material";
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


// const NavBar = () => {
//     let user = useSelector(state => state.user.currentUser);
//     let cartItems = useSelector(state => state.cart.countInCart); // מספר הפריטים בעגלה
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//     };

//     const logout = () => {
//         dispatch(userOut());
//         dispatch(clearCart());
//         navigate("/list");
//     };

//     // שימוש ב-useMediaQuery כדי לבדוק אם המסך קטן או לא
//     const isMobile = useMediaQuery('(max-width:600px)');

//     // useEffect כדי לסגור את התפריט אם המסך עובר לגודל גדול
//     useEffect(() => {
//         if (!isMobile) {
//             setAnchorEl(null); // סוגר את התפריט אם המסך גדול מ-600px
//         }
//     }, [isMobile]); // כאשר משתנה גודל המסך, הקוד ירוץ מחדש

//     return (
//         <>
//             {/* Navbar קבוע */}
//             <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black", boxShadow: 2, direction: "rtl" }}>
//                 <Toolbar>
//                     {/* לוגו בצד שמאל */}
//                     <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'black' }}>
//                         Winged-Wonders
//                     </Typography>



//                     {/* ניווט לדסקטופ */}
//                     {!isMobile && (
//                         <div>
//                             {/* {!user && <Button sx={{ color: "black" }} component={Link} to="/signup">sign up</Button>} */}

//                             <Button sx={{ color: "black" }} component={Link} to="/list">בית</Button>
//                             {user?.role === "ADMIN" && <Button sx={{ color: "black" }} component={Link} to="/AddOrUpdateProduct">הוספת מוצר</Button>}
//                             {!user && <Button sx={{ color: "black" }} component={Link} to="/Login">התחברות</Button>}
//                             {/* {user?.role !== "ADMIN" && <Button sx={{ color: "black" }} component={Link} to="/checkout">לקופה</Button>} */}

//                             {user && <Button sx={{ color: "black" }} onClick={logout}>התנתקות</Button>}
//                             {/* אייקון של עגלת הקניות */}
//                             {user?.role !== "ADMIN" && (
//                                 <IconButton sx={{ color: "black" }} component={Link} to="/ShoppingCart">
//                                     <Badge badgeContent={cartItems} color="error">
//                                         <ShoppingCartIcon />
//                                     </Badge>
//                                 </IconButton>
//                             )}
//                             {user?.role !== "ADMIN" && (
//                                 <Button
//                                     variant="contained"
//                                     color="error"
//                                     sx={{
//                                         borderRadius: "50px", // פינות מעוגלות
//                                         padding: "8px 24px", // padding מותאם לכפתור
//                                         fontWeight: "bold", // משמעת עיצובית
//                                         boxShadow: 2, // צל קל כדי להדגיש את הכפתור
//                                         mx: 1, // מרווח אופציונלי
//                                         '&:hover': {
//                                             bgcolor: "darkred", // צבע כפתור בזמן ריחוף
//                                         },
//                                     }}
//                                     component={Link}
//                                     to="/checkout"
//                                 >
//                                     לקופה
//                                 </Button>
//                             )}
//                         </div>

//                     )}




//                     {/* תפריט נפתח למובייל */}
//                     {isMobile && (
//                         <IconButton edge="end" sx={{ color: "black" }} aria-label="menu" onClick={handleMenuOpen}>
//                             <MenuIcon />
//                         </IconButton>
//                     )}
//                     <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//                         {/* {!user && <MenuItem component={Link} to="/signup" onClick={handleMenuClose}>signup</MenuItem>} */}
//                         {user?.role === "ADMIN" && <MenuItem component={Link} to="/AddOrUpdateProduct" onClick={handleMenuClose}>Add Product</MenuItem>}
//                         <MenuItem component={Link} to="/list" onClick={handleMenuClose}>Home</MenuItem>
//                         {!user && <MenuItem component={Link} to="/Login" onClick={handleMenuClose}>login</MenuItem>}
//                         {user?.role !== "ADMIN" && <MenuItem component={Link} to="/checkout" onClick={handleMenuClose}>checkout</MenuItem>}
//                         {user && <MenuItem onClick={() => { logout(); handleMenuClose(); }}>log out</MenuItem>}
//                     </Menu>
//                     {user && (
//                         <Tooltip title={user.name}>
//                             <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
//                                 <Avatar sx={{ bgcolor: '#1976d2', width: 36, height: 36, fontSize: 16 }}>
//                                     {user.name?.charAt(0).toUpperCase()}
//                                 </Avatar>
//                                 {user.role === "ADMIN" && (
//                                     <AdminPanelSettingsIcon sx={{ color: "#1976d2", ml: 0.5 }} fontSize="small" />
//                                 )}
//                             </Box>
//                         </Tooltip>
//                     )}


//                 </Toolbar>
//             </AppBar>

//             {/* מרווח מתחת ל-Navbar */}
//             <div style={{ marginTop: "80px" }}></div>
//         </>
//     );
// };

// export default NavBar;
import {
    AppBar, Toolbar, Typography, Button, IconButton, Badge,
    useMediaQuery, Avatar, Tooltip, Box, Drawer, List, ListItem, ListItemText
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userOut } from "../features/userSlice.js";
import { clearCart } from "../features/cartSlice.js";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useState, useEffect } from "react";

const NavBar = () => {
    const user = useSelector(state => state.user.currentUser);
    const cartItems = useSelector(state => state.cart.countInCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isMobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const logout = () => {
        dispatch(userOut());
        dispatch(clearCart());
        navigate("/list");
    };

    useEffect(() => {
        if (!isMobile) {
            setDrawerOpen(false);
        }
    }, [isMobile]);

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black", boxShadow: 2, direction: "rtl" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ flexGrow: 1, textDecoration: 'none', color: 'black' }}
                    >
                        Winged-Wonders
                    </Typography>

                    {!isMobile && (
                        <div>
                            <Button sx={{ color: "black" }} component={Link} to="/list">בית</Button>
                            {user?.role === "ADMIN" && (
                                <Button sx={{ color: "black" }} component={Link} to="/AddOrUpdateProduct">הוספת מוצר</Button>
                            )}
                            {!user && (
                                <Button sx={{ color: "black" }} component={Link} to="/Login">התחברות</Button>
                            )}
                            {user && (
                                <Button sx={{ color: "black" }} onClick={logout}>התנתקות</Button>
                            )}
                            {user?.role !== "ADMIN" && (
                                <>
                                    <IconButton sx={{ color: "black" }} component={Link} to="/ShoppingCart">
                                        <Badge badgeContent={cartItems} color="error">
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        sx={{
                                            borderRadius: "50px",
                                            padding: "8px 24px",
                                            fontWeight: "bold",
                                            boxShadow: 2,
                                            mx: 1,
                                            '&:hover': { bgcolor: "darkred" },
                                        }}
                                        onClick={() => {
                                            if (user) {
                                                navigate("/checkout");
                                            } else {
                                                navigate("/login");
                                            }
                                        }}
                                    >
                                        לקופה
                                    </Button>
                                </>
                            )}
                        </div>
                    )}

                    {isMobile && (
                        <IconButton edge="end" sx={{ color: "black" }} onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    )}

                    {user && (
                        <Tooltip title={user.name}>
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                                <Avatar sx={{ bgcolor: '#1976d2', width: 36, height: 36, fontSize: 16 }}>
                                    {user.userName?.charAt(0).toUpperCase()}
                                </Avatar>
                                {user.role === "ADMIN" && (
                                    <AdminPanelSettingsIcon sx={{ color: "#1976d2", ml: 0.5 }} fontSize="small" />
                                )}
                            </Box>
                        </Tooltip>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer למובייל */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: "30%",
                        backgroundColor: "white",
                        paddingTop: "80px", // למנוע כיסוי על ידי ה-Navbar
                        direction: "rtl", // כיוון ימין לשמאל
                    }
                }}
            >
                <List>
                    <ListItem button component={Link} to="/list" onClick={toggleDrawer(false)} sx={{ textAlign: "right" }}>
                        <ListItemText primary="בית" />
                    </ListItem>
                    {user?.role === "ADMIN" && (
                        <ListItem button component={Link} to="/AddOrUpdateProduct" onClick={toggleDrawer(false)} sx={{ textAlign: "right" }}>
                            <ListItemText primary="הוספת מוצר" />
                        </ListItem>
                    )}
                    {!user && (
                        <ListItem button component={Link} to="/Login" onClick={toggleDrawer(false)} sx={{ textAlign: "right" }}>
                            <ListItemText primary="התחברות" />
                        </ListItem>
                    )}
                    {user?.role !== "ADMIN" && (
                        <>
                            <ListItem button component={Link} to="/ShoppingCart" onClick={toggleDrawer(false)} sx={{ textAlign: "right" }}>
                                <ListItemText primary="עגלת קניות" />
                            </ListItem>
                            <ListItem
                                button
                                onClick={() => {
                                    toggleDrawer(false)();
                                    if (user) {
                                        navigate("/checkout");
                                    } else {
                                        navigate("/login");
                                    }
                                }}
                                sx={{ textAlign: "right" }}
                            >
                                <ListItemText primary="לקופה" />
                            </ListItem>
                        </>
                    )}
                    {user && (
                        <ListItem button onClick={() => { logout(); toggleDrawer(false)(); }} sx={{ textAlign: "right" }}>
                            <ListItemText primary="התנתקות" />
                        </ListItem>
                    )}
                </List>
            </Drawer>


            {/* מרווח מתחת ל-Navbar */}
            <div style={{ marginTop: "80px" }}></div>
        </>
    );
};

export default NavBar;
