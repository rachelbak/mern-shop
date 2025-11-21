
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart, deleteFromCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";

// const ShoppingCart = () => {

//     let dispatch = useDispatch()
//     let arr = useSelector(state => state.cart.arr);
//     let navigate = useNavigate();
//     let sumInCart = useSelector(state => state.cart.sumInCart);
//     let countInCart = useSelector(state => state.cart.countInCart);
//     return (<>

//         <p>סהכ:{sumInCart}</p>
//         <p>כמות פריטים:{countInCart}</p>

//         <input type="button" value="לקופה" onClick={() => {
//             navigate("/checkout");
//         }} />

//         {arr.map(item => <li key={item._id}>{item.nameproduct}
//             <p>{item.productName}</p>
//             <p>{item.description}</p>
//             <p> ש"ח{item.price}</p>
//             <p> ש"ח{item.price * item.qty}סה"כ</p>
//             <p>{item.qty}כמות: </p>
//             <input type="button" value="+" onClick={() => {
//                 dispatch(addToCart(item))
//             }} />
//             <input type="button" value="-" onClick={() => {
//                 dispatch(removeFromCart(item));
//             }} />
//             <input type="button" value="📤" onClick={() => {
//                 dispatch(deleteFromCart(item));
//             }} />
//             <img src={item.image} />
//         </li>)}

//     </>)
// }
// export default ShoppingCart;





// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart, deleteFromCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";
// import { Box, Button, Card, CardContent, Typography, IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// const ShoppingCart = () => {
//     let dispatch = useDispatch();
//     let arr = useSelector(state => state.cart.arr);
//     let navigate = useNavigate();
//     let sumInCart = useSelector(state => state.cart.sumInCart);
//     let countInCart = useSelector(state => state.cart.countInCart);

//     return (
//         <>
//             <div style={{ marginTop: "80px" }}></div>
//             <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
//                 {/* רשימת המוצרים בסל - בצד ימין */}
//                 <Box sx={{ width: "65%", overflowY: "auto" }}>
//                     {arr.map(item => (
//                         <Card key={item._id} sx={{ display: "flex", mb: 2, alignItems: "center", p: 2 }}>
//                             {/* תמונת המוצר */}
//                             <Box sx={{ width: "80px", height: "80px", mr: 2 }}>
//                                 <img src={item.image} alt={item.productName} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
//                             </Box>

//                             {/* פרטי המוצר */}
//                             <CardContent sx={{ flexGrow: 1 }}>
//                                 <Typography variant="h6">{item.productName}</Typography>
//                                 <Typography variant="body2" color="text.secondary">{item.description}</Typography>
//                                 <Typography variant="body1" sx={{ fontWeight: "bold" }}>₪{item.price} ליחידה</Typography>
//                                 <Typography variant="body1" sx={{ fontWeight: "bold" }}>סה"כ: ₪{item.price * item.qty}</Typography>
//                             </CardContent>

//                             {/* כפתורי שליטה */}
//                             <Box sx={{ display: "flex", alignItems: "center" }}>
//                                 <IconButton onClick={() => dispatch(addToCart(item))} color="primary">
//                                     <AddIcon />
//                                 </IconButton>
//                                 <Typography variant="body1" sx={{ mx: 1 }}>{item.qty}</Typography>
//                                 <IconButton onClick={() => dispatch(removeFromCart(item))} color="secondary">
//                                     <RemoveIcon />
//                                 </IconButton>
//                                 <IconButton onClick={() => dispatch(deleteFromCart(item))} color="error">
//                                     <DeleteIcon />
//                                 </IconButton>
//                             </Box>
//                         </Card>
//                     ))}
//                 </Box>

//                 {/* סיכום הסל - קבוע בצד שמאל */}

//                 <Box sx={{
//                     width: "30%",
//                     p: 3,
//                     bgcolor: "grey.100",
//                     borderRadius: "8px",
//                     boxShadow: 2,
//                     height: "fit-content",
//                     position: "sticky",
//                     top: "100px"
//                 }}>

//                     <Typography variant="h5" sx={{ mb: 2 }}>סיכום ההזמנה</Typography>
//                     <Typography variant="body1">סה"כ פריטים: {countInCart}</Typography>
//                     <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>סה"כ לתשלום: ₪{sumInCart}</Typography>
//                     <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/checkout")}>
//                          לקופה
//                     </Button>
//                 </Box>
//             </Box>
//         </>
//     );
// };

// export default ShoppingCart;
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; // אייקון עגלת קניות
import { useEffect } from "react";

const ShoppingCart = () => {
    let dispatch = useDispatch();
    let arr = useSelector(state => state.cart.arr);
    let navigate = useNavigate();
    let sumInCart = useSelector(state => state.cart.sumInCart);
    let countInCart = useSelector(state => state.cart.countInCart);
    let user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <>
            <div style={{ marginTop: "80px" }}></div>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", p: 3, direction: "rtl" }}>

                {/* אם הסל ריק - מציג הודעה וכפתור חזרה למוצרים */}
                {arr.length === 0 ? (
                    <Box sx={{
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "60vh"
                    }}>
                        <ShoppingCartOutlinedIcon sx={{ fontSize: 80, color: "grey.500", mb: 2 }} />
                        <Typography variant="h5" sx={{ mb: 2, color: "grey.700" }}>
                            הסל שלך ריק
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            כאן יוצגו המוצרים שתוסיף לעגלת הקניות
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => navigate("/list")}  sx={{backgroundColor:"red" ,borderRadius:"20px"}}>
                            מעבר לרשימת המוצרים
                        </Button>
                    </Box>
                ) : (
                    <>
                        {/* רשימת המוצרים בסל - בצד ימין */}
                        <Box sx={{ width: { xs: "100%", sm: "65%" }, overflowY: "auto" }}>
                            {[...arr].reverse().map(item => (
                                <Card key={item._id} sx={{ display: "flex", mb: 2, alignItems: "center", p: 2 }}>
                                    {/* תמונת המוצר */}
                                    <Box sx={{ width: "80px", height: "80px", mr: 2 }}>
                                        <img src={item.image} alt={item.productName} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
                                    </Box>

                                    {/* פרטי המוצר */}
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6">{item.productName}</Typography>
                                        <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>₪{item.price} ליחידה</Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>סה"כ: ₪{item.price * item.qty}</Typography>
                                    </CardContent>

                                    {/* כפתורי שליטה */}
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <IconButton
                                            onClick={() => dispatch(addToCart(item))}
                                            sx={{ color: "black" }} // הגדרת הצבע לשחור
                                        >
                                            <AddIcon />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ mx: 1 }}>{item.qty}</Typography>

                                        <IconButton
                                            onClick={() => dispatch(removeFromCart(item))}
                                            sx={{ color: "black" }} // הגדרת הצבע לשחור
                                        >
                                            <RemoveIcon />
                                        </IconButton>

                                        <IconButton
                                            onClick={() => dispatch(deleteFromCart(item))}
                                            sx={{ color: "black" }} // הגדרת הצבע לשחור
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Card>
                            ))}
                        </Box>

                        {/* סיכום הסל - קבוע בצד שמאל */}
                        <Box
                            sx={{
                                width: { xs: "100%", sm: "30%" },
                                p: 3,
                                bgcolor: "white", // צבע לבן
                                borderRadius: "8px", // פינות מעוגלות
                                boxShadow: "none", // ללא צל
                                height: "fit-content",
                                position: { xs: "static", sm: "sticky" },
                                top: "100px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start", // align text to left
                            }}
                        >
                            <Typography variant="body1" sx={{ marginBottom: 1 }}>סה"כ פריטים: {countInCart}</Typography>
                            <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: 2 }}>סה"כ לתשלום: ₪{sumInCart}</Typography>

                            {/* כפתור לקופה */}
                            <Button
                                variant="outlined"
                                sx={{
                                    color: "red",
                                    borderColor: "red",
                                    bgcolor: "white",
                                    '&:hover': {
                                        bgcolor: "red",
                                        color: "white",
                                    },
                                    borderRadius: "50px",
                                    padding: "7px 24px",
                                    cursor: "pointer",
                                    width: "100%",
                                }}
                                fullWidth
                                onClick={() => navigate(user ? "/checkout" : "/login")}
                            >
                                לקופה
                            </Button>


                            {/* כפתורים להתחברות והרשמה */}

                        </Box>
                    </>
                )}
            </Box>
        </>
    );
};

export default ShoppingCart;