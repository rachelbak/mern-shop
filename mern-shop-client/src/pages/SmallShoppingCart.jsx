
// import { useSelector } from "react-redux";
// const SmallShoppingCart = () => {
//     let arr = useSelector(state => state.cart.arr);
//     let countInCart = useSelector(state => state.cart.countInCart);
//     let sumInCart = useSelector(state => state.cart.sumInCart);
//     return (<>

//         <p>כמות מוצרים בעגלה:{countInCart}</p>
//         <p>לתשלום:{sumInCart}</p>
//         {arr.map(item => <li key={item._id}>{item.nameproduct}
//             <p>{item.productName}</p>
//             <p> ש"ח{item.price}</p>
//             <p> ש"ח{item.price * item.qty}סה"כ</p>
//             <p>{item.qty}כמות: </p>
//             <img src={item.image} />
//         </li>)}

//     </>)
// }
// export default SmallShoppingCart;


// import { useSelector } from "react-redux";
// import { Box, Grid, Card, CardContent, Typography, CardMedia, Divider } from "@mui/material";

// const SmallShoppingCart = () => {
//     let arr = useSelector(state => state.cart.arr);
//     let countInCart = useSelector(state => state.cart.countInCart);
//     let sumInCart = useSelector(state => state.cart.sumInCart);

//     return (
//         <Box sx={{

//             width: "300px", // גודל הסל הקטן
//             padding: "15px",
//             backgroundColor: "white",
//             boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//             borderRadius: "8px",
//             overflowY: "auto", // במקרה של יותר מדי מוצרים
//             maxHeight: "500px"
//         }}>
//             <Typography variant="h6" component="p" sx={{ fontWeight: "bold", marginBottom: "10px", color: "red" }}>
//                 כמות מוצרים בעגלה: {countInCart}
//             </Typography>
//             <Typography variant="h6" component="p" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
//                 לתשלום: {sumInCart} ₪
//             </Typography>

//             {/* הצגת המוצרים בעגלה */}
//             {[...arr].reverse().map(item => (
//                 <Card key={item._id} sx={{
//                     display: "flex", // הופך את הכרטיס למבנה של רצועה
//                     marginBottom: "15px",

//                     boxShadow: "none",
//                     borderRadius: "8px",
//                     padding: "10px",
//                     border: "1px solid #e0e0e0", // גבול עדין סביב הכרטיס
//                 }}>
//                     {/* התמונה בצד ימין */}
//                     <CardMedia
//                         component="img"
//                         sx={{
//                             width: "80px", // גודל התמונה
//                             height: "80px",
//                             objectFit: "cover",
//                             borderRadius: "8px"
//                         }}
//                         image={item.image}
//                         alt={item.nameproduct}
//                     />

//                     {/* הפרטים בצד שמאל */}
//                     <CardContent sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "center",
//                         paddingLeft: "10px"
//                     }}>
//                         <Typography variant="body2" component="p" sx={{ fontWeight: "bold", marginBottom: "5px" }}>
//                             {item.nameproduct}
//                         </Typography>
//                         <Typography variant="body2" component="p" sx={{ marginBottom: "5px" }}>
//                             מחיר: {item.price} ₪
//                         </Typography>
//                         <Typography variant="body2" component="p" sx={{ marginBottom: "5px" }}>
//                             כמות: {item.qty}
//                         </Typography>
//                         <Divider sx={{ marginY: "5px" }} />
//                         <Typography variant="body2" component="p" sx={{ fontWeight: "bold" }}>
//                             סה"כ: {item.price * item.qty} ₪
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             ))}
//         </Box>
//     );
// };

// export default SmallShoppingCart;

import { useSelector } from "react-redux";
import { Box, Card, CardContent, Typography, CardMedia, Divider, Button } from "@mui/material";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SmallShoppingCart = () => {
    let arr = useSelector(state => state.cart.arr);
    let countInCart = useSelector(state => state.cart.countInCart);
    let sumInCart = useSelector(state => state.cart.sumInCart);
    let navigate = useNavigate()
    const scrollableRef = useRef(null);
    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = 0;
        }
    }, [arr]);

    return (
        <Box sx={{
            width: "300px",
            // padding: "15px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            maxHeight: "500px",
            direction: "rtl"
        }}>
            {/* חלק עליון קבוע */}
            <Box sx={{
                marginBottom: "15px",
                backgroundColor: "#f5f5f5",
                padding: "5px",
                borderRadius: "8px"
            }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: "bold", marginBottom: "10px", color: "bkack" }}>
                    {countInCart} פריטים בסל הקניות
                </Typography>

            </Box>

            {/* אזור הגלילה */}
            <Box sx={{
                flexGrow: 1,
                overflowY: "auto",
                marginBottom: "15px",
                maxHeight: "210px"
            }} ref={scrollableRef}>
                {[...arr].reverse().map(item => (
                    <Card key={item._id} sx={{
                        display: "flex",
                        marginBottom: "15px",
                        boxShadow: "none",
                        borderRadius: "8px",
                        padding: "10px",
                        border: "1px solid #e0e0e0",
                    }}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "8px"
                            }}
                            image={item.image}
                            alt={item.nameproduct}
                        />

                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            paddingLeft: "10px"
                        }}>
                            <Typography variant="body2" sx={{ fontWeight: "bold", marginBottom: "5px" }}>
                                {item.nameproduct}
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: "5px" }}>
                                מחיר: {item.price} ₪
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: "5px" }}>
                                כמות: {item.qty}
                            </Typography>
                            <Divider sx={{ marginY: "5px" }} />
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                סה"כ: {item.price * item.qty} ₪
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
                סה"כ: {sumInCart} ₪
            </Typography>
            {/* חלק תחתון קבוע */}
            <Box sx={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px"
            }}>


                <Button variant="outlined"
                    onClick={() =>  navigate("/ShoppingCart")}
                    sx={{
                        width: "48%",
                        color: "black",
                        border: "1px solid black",
                        borderRadius: "20px",
                        '&:hover': {
                            backgroundColor: "#ddd"
                        }
                    }}>
                    לצפייה בסל
                </Button>
                <Button variant="contained"
                    onClick={() => {
                        if (user) {
                            navigate("/checkout");
                        } else {
                            navigate("/login");
                        }
                    }}

                    sx={{
                        width: "48%",
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "20px",
                        '&:hover': {
                            backgroundColor: "#c40000"
                        }
                    }}>
                    לקופה
                </Button>


            </Box>
        </Box>
    );
};

export default SmallShoppingCart;
